/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  //
  for (let start = 0; start < array.length; start++) {
    const element = array[start]
  }
}
console.log(maxProfit([7, 1, 5, 3, 6, 4])) // 5;

var maxProfit = function (prices) {
  // # 最大利润
  let ans = 0
  let minPrice = prices[0]
  for (const p of prices) {
    // 最大利润：当前价格-最低价
    ans = Math.max(ans, p - minPrice)
    // 最低价：上一次最低价和当前价格的最小值
    minPrice = Math.min(minPrice, p)
  }
  return ans
}
