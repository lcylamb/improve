var jsonStringify = function (object) {
  const TYPE = Object.prototype.toString.call(object);
  const NUM = "[object Number]";
  const BOL = "[object Boolean]";
  const STR = "[object String]";
  const NULL = "[object Null]";
  const ARR = "[object Array]";
  if (TYPE === STR) return `"${object}"`;
  if (TYPE === NUM || TYPE === BOL || TYPE === NULL) return object;
  const newArr = [];
  if (TYPE === ARR) {
    object.forEach((item) => {
      newArr.push(`${jsonStringify(item)}`);
    });
    return `[${newArr.join(",")}]`;
  } else {
    for (const key of Object.keys(object)) {
      newArr.push(`"${key}":${jsonStringify(object[key])}`);
    }
    return `{${newArr.join(",")}}`;
  }
};
