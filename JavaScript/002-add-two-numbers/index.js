/**
 * Definition for singly-linked list.
 *
 * function ListNode(val) {
 *   this.val = val;
 *   this.next = null;
 * }
 */
const ListNode = global.ListNode;

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
  const head = new ListNode(-1);
  let current = head;
  let node1 = l1;
  let node2 = l2;
  let carry = 0;

  while (node1 || node2 || carry > 0) {
    let sum = carry;
    if (node1) {
      sum += node1.val;
      node1 = node1.next;
    }

    if (node2) {
      sum += node2.val;
      node2 = node2.next;
    }

    current.next = new ListNode(parseInt(sum % 10, 10));
    carry = parseInt(sum / 10, 10);
    current = current.next;
  }

  return head.next;
}

module.exports = addTwoNumbers;
