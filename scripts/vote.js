const TruffleToken = artifacts.require("TruffleToken");
const TruffleDAO = artifacts.require("TruffleDAO");
const Web3 = require("web3");


const main = async (cb) => {
  try {
    const accounts = await web3.eth.getAccounts();
    console.log(accounts)
    const token = await TruffleToken.deployed();
    const dao = await TruffleDAO.deployed();
    const mint = await token.mint(accounts[0], 10000);

    console.log('Tokens minted to 🦄: ', accounts[0],"transaction hash:", mint.tx);

  } catch(err) {
    console.log('Doh! ', err.message);
  }
  cb();
}

module.exports = main;
