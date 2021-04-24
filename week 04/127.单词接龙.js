/*
 * @lc app=leetcode.cn id=127 lang=javascript
 *
 * [127] 单词接龙
 */

/** 解法1：单向BFS
 *  本质上是层遍历，如果本层中有符合的结果那么就返回当前层的level
 *  1. 如果endword不在wordList 中直接false
 *  2. 按位替换画出递归图，hit -> ["_it", "h_t", "hi_"] -> hot .... -> cog
 *  3. 重点在于去除掉已经使用过的字典值能减少很多的重复计算
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
// var ladderLength = function (beginWord, endWord, wordList) {
//   if (!wordList.includes(endWord)) {
//     return 0;
//   }
//   let queue = [beginWord];
//   let vis = new Set(wordList);
//   let level = 1;
//   while (queue.length) {
//     let size = queue.length;
//     for (let k = 0; k < size; k++) {
//       let curr = queue.shift();
//       if (curr === endWord) return level;
//       for (let i = 0; i < curr.length; i++) {
//         for (let c = 97; c <= 122; c++) {
//           let str =
//             curr.slice(0, i) + String.fromCharCode(c) + curr.slice(i + 1);
//           if (vis.has(str)) {
//             queue.push(str);
//             vis.delete(str);
//           }
//         }
//       }
//     }
//     level++;
//   }
//   return 0;
// };

// @lc code=start
/** 解法2：双向BFS
 *  本质上是层遍历，如果本层中有符合的结果那么就返回当前层的level
 *  1. 如果endword不在wordList 中直接false
 *  2. 按位替换画出递归图，hit -> ["_it", "h_t", "hi_"] -> hot .... -> cog
 *  3. 重点在于去除掉已经使用过的字典值能减少很多的重复计算
 *  4. 较于单向BFS的改动：
 *     4.1 使用两个set来从start、end两个方向同时BFS
 *     4.2 每层遍历完后选择length较小的那个set开始BFS，即小的作为start，大的作为end
 *     4.3 如果end中能找到start那么就代表两遍对接上了，return level
 *     4.5 否则加入到下一层中
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  if (!wordList.includes(endWord)) {
    return 0;
  }
  let vised = new Set(wordList);
  let startQueue = new Set([beginWord]);
  let endQueue = new Set([endWord]);
  let level = 1;
  while (startQueue.size && endQueue.size) {
    const children = new Set();
    for (let curr of startQueue) {
      for (let i = 0; i < curr.length; i++) {
        for (let c = 97; c <= 122; c++) {
          let char = String.fromCharCode(c);
          if (char !== curr[i]) {
            let str = curr.slice(0, i) + char + curr.slice(i + 1);
            if (endQueue.has(str)) {
              return level + 1;
            }
            if (vised.has(str)) {
              children.add(str);
              vised.delete(str);
            }
          }
        }
      }
    }
    level++;
    startQueue = children;
    if (startQueue.size > endQueue.size) {
      [startQueue, endQueue] = [endQueue, startQueue];
    }
  }
  return 0;
};
// @lc code=end

