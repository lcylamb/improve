/**
 * 找出数组中重复的数字。
 *  在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。
 * 数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。
 * 请找出数组中任意一个重复的数字。
 */
// - 使用数组
var findRepeatNumber1 = function (nums) {
  let arr = [];
  for (let val of nums) {
    if (arr.includes(val)) return val;
    arr.push(val);
  }
  return null;
};
// - map哈希
var findRepeatNumber2 = function (nums) {
  let map = new Map();
  for (let val of nums) {
    if (map.has(val)) return val;
    map.set(val);
  }
  return false;
};
