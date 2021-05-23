/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/** 斜角计算 row+col row-col
 * @param {number} n
 * @return {string[][]}
 */

var solveNQueens = function (n) {
  let ans = [];

  let col = new Set();
  let pie = new Set();
  let na = new Set();

  function DFS(max, row, ans, curr) {
    // 退出条件
    if (row >= max) {
      ans.push(curr);
      return;
    }
    // 处理逻辑
    for (let i = 0; i < max; i++) {
      if (col.has(i) || pie.has(row + i) || na.has(row - i)) {
        continue;
      }
      col.add(i);
      pie.add(row + i);
      na.add(row - i);
      DFS(max, row + 1, ans, [...col]);
      // 清理当前层条件
      col.delete(i);
      pie.delete(row + i);
      na.delete(row - i);
    }
  }

  DFS(n, 0, ans, []);

  function genBoard(ans, cols) {
    let board = [];
    for (let i = 0; i < ans.length; i++) {
      let rows = [];
      for (let j of ans[i]) {
        let row = Array(cols).fill(".");
        row[j] = "Q";
        rows.push(row.join(""));
      }
      board.push(rows);
    }
    return board;
  }
  return genBoard(ans, n);
};
// @lc code=end
