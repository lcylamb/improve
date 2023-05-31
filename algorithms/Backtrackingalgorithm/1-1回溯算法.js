const subSets = (arr) => {
  const res = [];
  const resarr = [...new Set(arr)];
  const dfs = (index, list) => {
    if (index === resarr.length) {
      res.push(list.slice());
      return res;
    }
    list.push(resarr[index]);
    dfs(index + 1, list);
    list.pop();
    dfs(index + 1, list);
  };
  dfs(0, []);
  return res;
};
const arr = [1, 1, 2, 3];
console.log(subSets(arr));
