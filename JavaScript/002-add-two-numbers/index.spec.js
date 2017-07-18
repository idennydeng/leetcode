const expect = require('chai').expect;
const test = require('mocha').test;
const ListNode = require('./listnode');
const addTwoNumbers = require('./index');

test('002-add-two-numbers', () => {
  const a1 = [2, 4, 3];
  const l1 = ListNode.fromArray(a1);
  expect(l1.val).to.equal(2);
  expect(l1.next.val).to.equal(4);
  expect(l1.next.next.val).to.equal(3);
  expect(ListNode.toArray(l1)).to.deep.equal(a1);

  const a2 = [5, 6, 4];
  const l2 = ListNode.fromArray(a2);
  expect(addTwoNumbers(null, null)).to.equal(null);
  expect(ListNode.toArray(addTwoNumbers(l1, null))).to.deep.equal(a1);
  expect(ListNode.toArray(addTwoNumbers(null, l2))).to.deep.equal(a2);
  expect(ListNode.toArray(addTwoNumbers(l1, l2))).to.deep.equal([7, 0, 8]);

  const a3 = [3, 3, 7];
  const l3 = ListNode.fromArray(a3);
  expect(ListNode.toArray(addTwoNumbers(l2, l3))).to.deep.equal([8, 9, 1, 1]);
});
