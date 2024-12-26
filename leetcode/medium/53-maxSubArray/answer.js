/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  //
  let map = new Map()
  for (let start = 0; start < nums.length; ++start) {
    let sum = 0
    for (let end = start; end >= 0; --end) {
      sum += nums[end]
      map.set(sum, sum)
    }
  }
  console.log(map)

  map.values()
  return Math.max(...map.values())
}
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])) // 6;
// 动态规划
var maxSubArray = function (nums) {
  let pre = 0,
    maxAns = nums[0]
  nums.forEach((x) => {
    // - 1. pre:0; maxAns=-2; pre = max( [0+(-2) = -2],-2)
    // - 2. pre = max( -2 + 1, 1) = 1
    // - 3. pre = max(1 + (-3), -3) = -2
    // - 4. pre = max(-2 + 4, 4) = 4
    // - 5. pre = max(4 + (-1), -1) = 3
    // - 6. pre = max(3 + 2, 2) = 5
    // - 7. pre = max(5 + 1, 1) = 6
    // - 8. pre = max(6 + (-5), -5) = 1
    // - 9. pre = max(1 + 4, 4) = 5
    pre = Math.max(pre + x, x)
    // - 1. maxAns = max( -2, -2) = -2
    // - 2. maxAns = max( 1, 1) = 1
    // - 3. maxAns = max( 1, -2) = 1
    // - 4. maxAns = max( 1, 4) = 4
    // - 5. maxAns = max( 4, 3) = 4
    // - 6. maxAns = max( 4, 5) = 5
    // - 7. maxAns = max( 5, 6) = 6
    // - 8. maxAns = max( 6, 1) = 6
    // - 9. maxAns = max( 6, 5) = 6
    maxAns = Math.max(maxAns, pre)
  })
  return maxAns
}
