# Object(obj)将参数强制转换为对象

1. 如果是对象：返回原对象
2. 对于 null 和 undefinded 抛异常
3. 基本类型会被转为包装基本包装类型

# instanceof

- 检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。

# constructor

- constructor 指向该对象的构造函数(不能检测出继承)
