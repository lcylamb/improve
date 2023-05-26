var flat = function (arr, n) {
  if (n === 0) return arr;
  return arr.reduce((prev, curent) => {
    prev.push(...(Array.isArray(curent) ? flat(curent, n - 1) : [curent]));
    return prev;
  }, []);
};
