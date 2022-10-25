const TruffleToken = artifacts.require("TruffleToken");
const TruffleDAO = artifacts.require("TruffleDAO");

const main = async (cb) => {
  try {
    let proposalNumber;
    const token = await TruffleToken.deployed();
    const dao = await TruffleDAO.deployed();
    //Create a proposal
    const receipt = await dao.propose([token.address], [1], ['0x'], 'hello world').then(async function (result) {
      console.log(result)
      console.log('Proposal created 🦄: ', result.tx);
    });
  } catch (err) {
    console.log('Doh! ', err.message);
  }
  cb();
}

module.exports = main;
