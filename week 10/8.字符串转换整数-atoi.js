/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  let num = [];
  let index = 0;
  while (index < s.length && s[index] === " ") {
    index++;
  }
  let firstChar = s[index];
  if (firstChar === "+" || firstChar === "-") {
    index++;
    num[0] = firstChar;
  }

  while (
    s[index] &&
    s[index].charCodeAt() >= 48 &&
    s[index].charCodeAt() <= 57
  ) {
    num.push(s[index++]);
  }

  let res = Number(num.join("")) || 0;
  res = Math.max(res, (-2) ** 31);
  res = Math.min(res, 2 ** 31 - 1);
  return res;
};
// @lc code=end

