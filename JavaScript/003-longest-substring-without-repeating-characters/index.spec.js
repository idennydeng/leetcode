const expect = require('chai').expect;
const test = require('mocha').test;
const lengthOfLongestSubstring = require('./index');

test('003-longest-substring-without-repeating-characters', () => {
  expect(lengthOfLongestSubstring('abcabcbb')).to.equal(3);
  expect(lengthOfLongestSubstring('pwwkew')).to.equal(3);
  expect(lengthOfLongestSubstring('bbbbb')).to.equal(1);
  expect(lengthOfLongestSubstring('')).to.equal(0);
});
