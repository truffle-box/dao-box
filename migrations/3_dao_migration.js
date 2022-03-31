const TruffleToken = artifacts.require("TruffleToken");
const TruffleDAO = artifacts.require("TruffleDAO");

module.exports = function  (deployer) {
  deployer.then(async () => {
    try {
      const token = await TruffleToken.deployed();
      await deployer.deploy(TruffleDAO, token.address, token.address);

      const dao = await TruffleDAO.deployed();
      console.log(`DAO deployed at: ${dao.address}`);

    } catch (error) {
      console.log(error)
    }
  })
};
