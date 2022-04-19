// Submission Code - https://leetcode.com/submissions/detail/683214017/

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
 * @return {TreeNode}
 */
const invertTree = function (root) {

  if (!root) {
    return null;
  }

  // If nodes are present then swap them
  let temp = root.left;
  root.left = root.right;
  root.right = temp;

  // Do same for children nodes also
  invertTree(root.left);
  invertTree(root.right);

  return root;
};