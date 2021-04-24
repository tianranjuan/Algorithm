/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/** 贪心解法：
 * 1. 将孩子的胃口和饼干的能量排序
 * 2. 遍历两个数组
 *    2.1 如果饼干的能量满足孩子胃口，那么直接分配饼干，否则更换更大的饼干
 *        直到没有饼干满足条件或孩子全部分配完毕
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  g.sort((x, y) => x - y);
  s.sort((x, y) => x - y);

  let i = 0,
    j = 0;
  while (i < g.length && j < s.length) {
    if (s[j] >= g[i]) {
      i++;
      j++;
    } else {
      j++;
    }
  }
  return i;
};
// @lc code=end
