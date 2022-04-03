# NFT minter

This project demonstrates a basic "NFT minter" website. You can mint "crpto punks" forged version "punked", by connecting your metamask wallet.
Only 10 NFT is available for minting. "Rinkeby Network" would be ideal for testing this project,you can check the result in "Opensea-testnet" by connecting your metamask wallet.

Stack:
React,
Hardhat,
Pinata.

#How to setup

1.git clone this repo
2."npm install" (Install dependancy)
3."npm install hardhat" (Install hardhat)
4."npx hardhat compile" (Compile smartcontract)
5.Setup account in 'Infura'and copy rinkeby url
6.Setup 'hardhat.config.js' for rinkeby network and paste the copied url along with private key of account to be used for deploying (with ethers)
7."npx hardhat run scripts/xx.js --network rinkeby" (deploy on rinkeby network)
8."npm start" (Launch react minter app)
9.Connect your metamask and enter number of NFT to be minted and mint
10.Once transcation is completed,go to opensea testnet and connect your wallet (Check your NFT)




