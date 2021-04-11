/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N 叉树的层序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/** 队列实现广搜
 * time: O(n)
 * space: O(n)
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let ans = [];
  let queue = [root];
  while (root && queue.length) {
    let size = queue.length;
    let children = [];
    for (let i = 0; i < size; i++) {
      let p = queue.shift();
      children.push(p.val);
      if (p.children.length) queue.push(...p.children);
    }
    ans.push(children);
  }
  return ans;
};
// @lc code=end

//  解法2： 简化的广搜
// 每次只记录当前层的节点
// let ans = [];
// if (!root) return ans;
// let preLayers = [root];

// while (preLayers.length) {
//   let currLayers = [];
//   let preVals = [];
//   for (let layer of preLayers) {
//     preVals.push(layer.val);
//     currLayers.push(...layer.children);
//   }
//   ans.push(preVals);
//   preLayers = currLayers;
// }

// return ans;
