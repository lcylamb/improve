var chunk1 = function (arr, size) {
  let init = 0;
  let newArr = [];
  for (let i = 0; i < arr.length; i += size) {
    const res = arr.slice(init, init + size);
    newArr.push(res);
    init += size;
  }
  return newArr;
};
// # reduce
var chunk2 = function (arr, size) {
  let init = 0;
  return arr.reduce((accum) => {
    if (init >= arr.length) return accum;
    accum.push(arr.slice(init, init + size));
    init += size;
    return accum;
  }, []);
};
