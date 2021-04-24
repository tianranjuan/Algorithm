# 搜索-遍历的定义

应该是每个节点访问且仅访问一次。

针对于访问顺序的不同，分为：

1. 深度优先
2. 广度优先
3. 优先级优先（启发式搜索）
4. 根据场景自定义优先（如中间优先）

## 深度优先（DFS）

**代码模板(适用于多叉树)**

递归方法：

```js
visited: set;

function dfs(node, visited) {
  if (visited.has(node)) return; // terminator
  visited.add(node);
  // process curr node logic
  for (let child of node.children) {
    if (!visited.has(child)) dfs(child, visited);
  }
}
```

循环方法：

```js
let stack = [root];
while (root && stack.length) {
  let p = stack.pop();
  if (p.children.length) stack.push(...p.children);
}
```

**遍历顺序**

会先顺着一条路径走到最深层，然后在访问其他路径。

## 广度优先（BFS）

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

# 贪心算法

贪心算法是在每一步采取当下最好或最优的解，从而希望结果是全局最好或最优的解。

打个比方就是说如果人生中每一次的选择都是最优解的话，那么可能就找到了财富密码，升职加薪、当上总经理、出任 CEO、迎娶白富美、走上人生巅峰！想想还有点小激动。
但是也可能做了最优解缺阴差阳错的错过了良机还是个无情的 996 代码机器，这也是贪心算法的缺点之一，即不知道能否达到最优解。

**贪心算法与回溯、动规的区别**

1. 贪心算法在处理子问题时，一旦做出选择就不能回退；
2. 回溯算法在处理子问题时能够回退到之前的结果，重新尝试；
3. 动规在处理子问题时，会存储运算结果，并根据实际情况结合最优判断来选择是否回退。

> 在工程和生活中，贪心算法一般不能得到我们想要的结果。所以大部分时间会是处于一个复杂算法中的辅助算法地位出现。

**使用贪心算法的场景**

子问题的最优解能够递推到最终的最优解，即最优子结构时可以选择使用贪心算法。

**鸟算法的特点**

特别难想到，想到了就贼简单。。。。。。。。。。。。。。。。

> !!!!!!!一定要切记贪心的角度要刁钻，不一定要从前面按规矩行事的贪，而是发挥尽可能的从各种角度，各种姿势去想怎么贪，从前贪，从后贪，从中间贪，从上贪，从下贪......发挥想象力！！！！！！！！！！！！！！

**题解中看到的优秀解答**

- 「贪心算法」 和 「动态规划」、「回溯搜索」 算法一样，完成一件事情，是 分步决策 的；
- 「贪心算法」 在每一步总是做出在当前看来最好的选择，我是这样理解 「最好」 这两个字的意思：
  - 「最好」 的意思往往根据题目而来，可能是 「最小」，也可能是 「最大」；
  - 贪心算法和动态规划相比，它既不看前面（也就是说它不需要从前面的状态转移过来），也不看后面（无后效性，后面的选择不会对前面的选择有影响），因此贪心算法时间复杂度一般是线性的，空间复杂度是常数级别的；

# 二分查找

## 二分查找的前提

1. 目标函数存在单调性（单调递增或递减）
2. 存在上下边界
3. 能够通过索引访问

**三个前提条件的含义**

为什么必须要存在单调性，因为每次二分后要能根据条件直接筛选掉一般的数据，要么前半部要么后半部，如果无序那么就没办法这么做了。

如果不存在上下界的话，就是无穷，那么无穷是没有中间的，二分也就无从谈起。

同样如果不能索引访问，那么还是要从头遍历一遍才能获取到中间的元素，那么就失去了意义了。

## 代码模板

```js
left = 0;
right = length - 1;

while (left <= right) {
  mid = (left + right) / 2;
  if (array[mid] === target) {
    return mid;
  } else if (array[mid] < target) {
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}
```

## 牛顿迭代法

只言片语说不清直接搞两个参考资料方便随时拉出来看看。

- [1] [数学之美：牛顿-拉夫逊迭代法原理及其应用 | 知乎](https://zhuanlan.zhihu.com/p/266566509)
- [2] [牛顿迭代法 | 知乎](https://zhuanlan.zhihu.com/p/240077462)
- [3] [如何通俗易懂地讲解牛顿迭代法求开方？数值分析？ | 知乎](https://www.zhihu.com/question/20690553)
- [4] [牛顿迭代法：介绍、原理与运用 | 博客园](https://www.cnblogs.com/destro/p/newton-s-method.html)
