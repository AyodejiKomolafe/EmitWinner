const hre = require("hardhat");
const {ethers, Wallet} = require("ethers");

const winnerAddress = "0xB2aE81593B3962cB73E378802a24816efB3A82F3"
const contractAddress = "0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502"

async function main() {
    const contract = await hre.ethers.getContractAt("Winner", winnerAddress);

    const resp = await contract.attemptWinner(contractAddress);

    console.log(await resp.wait())

}
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
})