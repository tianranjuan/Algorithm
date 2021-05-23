双向 BFS 的思想是用来给单向的 BFS 加速的，由于单向的 BFS 会越扩散越多，导致访问了大量的无效数据，所以处理效率并不是太高，双向 BFS 就是在单向的`头-尾方向`做 BFS 的基础上多加上了一个`尾-头方向`的 bfs，这样做的好处就是当两侧的 bfs 相遇时，就可以判断说知道了最优解，队列中剩余未处理的任务，以及未访问的节点都可以不用计算了，这就节省了很大一部分的性能，而单向的 BFS 只有在找到了目标节点后才能停止，中间不管有多少的任务都是要处理的，这就很浪费了。

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
