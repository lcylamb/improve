type F = (...p: any[]) => any;
function debounce(fn: F, t: number): F {
  let timer: any = undefined;
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
      timer = undefined;
    }
    timer = setTimeout(() => {
      fn.apply(null, args);
    }, t);
  };
}
