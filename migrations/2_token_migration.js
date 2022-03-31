const TruffleToken = artifacts.require("TruffleToken");

module.exports = function (deployer) {
  deployer.deploy(TruffleToken);
};
