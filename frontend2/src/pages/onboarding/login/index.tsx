import './login.css'
import "@Biconomy/web3-auth/dist/src/style.css"
import React, { useState, useEffect, useRef } from 'react'
import SocialLogin from "@biconomy/web3-auth"
import { ChainId } from "@biconomy/core-types";
import { ethers } from 'ethers'
import { IBundler, Bundler } from '@biconomy/bundler'
import { BiconomySmartAccount,BiconomySmartAccountConfig, DEFAULT_ENTRYPOINT_ADDRESS } from "@biconomy/account"
import { IPaymaster, BiconomyPaymaster,} from '@biconomy/paymaster'
import { useNavigate } from "react-router-dom";


const bundler: IBundler = new Bundler({
  bundlerUrl: 'https://bundler.biconomy.io/api/v2/80001/cJPK7B3ru.dd7f7861-190d-45ic-af80-6877f74b8f44', // you can get this value from biconomy dashboard.     
  chainId: ChainId.POLYGON_MUMBAI,
  entryPointAddress: DEFAULT_ENTRYPOINT_ADDRESS,
})

const paymaster: IPaymaster = new BiconomyPaymaster({
  paymasterUrl: 'https://paymaster.biconomy.io/api/v1/80001/EfHJNN7bE.99b67561-b7fb-4385-9b7c-303d95449cba' 
})

const Login = () => {
  const [smartAccount, setSmartAccount] = useState<any>(null)
  const [interval, enableInterval] = useState(false)
  const sdkRef = useRef<SocialLogin | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [provider, setProvider] = useState<any>(null);
  let navigate = useNavigate();

  useEffect(() => {
    let configureLogin:any
    if (interval) {
      configureLogin = setInterval(() => {
        if (!!sdkRef.current?.provider) {
          setupSmartAccount()
          clearInterval(configureLogin)
        }
      }, 1000)
    }
  }, [interval])

  useEffect(() => {
    if (!smartAccount?.address) {
      return
    }

    console.log('smart account address  :', smartAccount.address)
    goToAfterOnboarding()
  }, [smartAccount])

  const goToAfterOnboarding = () => {
    navigate("/onboarding/afteronboarding");
  };

  async function login() {
    if (!sdkRef.current) {
      const socialLoginSDK = new SocialLogin()
      // const signature1 = await socialLoginSDK.whitelistUrl('https://aanft.vercel.app')
      await socialLoginSDK.init({
        chainId: ethers.utils.hexValue(ChainId.POLYGON_MUMBAI).toString(),
        network: "testnet",
        // whitelistUrls: {
        //   'https://aanft.vercel.app': signature1,
        // }
      })
      sdkRef.current = socialLoginSDK
    }
    if (!sdkRef.current.provider) {
      sdkRef.current.showWallet()
      enableInterval(true)
    } else {
      setupSmartAccount()
    }
  }

  async function setupSmartAccount() {
    if (!sdkRef?.current?.provider) return
    sdkRef.current.hideWallet()
    setLoading(true)
    const web3Provider = new ethers.providers.Web3Provider(
      sdkRef.current.provider
    )
    setProvider(web3Provider)
    
    try {
      const biconomySmartAccountConfig: BiconomySmartAccountConfig = {
        signer: web3Provider.getSigner(),
        chainId: ChainId.POLYGON_MUMBAI,
        bundler: bundler,
        paymaster: paymaster
      }
      let biconomySmartAccount = new BiconomySmartAccount(biconomySmartAccountConfig)
      biconomySmartAccount =  await biconomySmartAccount.init()
      console.log("owner: ", biconomySmartAccount.owner)
      console.log("address: ", await biconomySmartAccount.getSmartAccountAddress())
      console.log("deployed: ", await biconomySmartAccount.isAccountDeployed( await biconomySmartAccount.getSmartAccountAddress()))

      setSmartAccount(biconomySmartAccount)
      setLoading(false)
    } catch (err) {
      console.log('error setting up smart account... ', err)
    }
  }

  const logout = async () => {
    if (!sdkRef.current) {
      console.error('Web3Modal not initialized.')
      return
    }
    await sdkRef.current.logout()
    sdkRef.current.hideWallet()
    setSmartAccount(null)
    enableInterval(false)
  }

  return (
    <React.Fragment>
        {!smartAccount && !loading && <div className="login-index">
          <div className="overlap-group-wrapper">
            <div className="overlap-group">
              <p className="text-wrapper">Simply sign in, and everything will be taken care of</p>
              <div className="div">Sign in</div>
              <img
                className="fury-logo-graphic"
                alt="Fury logo graphic"
                src="https://cdn.animaapp.com/projects/64fe857ab4e762deb167d3a8/releases/64fe88bd328c829ae1d3b1d9/img/fury-logo-graphic-2@2x.png"
              />
              <div className="text-wrapper-2">Continue with</div>
              <div>
                <button type='button' className="btn" onClick={login}>
                  <img
                    className="google"
                    alt="Google"
                    src="https://cdn.animaapp.com/projects/64fe857ab4e762deb167d3a8/releases/64fec1d2abb3145103b59ea0/img/google.png"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>}
    </React.Fragment>
  );
};

export default Login;
