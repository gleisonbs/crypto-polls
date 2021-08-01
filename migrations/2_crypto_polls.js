const CryptoPolls = artifacts.require("CryptoPolls");

module.exports = function (deployer) {
  deployer.deploy(CryptoPolls);
};
