**简易实现**

```js
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
```

**class 实现**

```js
// 终止符
const count = Symbol("count");
class Trie {
  constructor() {
    this.root = Object.create(null);
  }

  insert(word) {
    let node = this.root;
    for (let c of word) {
      if (!node[c]) node[c] = Object.create(null);
      node = node[c];
    }

    // 统计出现次数
    if (!(count in node)) {
      node[count] = 0;
    }

    node[count]++;
  }

  // 常用的方法
  // 1. 统计出现频次最多的字符串
  most() {
    let max = 0;
    let maxWord = null;
    let visit = (node, word) => {
      if (node[count] && node[count] > max) {
        max = node[count];
        maxWord = word;
      }

      for (let p in node) {
        visit(node[p], word + p);
      }
    };

    visit(this.root, "");
    return {
      max,
      maxWord,
    };
  }

  // 2. 搜素前缀
  searchPrefix(word) {
    let node = this.root;
    for (let c of word) {
      if (!node[c]) return false;
      node = node[c];
    }
    return node;
  }

  // 3. 搜索字符串是否在trie中
  search(word) {
    let node = this.searchPrefix(word);
    return !!(node && node[$]);
  }

  // 4. 前缀是否存在
  startsWith(word) {
    return !!this.searchPrefix(word);
  }
}
```
