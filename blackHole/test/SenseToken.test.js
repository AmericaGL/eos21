const BigNumber = web3.BigNumber;

require('chai')
  .use(require('chai-bignumber')(BigNumber))
  .should();

const SenseToken = artifacts.require('ElementToken');

contract('SenseToken', accounts => {
  let senseToken = null;

  const name = 'Sense test';
  const symbol = 'SNS';
  const decimals = 4;
  const tokens = 100;

  beforeEach(async function () {
    senseToken = await SenseToken.new(name, symbol, tokens, decimals);
  });

  it('initial balance', async function () {
    const amount = await senseToken.balanceOf(accounts[0]);
    assert.equal(amount.toNumber(), 1000000, "not equals");
  });
});