function jsonStringify(object: any): string {
  const t = Object.prototype.toString.call(object);
  const num = "[object Number]";
  const bol = "[object Boolean]";
  const str = "[object String]";
  const nul = "[object Null]";
  const arr = "[object Array]";
  if (t === str) return `"${object}"`;
  if (t === num || t === bol || t === nul) return object;
  const newArr: string[] = [];
  if (t === arr) {
    object.forEach((item: any) => {
      newArr.push(`${jsonStringify(item)}`);
    });
    return `[${newArr.join(",")}]`;
  } else {
    for (let key of Object.keys(object)) {
      newArr.push(`"${key}":${jsonStringify(object[key])}`);
    }
    return `{${newArr.join(",")}}`;
  }
}
