// Linked List Cycle

// Problem Description:
// Given a linked list, determine if it has a cycle in it.


function hasCycle(head) {
  let slow = head, fast = head;
  
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    
    if (slow === fast) return true;
  }
  
  return false;
}

// Test case
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Create a cycle list
const head = new ListNode(3);
const node1 = new ListNode(2);
const node2 = new ListNode(0);
const node3 = new ListNode(-4);
head.next = node1;
node1.next = node2;
node2.next = node3;
node3.next = node1; // cycle here

console.log(hasCycle(head)); // Output: true