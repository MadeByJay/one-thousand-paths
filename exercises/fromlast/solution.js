// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
  let slow = list.getFirst();
  let fast = list.getAt(n);

  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
}

function findkthfromend(list, k) {
  // initialize slow and fast pointers at head
  let slow = list.getFirst();
  let fast = slow;

  // move fast pointer k steps ahead
  for (let i = 0; i < k; ++i) {
    // if fast reaches null, k is out of range
    if (fast === null) {
      return null;
    }
    fast = fast.next;
  }

  // iterate until fast reaches the end
  while (fast !== null) {
    // move slow and fast pointers one step
    slow = slow.next;
    fast = fast.next;
  }

  // when fast reaches end, slow is at kth from end
  return slow;
}

module.exports = findkthfromend;
