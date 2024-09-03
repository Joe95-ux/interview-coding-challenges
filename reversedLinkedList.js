// Problem Description:
// Given the head of a singly linked list, reverse the list, 
// and return the reversed list.

// Example
// Input: head = [1, 2, 3, 4, 5]
// Output: [5, 4, 3, 2, 1]

// Solution

class ListNode {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  function reverseLinkedList(head) {
    let prev = null;
    let current = head;
    
    while (current !== null) {
      let nextTemp = current.next; // Store the next node
      current.next = prev; // Reverse the link
      prev = current; // Move prev pointer
      current = nextTemp; // Move current pointer
    }
    
    return prev;
  }
  
  // Test case
  const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
  console.log(reverseLinkedList(head)); // Output: 5 -> 4 -> 3 -> 2 -> 1

//   Explanation:

//     Initialize prev as null and current as head.
//     Loop through the list, reversing the direction of the links.
//     Return prev as the new head of the reversed list.
