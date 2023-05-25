var areDeeplyEqual = function (o1, o2) {
  const typeO1 = Object.prototype.toString.call(o1);
  const typeO2 = Object.prototype.toString.call(o2);
  // 类型是否相同
  if (typeO1 !== typeO2) return false;
  //# 普通对象
  if (typeO1 === "[object Object]") {
    const arr1 = Object.entries(o1);
    const arr2 = Object.entries(o2);
    // 对象的键个数是否相等
    if (arr1.length !== arr2.length) return false;
    // 另一个对象是否有这个键
    for (const [key, value] of arr1) {
      if (!o2.hasOwnProperty(key)) return false;
      // 键值是否相等
      if (!areDeeplyEqual(value, o2[key])) return false;
    }
    return true;
    //# 数组
  } else if (typeO1 === "[object Array]") {
    // 数组个数是否相等
    if (o1.length !== o2.length) return false;
    for (const key in o1) {
      // 数组值是否相等
      if (!areDeeplyEqual(o1[key], o2[key])) return false;
    }
    return true;
  } else {
    //# 基本类型
    return o1 === o2;
  }
};
