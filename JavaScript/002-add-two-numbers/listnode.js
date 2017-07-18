function ListNode(val) {
  this.val = val;
  this.next = null;
}

ListNode.fromArray = function(arr) {
  return arr.slice().reverse().reduce((next, val) => {
    const node = new ListNode(val);
    node.next = next;
    return node;
  }, null);
}

ListNode.toArray = function(listNode) {
  const arr = [];
  let node = listNode;
  while (node) {
    arr.push(node.val);
    node = node.next;
  }
  return arr;
}

module.exports = global.ListNode = ListNode;
