/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/** 题解方法
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums === null || !nums.length) return 0;
  let i = 0,
    j = 1;
  while (j < nums.length) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
    j++;
  }

  return i + 1;
};
// @lc code=end


// 双指针 + 过滤重复项 自己做的方法
// var removeDuplicates = function (nums) {
//   if (!nums.length) return 0;
//   let count = 1;
//   let i = 0,
//     j = 1;
//   while (j <= nums.length - 1) {
//     if (nums[i] === nums[j]) {
//       while(i < j && nums[j] === nums[++j]);
//     } else if (i < j) {
//       i++;
//       nums[i] = nums[j];
//       j++;
//       count++;
//     }
//   }
//   return count;
// };