var checkIfInstanceOf = function (obj, classFunction) {
  // null 不是任何对象的实例  undefined
  if (obj === null || obj === undefined || typeof classFunction !== "function")
    return false;
  // Object(obj)将参数强制转换为对象
  return Object(obj) instanceof classFunction;
};
