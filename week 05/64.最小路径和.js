/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  let dp = Array(grid.length).fill(Array(grid[0].length).fill(0));
  dp[0][0] = grid[0][0];
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (r === 0 && c === 0) continue;
      else if (r === 0) dp[r][c] = dp[r][c - 1] + grid[r][c];
      else if (c === 0) dp[r][c] = dp[r - 1][c] + grid[r][c];
      else dp[r][c] = grid[r][c] + Math.min(dp[r - 1][c], dp[r][c - 1]);
    }
  }
  return dp[grid.length - 1][grid[0].length - 1];
};
// @lc code=end
