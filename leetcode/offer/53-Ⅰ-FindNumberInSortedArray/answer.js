// @algorithm @lc id=100329 lang=javascript
// @title zai-pai-xu-shu-zu-zhong-cha-zhao-shu-zi-lcof
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  if (!nums.length) return 0;
  if (nums.length === 1) return Number(nums[0] === target);
  var index = binarySearch(nums, target);
  var count = 0;
  nums.forEach((item) => {
    if (nums[index] === item) count++;
  });
  return count;
};
// 二分查找
var binarySearch = (arr, target) => {
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    arr[mid] < target ? (left = mid + 1) : (right = mid - 1);
  }
  return -1;
};
