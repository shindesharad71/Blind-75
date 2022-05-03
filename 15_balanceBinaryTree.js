// Submission - https://leetcode.com/submissions/detail/692116395/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isBalanced = function (root) {
  let balanced = true;

  function findHeight(root) {
    if (!root) return 0;
    if (!balanced) return;

    let leftHeight = findHeight(root.left);
    let rightHeight = findHeight(root.right);
    let diff = Math.abs(leftHeight - rightHeight);

    if (diff > 1) balanced = false;

    return Math.max(leftHeight, rightHeight) + 1;
  }

  findHeight(root)
  return balanced;
};

const root = [3, 9, 20, null, null, 15, 7];
console.log(isBalanced(root));
// Output: true