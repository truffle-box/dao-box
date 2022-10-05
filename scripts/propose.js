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
      //Find the proposal ID by lookig through logs
      const proposalId = result.receipt.logs.find((e) => e.event == 'ProposalCreated').args.proposalId;
      console.log("Proposal Id Number:", BigInt(proposalId))
      proposalNumber = BigInt(proposalId);
      console.log('Proposal created 🦄: ', receipt.tx);
    });

    //Check state of the proposal that was just created
    const state = await dao.state(proposalNumber);
    console.log("state:", BigInt(state))

  } catch (err) {
    console.log('Doh! ', err.message);
  }
  cb();
}

module.exports = main;
