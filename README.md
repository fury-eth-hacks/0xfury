# 0xFury Smart Contract Wallet with Account Abstraction

# Project Name

Most of the wealth is stuck in the TradFi owned by our aunties and uncles. They want to invest in the high-yield DeFi but are struggling with the user experience of web3. To make web3 inclusive for everyone, we need to onboard AMAs to the web3 wallet.

## Demo Video:

[Youtube](https://youtu.be/rQ9MLZvut_k?si=1M_94EV47UtBx3LP)

## Architecture diagram

<img width="2207" alt="diagram flow of fury" src="https://github.com/fury-eth-hacks/0xfury/assets/33903086/974a7a40-72a1-47e6-b420-39e4a160b9ec">

## Getting Started

## Frontend Setup

### Setup development environment

1. cd frontend folder
2. yarn
3. cp .env.example .env
4. Fill in REACT_APP_GOOGLE_ID_CLIENT
5. yarn start
   <@Dimas: anything to add>

### Setup progresive web appp

1. cd frontend folder
2. yarn
3. cp .env.example .env
4. Fill in REACT_APP_GOOGLE_ID_CLIENT
5. yarn build
6. yarn global add serve (if you not installed it yet)
7. npx serve -s build
8. you should see pop up message to install the app.
   <@Dimas: anything to add>

## Information

- Created at: [ETH SG 2023 Hackathon](https://www.ethereumsingapore.com/hackathon)
- Slides: [Google slides](https://docs.google.com/presentation/d/1cgHnaBStIyozLJuyFGYhqJ6XJbroeoRR3mzwFBzqxWg/edit?usp=sharing)
- Figma: [Mockups, wireframes, and logic flow](https://www.figma.com/file/wDWskcAL1KRfD2eGzEnQS8/ETH-Hackathon-2023?type=design&mode=design)
- Github: [Repo](https://github.com/fury-eth-hacks/0xfury)
- Contact: [Twitter](https://twitter.com/0xteamfury)

## Future development

- Resolve bug deploying smart contract to Mumbai with Biconomy SDK.
- Deploy the AA smart contract to Mantle network
- Social recovery, their family members can setup recovery conditions
- Setup gas tank and paymaster for their family.
