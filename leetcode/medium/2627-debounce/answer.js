var debounce = function (fn, t) {
  let timer = undefined;
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
      timer = undefined;
    }
    timer = setTimeout(() => {
      fn.apply(null, args);
    }, t);
  };
};
