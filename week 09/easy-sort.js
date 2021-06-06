/**
 * 选择排序
 * 首先在未排序序列中找到最小（大）元素
 * 存放到排序序列的起始位置
 * 再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾
 * 以此类推，直到所有元素均排序完毕
 * @param {*} arr
 */
function SelectionSort(arr) {
  let min = 0;
  for (let i = 0; i < arr.length; i++) {
    min = i;
    for (let j = i + 1; j < arr.length; j++) {
      // 找到最小的值
      if (arr[j] < arr[min]) min = j;
    }
    // 交换最小值与当前值
    [arr[i], arr[min]] = [arr[min], arr[i]];
  }
  console.log("arr :>> ", arr);
  return arr;
}

SelectionSort([9, 6, 5, 3, 4, 2, 1, 7, 8, 0]);

/**
 * 插入排序
 * 通过构建有序序列，对于未排序数据，
 * 在已排序序列中从后向前扫描，找到相应位置并插入
 * @param {*} arr
 */
function InsertSort(arr) {
  let preIndex, current;
  for (let i = 1; i < arr.length; i++) {
    preIndex = i - 1;
    current = arr[i];
    while (preIndex >= 0 && arr[preIndex] >= current) {
      arr[preIndex + 1] = arr[preIndex];
      preIndex--;
    }
    arr[preIndex + 1] = current;
  }
  console.log("arr :>> ", arr);
  return arr;
}

InsertSort([9, 6, 5, 3, 4, 2, 1, 7, 8, 0]);

/**
 * 冒泡排序
 * @param {*} arr
 */
function BubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  console.log("arr :>> ", arr);
  return arr;
}

BubbleSort([9, 6, 5, 3, 4, 2, 1, 7, 8, 0]);
