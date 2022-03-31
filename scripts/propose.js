const TruffleToken = artifacts.require("TruffleToken");
const TruffleDAO = artifacts.require("TruffleDAO");

const main = async (cb) => {
  try {
    const accounts = await web3.eth.getAccounts();

    const token = await TruffleToken.deployed();
    const dao = await TruffleDAO.deployed();

    await dao.propose([accounts[0]], [0], ['0x'], 'hello world')

    console.log('Proposal created 🦄');

  } catch(err) {
    console.log('Doh! ', err.message);
  }
  cb();
}

module.exports = main;
