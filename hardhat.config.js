require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: process.env.ALCHEMY_GOERLI_RPC_URL,
      accounts: [process.env.GOERLI_PRIVATE_KEY],
    },
  },
};
