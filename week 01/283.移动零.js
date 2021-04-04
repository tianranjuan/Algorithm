/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/** 老师范例
 * 时间：O(n)
 * 空间：不考虑输出O(1)
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[j] = nums[i];
      if (i !== j) {
        nums[i] = 0;
      }
      j++;
    }
  }
  return nums;
};
// @lc code=end

// @lc code=start
/**
 * 滚雪球解法
 * 时间：O(n)
 * 空间：不考虑输出O(1)
 * 参考：https://leetcode.com/problems/move-zeroes/discuss/172432/THE-EASIEST-but-UNUSUAL-snowball-JAVA-solution-BEATS-100-(O(n))-%2B-clear-explanation
 * @param {*} nums 
 * @returns 
 */
var moveZeroes = function (nums) {
  // 雪球大小
  let size = 0;
  for (let i = 0; i < nums.length; i++) {
    // 如果是0收集雪球
    if (nums[i] === 0){
      size++;
    } else if(size > 0) {
      // 如果非0且已经收集到了雪球,交换位置
      [nums[i-size], nums[i]] = [nums[i], nums[i - size]]; 
    }
  }
  return nums;
};
// @lc code=end