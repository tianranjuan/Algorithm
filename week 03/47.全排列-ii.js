/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  let ans = [];
  let visited = Array(nums.length).fill(false);

  const permutation = (max, index, curr) => {
    if (index === max) {
      ans.push(curr);
      return;
    }

    for (let i = 0; i < max; i++) {
      if (visited[i] || (i > 0 && nums[i] === nums[i - 1] && !visited[i - 1])) {
        continue;
      }
      // 先尝试第一位放1
      curr.push(nums[i]);
      visited[i] = true;
      permutation(max, index + 1, [...curr]);
      visited[i] = false;
      curr.pop();
    }
  };
  nums.sort((a, b) => a - b);
  permutation(nums.length, 0, []);
  console.log("ans :>> ", ans);
  return ans;
};
// @lc code=end
permuteUnique([1, 1, 2]);
// permuteUnique([1,2,3]);
