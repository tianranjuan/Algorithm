# 朴素搜索的优化

1. 去重
2. 剪枝

去重和剪枝是一体两面的，思想是一样的。

1. 双向搜索
2. 启发搜索

**剪枝**

将分支的结果缓存起来，一旦在后续计算中发现缓存中已存在，那么就可以直接拿过来用或者直接跳过后续的计算，达到提速的效果。

在计算斐波那契数列就是比较典型的剪枝场景，由于 f(n) = f(n-1) + f(n-2)，具有重复性，所以一旦在缓存中发现了已经计算过那么直接使用就不用再把整个分支都计算一遍了。

**回溯**

试错思想，一条路线走到黑，如果找到了结果就结束，如果没找到，那么回到某一节点上重新寻找答案。

本质上和递归一样。

主要区别在于

普通的递归在整个计算过程中并不关心已经计算过的结果，同时每次只关心当前层的事情

回溯则是多加了一个 visited 来记录尝试的结果，如果发现结果已经偏离了预期时，可以根据 visited 作为参照进行回退，重新尝试。

回溯在最坏情况下，就是递归。

# 双向 BFS

双向 BFS 的思想是用来给单向的 BFS 加速的，由于单向的 BFS 会越扩散越多，导致访问了大量的无效数据，所以处理效率并不是太高，双向 BFS 就是在单向的`头-尾方向`做 BFS 的基础上多加上了一个`尾-头方向`的 bfs，这样做的好处就是当两侧的 bfs 相遇时，就可以判断说知道了最优解，队列中剩余未处理的任务，以及未访问的节点都可以不用计算了，这就节省了很大一部分的性能，而单向的 BFS 只有在找到了目标节点后才能停止，中间不管有多少的任务都是要处理的，这就很浪费了。

模板

```js
function twoBFS(begin, end) {
  let closed = new Set(); // 记录访问过的任务
  let startQueue = new Set([begin]); // 头-尾方向的bfs队列
  let endQueue = new Set([end]); // 尾-头方向的bfs队列
  while (startQueue.size) {
    const nextQueue = new Set();
    // 技术处理，每次都先处理任务少的队列，这里是保证startQueue永远是任务少的那个
    // 可以如此做的原因是：因为随着bfs的扩散，待处理任务会越来越多，如果只考虑一个方向的话那么另一个方向就没有处理的机会了，如果两侧同时处理的话，又需要处理太多的边界条件，所以采用每次处理两个任务队列中拥有较少任务的队列，可以保证两侧的bfs都有机会处理，理想情况基本应该是1:1的比例
    if (endQueue.size < startQueue.size) {
      [startQueue, endQueue] = [endQueue, startQueue];
    }
    // 处理当前队列中的任务
    for (let curr of startQueue) {
      // 如果当前任务与endQueue中重合，证明两个BFS已经对接上了，返回结果
      if (endQueue.has(curr)) {
        return true;
      }
      // 如果当前任务没有处理过 并且 通过了验证，那么就添加到下一次的任务队列中，并且标记已访问
      if (!closed(curr) && validate(curr)) {
        nextQueue.push(curr);
        closed(curr);
      }
    }
    // 此时startQueue中的任务已经处理完毕，因为不会重复处理之前的任务，所以
    // 将下一次的节点覆盖到startQueue
    startQueue = nextQueue;
  }
  return false;
}
```

**A\*搜索**

A\*搜索本质上还是 BFS，只是在获取队列中任务时添加了一个优先级，即适用优先队列来存储未处理的任务。

模板：

```js
// Javascript
function aStarSearch(graph, start, end) {
  // graph 使用二维数组来存储数据
  // 使用SortedArray来模拟有限对垒
  let collection = new SortedArray(
    [start],
    (p1, p2) => distance(p1) - distance(p2)
  );
  while (collection.length) {
    let [x, y] = collection.take();
    if (x === end[0] && y === end[1]) {
      return true;
    }
    insert([x - 1, y]);
    insert([x + 1, y]);
    insert([x, y - 1]);
    insert([x, y + 1]);
  }
  return false;

  // 估值函数
  function distance([x, y]) {
    return (x - end[0]) ** 2 - (y - end[1]) ** 2;
  }
  // 检查目标点是否合法
  function insert([x, y]) {
    if (graph[x][y] !== 0) return;
    if (x < 0 || y < 0 || x >= graph[0].length || y > graph.length) {
      return;
    }
    graph[x][y] = 2;
    collection.insert([x, y]);
  }
}
class SortedArray {
  constructor(data, compare) {
    this.data = data;
    this.compare = compare;
  }
  // 每次取最小值
  take() {
    let min = this.data[0];
    let minIndex = 0;
    for (let i = 1; i < this.data.length; i++) {
      if (this.compare(min, this.data[i]) > 0) {
        min = this.data[i];
        minIndex = i;
      }
    }
    this.data[minIndex] = this.data[this.data.length - 1];
    this.data.pop();
    return min;
  }
  insert(value) {
    this.data.push(value);
  }
  get length() {
    return this.data.length;
  }
}
```

**估值函数**

在 A*中还有一个重要的概念：估值函数，估值函数是优先队列如何判断优先级的标准，一个好的估值函数可以使 A*拥有更好的性能。

估值函数一般情况下有：

1. 欧氏距离
2. 曼哈顿距离
3. Dijkstra
4. ...

最简单的当属`曼哈顿距离`


**优先队列的选择**

上面模板中使用的是数组来模拟的优先队列，性能上稍有不足，更好的方式使用选择使用堆来实现优先队列。