const PollCreation = artifacts.require("PollCreation");

module.exports = function (deployer) {
  deployer.deploy(PollCreation);
};
