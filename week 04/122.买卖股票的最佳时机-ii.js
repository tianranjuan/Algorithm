/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/** 贪心解法：
 * 一旦当前比昨天看涨就直接计算利润
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let lr = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      lr += prices[i] - prices[i - 1];
    }
  }
  return lr;
};
// @lc code=end
maxProfit([7, 1, 5, 3, 6, 4]);
