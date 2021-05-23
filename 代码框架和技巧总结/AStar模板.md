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
