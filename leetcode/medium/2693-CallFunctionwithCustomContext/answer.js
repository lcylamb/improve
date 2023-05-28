Function.prototype.callPolyfill = function (context, ...args) {
  Object.defineProperty(context, "fn", {
    value: this,
  });
  return context["fn"](...args);
};
