/*
 * @lc app=leetcode.cn id=91 lang=javascript
 *
 * [91] 解码方法
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  let a = 0,
    b = 1,
    c = 0;
  for (let i = 1; i <= s.length; i++) {
    c = 0;
    if (s[i - 1] !== "0") {
      c += b;
    }

    if (
      i > 1 &&
      s[i - 2] !== "0" &&
      (s[i - 2] - "0") * 10 + (s[i - 1] - "0") <= 26
    ) {
      c += a;
    }
    a = b;
    b = c;
  }
  return c;
};
var numDecodings_1 = function (s) {
  let dp = Array(s.length + 1).fill(0);
  //如果是空字符串一会有一种解析
  dp[0] = 1;
  for (let i = 1; i <= s.length; i++) {
    // 转移状态1：dp[i] = dp[i - 1] -> s[i] != 0
    if (s[i - 1] !== "0") {
      dp[i] += dp[i - 1];
    }
    // 转移状态2： dp[i] = dp[i - 2] -> dp[i - 1] != 0  && s[i-1] <= 26
    if (
      i > 1 &&
      s[i - 2] !== "0" &&
      (s[i - 2] - "0") * 10 + (s[i - 1] - "0") <= 26
    ) {
      dp[i] += dp[i - 2];
    }
  }
  return dp[s.length];
};
// @lc code=end

let res = numDecodings("12");
console.log("res :>> ", res);
