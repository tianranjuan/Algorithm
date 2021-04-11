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

const maxHeap = new BinaryHeap();
maxHeap.insert(10);
maxHeap.insert(4);
maxHeap.insert(9);
maxHeap.insert(1);
maxHeap.insert(7);
maxHeap.insert(5);
maxHeap.insert(3);
maxHeap.toString();
maxHeap.delete(5);
maxHeap.toString();
maxHeap.delete(2);
maxHeap.toString();
