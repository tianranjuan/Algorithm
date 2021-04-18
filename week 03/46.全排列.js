/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let ans = [];
  let used = new Set();
  // ans, nums, max, index, curr
  permutation(ans, nums, nums.length, 0, []);
  function permutation(ans, nums, max, index, curr) {
    if (index === max) {
      ans.push([...curr]);
      return;
    }

    for (let i = 0; i < max; i++) {
      if (used.has(nums[i])) {
        continue;
      }
      used.add(nums[i]);
      permutation(ans, nums, max, index + 1, [...used]);
      used.delete(nums[i]);
    }
  }
  return ans;
};
// @lc code=end
permute([1, 2, 3]);
