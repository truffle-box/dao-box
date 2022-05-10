const TruffleToken = artifacts.require("TruffleToken");
const TruffleDAO = artifacts.require("TruffleDAO");

const main = async (cb) => {
  try {
    const token = await TruffleToken.deployed();
    const dao = await TruffleDAO.deployed();
    const receipt = await dao.propose([token.address], [0], ['0x'], 'hello world');

    console.log('Proposal created 🦄: ', receipt.tx);

  } catch(err) {
    console.log('Doh! ', err.message);
  }
  cb();
}

module.exports = main;
