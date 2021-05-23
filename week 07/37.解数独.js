/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  let nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const block = new Array(9); // 块中可用数字
  const row = new Array(9); // 行中可用数字
  const col = new Array(9); // 列中可用数字

  for (let i = 0; i < 9; i++) {
    block[i] = new Set(nums);
    row[i] = new Set(nums);
    col[i] = new Set(nums);
  }

  const getBlockIndex = (i, j) => {
    // 根据坐标，获取所在的小框的索引
    return (((i / 3) | 0) * 3 + j / 3) | 0; // |0 是向下取整
  };

  const empty = [];
  // 预处理
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === ".") {
        // 记录下空格坐标
        empty.push([i, j]);
      } else {
        // 从可用候选中删除掉预填项
        row[i].delete(board[i][j]);
        col[j].delete(board[i][j]);
        block[getBlockIndex(i, j)].delete(board[i][j]);
      }
    }
  }

  const backtrack = (index = 0) => {
    if (index === empty.length) return true;
    const [i, j] = empty[index];
    let nums = [
      Array.from(row[i]),
      Array.from(col[j]),
      Array.from(block[getBlockIndex(i, j)]),
    ].reduce((a, b) => a.filter((c) => b.includes(c)));
    for (let num of nums) {
      row[i].delete(num);
      col[j].delete(num);
      block[getBlockIndex(i, j)].delete(num);
      board[i][j] = num;
      if (backtrack(index + 1)) return true;
      row[i].add(num);
      col[j].add(num);
      block[getBlockIndex(i, j)].add(num);
    }
    return false;
  };

  backtrack(0);
};
// @lc code=end
solveSudoku([
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
]);
