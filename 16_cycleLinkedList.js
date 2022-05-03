// Submission - https://leetcode.com/submissions/detail/692278960/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function (head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow == fast) {
      return true;
    }
  }

  return false;
};

const head = [3, 2, 0, -4];

// Output: true