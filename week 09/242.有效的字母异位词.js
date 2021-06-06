/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * 解法1： 排序字符串后比较
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// var isAnagram = function (s, t) {
//   return (
//     s.length === t.length && [...s].sort().join("") === [...t].sort().join("")
//   );
// };
// @lc code=end
/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */
// @lc code=start
/**
 * 解法2： 排序字符串后比较
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// var isAnagram = function (s, t) {
//   if (s.length !== t.length) {
//     return false;
//   }

//   let hash = {};
//   s.split("").map((c) => (hash[c] ? hash[c]++ : 1));
//   t.split("").map((c) => (hash[c] ? hash[c]-- : -1));
//   return Object.keys(hash).every((ket) => hash[key] === 0);
// };
// @lc code=end

// @lc code=start
/**
 * 解法3：计数排序
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  let hash = Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    hash[s.charCodeAt(i) - 97]++;
    hash[t.charCodeAt(i) - 97]--;
  }
  return hash.every((c) => c === 0);
};
// @lc code=end

/***
 * 解法1：
 *  将两个字符串排序后，比较两个字符串是否相同即可。
 * 解法2：
 *  使用hash来进行解题，遍历两个字符串，将每个字符当做key存储到hash中，如果是s串字符++，如果是t串字符--
 * 解法3：
 *  使用数组来替代hash，定义26长度的数组，计算ascii码，然后添加到数组中，如果是s串字符++，如果是t串字符--
 */
