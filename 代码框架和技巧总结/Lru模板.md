```js
var LRUCache = function (capacity) {
  this.cap = capacity;
  // 使用map实现，map类似于LinkedHashMap是有序的键值对
  // 但是使用map就相当于在是倒着的，链表头部在最后，链表尾部在最前
  this.cache = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  // 如果命中缓存
  if (this.cache.has(key)) {
    const tmp = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, tmp);
    return tmp;
  }
  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.cache.has(key)) {
    // 如果命中缓存，先清除掉
    this.cache.delete(key);
  } else if (this.cache.size >= this.cap) {
    // 如果没命中，但是缓存空间不足
    this.cache.delete(this.cache.keys().next().value);
  }
  // 把值添加到头部
  this.cache.set(key, value);
};
```
