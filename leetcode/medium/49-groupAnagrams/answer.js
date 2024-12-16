function sortStr(str) {
  return str.split('').sort().join('')
}
function groupAnagrams(strs) {
  const groupStr = strs.reduce((pre, cur) => {
    // str转arr，将字母排序
    if (pre[sortStr(cur)]) {
      pre[sortStr(cur)].push(cur)
    } else {
      pre[sortStr(cur)] = [cur]
    }
    return pre
  }, {})
  return Object.values(groupStr)
}
const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']
console.log(groupAnagrams(strs)) // [["bat"],["nat","tan"],["ate","eat","tea"]];
