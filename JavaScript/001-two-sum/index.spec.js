const expect = require('chai').expect;
const test = require('mocha').test;
const twoSum = require('./index');

test('001-two-sum', () => {
  expect(twoSum([3, 2, 4], 6)).to.deep.equal([1, 2]);
  expect(twoSum([3, 2, 2, 4], 6)).to.deep.equal([2, 3]);
  expect(twoSum([2, 7, 11, 15], 9)).to.deep.equal([0, 1]);
});
