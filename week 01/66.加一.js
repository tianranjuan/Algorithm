/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digitsigits
 * @return {number[]}
 */
var plusOne = function(digits) {
  if (digits.length === 1 && digits[0] < 9) {
    return [++digits[0]];
  }

  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i]++;
    if (digits[i] <= 9){
      return digits;
    } else {
      digits[i] = 0;
    }
  }

  digits.unshift(1);
  return digits;

};
// @lc code=end

