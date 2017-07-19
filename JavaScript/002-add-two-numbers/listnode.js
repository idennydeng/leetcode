function ListNode(val) {
  this.val = val;
  this.next = null;
}

ListNode.fromArray = (arr) => {
  const reverseArr = arr.slice().reverse();
  return reverseArr.reduce((next, val) => {
    const node = new ListNode(val);
    node.next = next;
    return node;
  }, null);
};

ListNode.toArray = (listNode) => {
  const arr = [];
  let node = listNode;
  while (node) {
    arr.push(node.val);
    node = node.next;
  }
  return arr;
};

global.ListNode = ListNode;
module.exports = ListNode;
