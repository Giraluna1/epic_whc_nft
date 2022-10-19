require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

ACCOUNT_ROPSTEN = process.env.ACCOUNT_ROPSTEN;
URL_ROPSTEN = process.env.URL_ROPSTEN

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks:{
    ropsten: {
      url:URL_ROPSTEN,
      accounts:[ACCOUNT_ROPSTEN]
  }
}
};
