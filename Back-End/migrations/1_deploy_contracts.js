const citizen = artifacts.require("Citizen");

module.exports = function(deployer) {
  deployer.deploy(citizen);
};
