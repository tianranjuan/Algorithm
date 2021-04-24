/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
/**
 * 解法1：
 *  氛围集中情况：
 *  1. 如果是5美元直接收下，记录5元的个数
 *  2. 如果是10美元，查看是否有5美元找零，记录10元的个数，不够的话直接就找不开
 *  3. 如果是20美元，查看是否有足够的10和5美元，不用记录，因为没有找零会用20元，不够的话直接找不开
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  // 5
  let k = 0;
  // 10
  let j = 0;
  for (let i = 0; i < bills.length; i++) {
    if (bills[i] === 5) {
      k++;
    } else if (bills[i] === 10 && k > 0) {
      k--;
      j++;
    } else if (bills[i] === 20 && k > 0 && j > 0) {
      j--;
      k--;
    } else if (bills[i] === 20 && k >= 3 && j === 0) {
      k = k - 3;
    } else {
      return false;
    }
  }
  return true;
};
// @lc code=end
