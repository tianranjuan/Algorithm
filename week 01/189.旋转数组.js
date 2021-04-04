/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 旋转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  let tmpArr = [...nums];
  if ((k %= nums.length) === 0) {
    return;
  }
  for (let i = 0; i < nums.length; i++) {
    nums[(i + k) % nums.length] = tmpArr[i];
  }
};
// @lc code=end
