const { assert } = require('chai');
const { default: Web3} = require('web3');

const PollCreation = artifacts.require('../contracts/PollCreation.sol');

contract('PollCreation', () => {
  let poll;
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
  })
})