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

    console.log('Tokens minted to 🦄: ', accounts[0], "transaction hash:", mint.tx);
    //get proposalID

    let events = await dao.getPastEvents('ProposalCreated', { fromBlock: 0, toBlock: 'latest' })
    //console.log("Events", events)
    let propid = await events
    let propString = JSON.stringify(propid)
    let propParse = JSON.parse(propString)
    let propId = propParse[0].returnValues.proposalId
    const vote = await dao.castVote(propId, 1, {from:accounts[0]});
    console.log("You've succesfully voted on the proposal!",vote.tx)

  } catch (err) {
    console.log('Doh! ', err.message);
  }
  cb();
}

module.exports = main;
