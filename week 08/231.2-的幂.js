/*
 * @lc app=leetcode.cn id=231 lang=javascript
 *
 * [231] 2的幂
 */

// @lc code=start
/** 2的幂应该是2，4，8
 *  2进制的标识 10, 100, 1000
 *  如果是2的幂的话，n-1后应该除首位外都是1，
 *  此时与原数做按位与（&）操作应该为0，
 *  如果不是2的幂则不为0
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  return n > 0 && (n & (n - 1)) === 0;
};
// @lc code=end
