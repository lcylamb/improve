# 优化点：

## 1. 封装 axios 请求

- 配置 baseURL
- 超时时间
  - 如果请求发出一段时间之后，超过了预设时间还没得到响应，则视为请求失败，让下一个请求可以尽快发出，提高发送请求效率
  - 这个时间根据服务器决定

## 2. 使用请求和响应拦截器

- 响应拦截器
  - 如果请求成功，返回响应体数据 res.data
  - 如果响应失败，则返回一个失败 Promise
- 提高用户体验：请求开始，开启进度条。请求成功或失败进度条完成

## 2. v-if 和 v-show

- v-if 是 js 层面的隐藏
- v-show 是 css 层面隐藏，控制的是 css 的 display 属性
- 在初始渲染时，如果 v-if 和 v-show 的值都为 false，v-if 的效率更高
- 使用
  - 如果组件频繁切换，使用 v-show 效率更高

## 3. VueRouter 中的三种传参方式

- query 查询字符串
- pramas 路由传参
  - 需要占位符
  - 传递的数据个数较少是使用
- meta 路由元

## 4. 组件间传参的选择

1.  全局事件总线(任意组件间)
    - 必要条件
    - 两个组件要同时存在
    - 要订阅发布（一般订阅在前）
2.  provide/inject
    - 父组件 provide 函数返回一个对象
    - 子组件 inject 数组接收属性
3.  $attr 和$listener
4.  $refs
5.  自定义事件
6.  prop（父传子）
7.  Pubsub（任意组件间）
8.  Vuex
9.  VueRouter
10. $children 和 $parent

## 5. v-model 修饰符`.lazy`

- .lazy 可以将 input 监听改为 change

## 6. 使用 mock 模拟请求

## 7. v-for 生成的子组件应该在父组件请求

## 8. 使用 uuid

该电商网站不需要用户登录，可以使用临时购物车，使用 uuid 生成唯一 id，实现临时购物车功能

## 9. 订单支付状态时使用 websoket 监听

- 在二维码弹框后建立连接，
- 绑定事件， ws.onmessege

## 10. 组件懒加载/路由懒加载

## 11. 图片懒加载

## 12. 路由导航守卫

- 白名单 授权名单

- 携带参数的路由不能简单判断

## 13. 七天免登录

# 知识点总结

1. map filter some every forEach reduce find findIndex

- map 返回和原数组相等的个数 返回数值
- filter 返回符合条件的数量 返回数值
- forEach 遍历所有数据 不会停止 返回 undefined
- find 找出对应的元素，返回扎到的元素，找到之后不会再找
- findIndex 返回元素的索引
- reduce 自定义返回值
