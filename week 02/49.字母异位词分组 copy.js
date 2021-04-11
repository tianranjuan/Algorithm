/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let hash = new Map();
  let sorted;
  for (let str of strs) {
    sorted = [...str].sort().join("");
    if (!hash.has(sorted)) {
      hash.set(sorted, []);
    }
    hash.get(sorted).push(str);
  }
  return Array.from(hash.values());
};
// @lc code=end
