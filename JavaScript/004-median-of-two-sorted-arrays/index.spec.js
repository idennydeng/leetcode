const expect = require('chai').expect;
const test = require('mocha').test;
const findMedianSortedArrays = require('./index');

test('004-median-of-two-sorted-arrays', () => {
  expect(findMedianSortedArrays([1, 3], [2])).to.equal(2.0);
  expect(findMedianSortedArrays([1, 2], [3, 4])).to.equal(2.5);
});
