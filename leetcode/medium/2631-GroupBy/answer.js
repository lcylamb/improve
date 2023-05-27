Array.prototype.groupBy = function (fn) {
  return this.reduce((prev, current) => {
    const key = fn(current);
    prev[key] ? prev[key].push(current) : (prev[key] = [current]);
    return prev;
  }, {});
};
