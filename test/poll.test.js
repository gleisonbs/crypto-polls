const { assert } = require('chai');
const { default: Web3} = require('web3');

const PollCreation = artifacts.require('../contracts/PollCreation.sol');

contract('PollCreation', ([deployer, author]) => {
  let poll;
  const title = "test.title"
  describe('Deployment', () => {
    before(async () => {
      poll = await PollCreation.deployed();
    })

    it('Deploys succesfully', async () => {
      const address = poll.address;

      assert.notEqual(address, 0);
      assert.notEqual(address, '');
      assert.notEqual(address, null);
      assert.notEqual(address, undefined);
    })

    it('Creates a poll', async () => {
      let totalPolls = await poll.totalPolls();
      assert.equal(totalPolls.toNumber(), 0, "starts with totalPolls set to 0");
      
      await poll.createPoll(title, { from: author });

      totalPolls = await poll.totalPolls();
      assert.equal(totalPolls.toNumber(), 1, "increments totalPolls to 1 after creating poll");

      const pollOwner = await poll.pollToOwner(1);
      assert.equal(pollOwner, author, "pollOwner is the author");

      const userPoll = await poll.polls(1);
      assert.equal(userPoll.id.toNumber(), 1, "id is correct");
      assert.equal(userPoll.author, author, "author is correct");
      assert.equal(userPoll.voteCount, 0, "vote count is correct");
      assert.equal(userPoll.title, title, "title is correct");
    })
  })
})