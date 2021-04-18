/**
 * 二叉堆 -> 大顶堆
 */
class BinaryHeap {
  constructor(size = 10) {
    // 设置对的初始大小，默认10个
    this.heap = Array(size);
    this.heapSize = 0;
  }

  insert(v) {
    // 插入失败
    if (this.isFull()) return false;
    this.heap[this.heapSize++] = v;
    return this.heapifyUp(this.heapSize - 1);
  }

  delete(i) {
    if (this.isEmpty()) return false;
    const maxElement = this.heap[i];
    this.heap[i] = this.heap[this.heapSize - 1];
    this.heap[this.heapSize - 1] = "";
    this.heapSize--;
    this.heapifyDown(i);
    return maxElement;
  }

  heapifyUp(i) {
    const val = this.heap[i];
    // 元素不是根节点且插入的新元素大于父节点
    while (i > 0 && val > this.heap[this.parent(i)]) {
      this.heap[i] = this.heap[this.parent(i)];
      i = this.parent(i);
    }
    this.heap[i] = val;
    return i;
  }

  heapifyDown(i) {
    let child;
    const tmp = this.heap[i];
    while (this.kthChild(i, 1) < this.heapSize) {
      child = this.maxChild(i);
      if (tmp >= this.heap[child]) {
        break;
      }
      this.heap[i] = this.heap[child];
      i = child;
    }
    this.heap[i] = tmp;
  }

  parent(i) {
    return Math.floor(i - 1 / 2);
  }

  kthChild(i, k) {
    return 2 * i + k;
  }

  maxChild(i) {
    const leftChild = this.kthChild(i, 1);
    const rightChild = this.kthChild(i, 2);
    return this.heap[leftChild] > this.heap[rightChild]
      ? leftChild
      : rightChild;
  }

  isEmpty() {
    return this.heapSize === 0;
  }

  isFull() {
    return this.heapSize === this.heap.length;
  }

  toString() {
    console.log("this.heap :>> ", this.heap.toString());
  }
}

// const maxHeap = new BinaryHeap();
// maxHeap.insert(1);
// maxHeap.insert(2);
// maxHeap.insert(3);
// maxHeap.toString();
// maxHeap.delete(0);
// maxHeap.toString();
// maxHeap.delete(0);
// maxHeap.toString();

class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(v) {
    // 插入失败
    this.heap.push(v);
    return this.heapifyUp(this.heap.length - 1);
  }

  peek() {
    return this.heap[0];
  }

  pop() {
    if (this.isEmpty()) return false;
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);
    return min;
  }

  heapifyUp(i) {
    const val = this.heap[i];
    // 元素不是根节点且插入的新元素大于父节点
    while (i > 0 && val < this.heap[this.parent(i)]) {
      this.heap[i] = this.heap[this.parent(i)];
      i = this.parent(i);
    }
    this.heap[i] = val;
    return i;
  }

  swap(i1, i2) {
    const temp = this.heap[i1];
    this.heap[i1] = this.heap[i2];
    this.heap[i2] = temp;
  }

  heapifyDown(i) {
    let tmp = this.heap[i];
    // 记录较小子节点下标
    let child = this.kthChild(i, 1);
    // 首先保证有左节点
    while (this.kthChild(i, 1) < this.heap.length) {
      child = this.minChild(i);
      // 处理等于或当前节点已经是最小的情况
      if (this.heap[i] <= this.heap[child]) {
        break;
      }
      //   交换位置
      this.heap[child] = this.heap[i];
      // //   更新坐标，继续下沉
      i = child;
    }
    this.heap[i] = tmp;
  }

  parent(i) {
    return Math.floor(i - 1 / 2);
  }

  kthChild(i, k) {
    return 2 * i + k;
  }

  minChild(i) {
    const leftChild = this.kthChild(i, 1);
    const rightChild = this.kthChild(i, 2);
    return this.heap[rightChild] && this.heap[rightChild] < this.heap[leftChild]
      ? rightChild
      : leftChild;
  }

  get length() {
    return this.heap.length;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  toString() {
    console.log("heap :>> ", this.heap.toString());
  }
}

const mh = new MinHeap();
mh.insert(0);
mh.insert(0);
mh.insert(1);
mh.insert(2);
mh.insert(4);
mh.insert(2);
mh.insert(2);
mh.insert(3);
mh.insert(1);
mh.insert(4);
mh.toString();
let i = 0;
while (i++ < 8) {
  mh.pop();
}
mh.toString();
