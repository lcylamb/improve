const binarySearch = (arr, target) => {
  // 关于边界判断可以在外面判断，如果不符合条件就不进行二分查找
  let left = 0,
    right = arr.length - 1;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    arr[mid] < target ? (left = mid + 1) : (right = mid - 1);
  }
  return -1;
};
