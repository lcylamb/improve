function longestConsecutive(_nums) {
  if (_nums.length === 0) return 0
  const nums = [...new Set(_nums.sort((a, b) => a - b))]
  console.log(nums)

  let longestConsecutiveArr = [nums[0]]
  nums.slice(1).map((num, index) => {
    // 当前的比上一个大1，则加入数组
  })
  console.log(longestConsecutiveArr)

  return longestConsecutiveArr.length
}

const nums = [100, 4, 200, 1, 3, 2] // 7
console.log(longestConsecutive(nums)) // 4
