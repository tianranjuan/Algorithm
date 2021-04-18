/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  let ans = 0;
  function DFS(root, p, q) {
    // terminator condition
    if (!root) return false;
    const left = DFS(root.left, p, q);
    const right = DFS(root.right, p, q);

    if (
      (left && right) ||
      ((root.val === q.val || root.val === p.val) && (left || right))
    ) {
      ans = root;
    }

    // 返回左子树和右子树是否包含p|q
    return left || right || root.val === q.val || root.val === p.val;
  }
  DFS(root, p, q);
  return ans;
};
// @lc code=end
