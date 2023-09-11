const config = require("./config.json")
const { Wallet, providers, ethers } = require("ethers")
const chalk = require('chalk')
const {
  BiconomySmartAccount,
  DEFAULT_ENTRYPOINT_ADDRESS,
} = require( "@biconomy/account")
const { Bundler } = require( "@biconomy/bundler")
const { BiconomyPaymaster, IHybridPaymaster,
    PaymasterMode, } = require( "@biconomy/paymaster")
const { Transaction, UserOperation } = require( "@biconomy/core-types")

const CreateSmartWallet = async () => {
    // get EOA address from wallet provider
    let provider = new ethers.providers.JsonRpcProvider(config.rpcUrl);
    let signer = new ethers.Wallet(config.privateKey, provider);
    const eoa = await signer.getAddress();
    console.log(chalk.blue(`EOA address: ${eoa}`));

    // create bundler and paymaster instances
    const bundler = new Bundler({
        bundlerUrl: config.bundlerUrl,
        chainId: config.chainId,
        entryPointAddress: DEFAULT_ENTRYPOINT_ADDRESS,
    });
    const paymaster = new BiconomyPaymaster({
        paymasterUrl: config.biconomyPaymasterUrl,
        strictMode: false // by default is true. If set to false, then paymaster and data is still sent as 0x and account will pay in native
    });

    // create biconomy smart account instance
    const biconomySmartAccountConfig = {
        signer: signer,
        chainId: config.chainId,
        rpcUrl: config.rpcUrl,
        paymaster: paymaster, // optional
        bundler: bundler, // optional
        // nodeClientUrl: config.nodeClientUrl, // if needed to override
    };
    const biconomyAccount = new BiconomySmartAccount(biconomySmartAccountConfig);
    const biconomySmartAccount = await biconomyAccount.init( {accountIndex: config.accountIndex} );

    const address = await biconomySmartAccount.getSmartAccountAddress()
    
    console.log(address, "SmartWalletAddress")

}

const mintNft = async () => {

  // ------------------------STEP 1: Initialise Biconomy Smart Account SDK--------------------------------//  

  // get EOA address from wallet provider
  let provider = new ethers.providers.JsonRpcProvider(config.rpcUrl);
  let signer = new ethers.Wallet(config.privateKey, provider);
  const eoa = await signer.getAddress();
  console.log(chalk.blue(`EOA address: ${eoa}`));

  // create bundler and paymaster instances
  const bundler = new Bundler({
    bundlerUrl: config.bundlerUrl,
    chainId: config.chainId,
    entryPointAddress: DEFAULT_ENTRYPOINT_ADDRESS,
  });

  const paymaster = new BiconomyPaymaster({
    paymasterUrl: config.biconomyPaymasterUrl
  });

  // Biconomy smart account config
  // Note that paymaster and bundler are optional. You can choose to create new instances of this later and make account API use 
  const biconomySmartAccountConfig = {
    signer: signer,
    chainId: config.chainId,
    rpcUrl: config.rpcUrl,
    paymaster: paymaster, 
    bundler: bundler, 
  };

  // create biconomy smart account instance
  const biconomyAccount = new BiconomySmartAccount(biconomySmartAccountConfig);

  // passing accountIndex is optional, by default it will be 0. You may use different indexes for generating multiple counterfactual smart accounts for the same user
  const biconomySmartAccount = await biconomyAccount.init( {accountIndex: config.accountIndex} );


  // ------------------------STEP 2: Build Partial User op from your user Transaction/s Request --------------------------------//

  
  // mint NFT
  // Please note that for sponsorship, policies have to be added on the Biconomy dashboard https://dashboard.biconomy.io/
  // in this case it will be whitelisting NFT contract and method safeMint()

  // 1. for native token transfer no policy is required. you may add a webhook to have custom control over this
  // 2. If no policies are added every transaction will be sponsored by your paymaster
  // 3. If you add policies, then only transactions that match the policy will be sponsored by your paymaster

  // generate mintNft data
  const nftInterface = new ethers.utils.Interface([
    "function safeMint(address _to)",
  ]);

  // passing accountIndex is optional, by default it will be 0 
  // it should match with the index used to initialise the SDK Biconomy Smart Account instance 
  const scwAddress = await biconomySmartAccount.getSmartAccountAddress(config.accountIndex);

  // Here we are minting NFT to smart account address itself
  const data = nftInterface.encodeFunctionData("safeMint", [scwAddress]);
  

  const nftAddress = "0x1758f42Af7026fBbB559Dc60EcE0De3ef81f665e"; // Todo // use from config
  const transaction = {
    to: nftAddress,
    data: data,
  };

  // build partial userOp
  let partialUserOp = await biconomySmartAccount.buildUserOp([transaction]);


  // ------------------------STEP 3: Get Paymaster and Data from Biconomy Paymaster --------------------------------//


  const biconomyPaymaster = biconomySmartAccount.paymaster 

  // Here it is meant to act as Sponsorship/Verifying paymaster hence we send mode: PaymasterMode.SPONSORED which is must  
  let paymasterServiceData = {
        mode: PaymasterMode.SPONSORED,
        // optional params...
        calculateGasLimits: true, // Always recommended when using paymaster
        expiryDuration: 500, // 500 seconds
    };

  try {
    const paymasterAndDataResponse =
      await biconomyPaymaster.getPaymasterAndData(
        partialUserOp,
        paymasterServiceData
      );
      partialUserOp.paymasterAndData = paymasterAndDataResponse.paymasterAndData;


      if (
        paymasterAndDataResponse.callGasLimit &&
        paymasterAndDataResponse.verificationGasLimit &&
        paymasterAndDataResponse.preVerificationGas
      ) {
  
        // Returned gas limits must be replaced in your op as you update paymasterAndData.
        // Because these are the limits paymaster service signed on to generate paymasterAndData
        // If you receive AA34 error check here..   
  
        partialUserOp.callGasLimit = paymasterAndDataResponse.callGasLimit;
        partialUserOp.verificationGasLimit =
        paymasterAndDataResponse.verificationGasLimit;
        partialUserOp.preVerificationGas =
        paymasterAndDataResponse.preVerificationGas;
      }
  } catch (e) {
    console.log("error received ", e);
  }

  
  // ------------------------STEP 4: Sign the UserOp and send to the Bundler--------------------------------//

  console.log(chalk.blue(`userOp: ${JSON.stringify(partialUserOp, null, "\t")}`));

  // Below function gets the signature from the user (signer provided in Biconomy Smart Account) 
  // and also send the full op to attached bundler instance

  try {
  const userOpResponse = await biconomySmartAccount.sendUserOp(partialUserOp);
  console.log(chalk.green(`userOp Hash: ${userOpResponse.userOpHash}`));
  const transactionDetails = await userOpResponse.wait();
  console.log(
    chalk.blue(
      `transactionDetails: ${JSON.stringify(transactionDetails, null, "\t")}`
    )
  );
  } catch (e) {
    console.log("error received ", e);
  }
};


CreateSmartWallet()

// mintNft()





// // Note that paymaster and bundler are optional. You can choose to create new instances of this later and make account API use 
// const biconomySmartAccountConfig = {
//     signer: wallet.getSigner(),
//     chainId: ChainId.POLYGON_MAINNET, 
//     rpcUrl: '',
//     // paymaster: paymaster, // check the README.md section of Paymaster package
//     // bundler: bundler, // check the README.md section of Bundler package
// }

// const biconomyAccount = new BiconomySmartAccount(biconomySmartAccountConfig)
// const biconomySmartAccount =  await biconomyAccount.init()

// // native token transfer
// // you can create any sort of transaction following same structure 
// const transaction = {
//   to: '0x85B51B068bF0fefFEFD817882a14f6F5BDF7fF2E',
//   data: '0x',
//   value: ethers.utils.parseEther('0.1'),
// }

// // building partialUserOp
// const partialUserOp = await biconomySmartAccount.buildUserOp([transaction])

// // using the paymaster package one can populate paymasterAndData to partial userOp. by default it is '0x'

// const userOpResponse = await smartAccount.sendUserOp(partialUserOp)
// const transactionDetails = await userOpResponse.wait()
// console.log("transaction details below")
// console.log(transactionDetails)
