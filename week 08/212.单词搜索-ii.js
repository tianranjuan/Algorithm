/*
 * @lc app=leetcode.cn id=212 lang=javascript
 *
 * [212] 单词搜索 II
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
const $ = Symbol("$");
const initTire = (words) => {
  let root = Object.create(null);
  for (let word of words) {
    let node = root;
    for (let c of word) {
      if (!node[c]) node[c] = Object.create(null);
      node = node[c];
    }
    node[$] = word;
  }
  return root;
};

const dfs = (board, trie, x, y, ans) => {
  if (trie[$]) {
    ans.push(trie[$]);
    trie[$] = null;
  }

  if (x < 0 || y < 0 || x >= board[0].length || y >= board.length) return;

  if (!trie[board[y][x]]) return;

  let c = board[y][x];
  board[y][x] = null;
  dfs(board, trie[c], x + 1, y, ans);
  dfs(board, trie[c], x - 1, y, ans);
  dfs(board, trie[c], x, y + 1, ans);
  dfs(board, trie[c], x, y - 1, ans);
  board[y][x] = c;
};

var findWords = function (board, words) {
  const ans = [];
  const trie = initTire(words);

  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[0].length; x++) {
      dfs(board, trie, x, y, ans);
    }
  }

  return ans;
};
// @lc code=end
