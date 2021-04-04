/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/** 暴力
 * 时间：O(n^2)
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let j = 1;
  while(j < nums.length){
    for (let i = 0; i < nums.length; i++){
      if (i !== j &&  nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
    j++;
  }
};
// @lc code=end

// @lc code=start
/** hash表
 * 时间：O(n)
 * 空间:O(n)
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [i, map.get(target - nums[i])];
    } else {
      map.set(nums[i], i);
    }
  } 
};
// @lc code=end

// @lc code=start
/** 双指针
 * 时间：O(n)
 * 空间:O(1)
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
  let i = 0, j = 1;
  let len = nums.length - 1;
  while(nums[i] + nums[j] !== target) {
    if (j === len) {
      i++;
      j = i;
    }
    j++;
  }
  return [i, j];
};
// @lc code=end


