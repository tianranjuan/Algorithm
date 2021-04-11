用于树的遍历

## 广度搜索

使用到队列，先进的先出，每次把子节点追加到队列最后，先搜索当前层然后在搜索子节点层

**基础款**

```js
function BFS(root) {
  let queue = [root];
  while (root && queue.length) {
    let p = queue.shift();
    if (p.children.length) queue.push(...p.children);
  }
}
```

**每层单独遍历**

```js
function BFS(root) {
  let queue = [root];
  while (root && queue.length) {
    // 记录下当前层有多少数据，然后每次循环中只执行相应的次数
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let p = queue.shift();
      if (p.children.length) queue.push(...p.children);
    }
  }
}
```

**每层单独遍历优化款**

```js
function BFS(root) {
  // 每次只缓存当前层的节点总数
  let preLayers = [root];
  while (preLayers.length) {
    // 记录下下一层的节点总数
    let currLayers = [];
    for (let layer of preLayers) {
      currLayers.push(...layer.children);
    }
    // 把当前层替换为下一层的数据
    preLayers = currLayers;
  }
}
```

## DFS

使用到栈，后进的先出，每次把子节点追加到栈顶，先顺着某一个节点搜索到最深层，然后再逐层的向上搜索。

**基础款**

```js
var DFS = function (root) {
  let stack = [root];
  while (root && stack.length) {
    let p = stack.pop();
    if (p.children.length) stack.push(...p.children);
  }
};
```
