const { assert } = require('chai');
const { default: Web3} = require('web3');

const CryptoPolls = artifacts.require('../contracts/CryptoPolls.sol');

contract('CryptoPolls', ([deployer, author]) => {
  let cryptoPolls;
  const title = "test.title"
  describe('Deployment', () => {
    before(async () => {
      cryptoPolls = await CryptoPolls.deployed();
    })

    it('Deploys succesfully', async () => {
      const address = cryptoPolls.address;

      assert.notEqual(address, 0);
      assert.notEqual(address, '');
      assert.notEqual(address, null);
      assert.notEqual(address, undefined);
    })

    it('Creates a poll', async () => {
      let totalPolls = await cryptoPolls.totalPolls();
      assert.equal(totalPolls.toNumber(), 0, "starts with totalPolls set to 0");
      
      await cryptoPolls.createPoll(title, { from: author });

      totalPolls = await cryptoPolls.totalPolls();
      assert.equal(totalPolls.toNumber(), 1, "increments totalPolls to 1 after creating poll");

      const pollOwner = await cryptoPolls.pollToOwner(1);
      assert.equal(pollOwner, author, "pollOwner is the author");

      const userPoll = await cryptoPolls.polls(1);
      assert.equal(userPoll.id.toNumber(), 1, "id is correct");
      assert.equal(userPoll.author, author, "author is correct");
      assert.equal(userPoll.voteCount, 0, "vote count is correct");
      assert.equal(userPoll.title, title, "title is correct");
    })
  })
})