// **1 await会阻塞后面的代码
// async function async1() {
//   console.log("async1 start");
//   await async2();
//   console.log("async1 end");
// }
// async function async2() {
//   console.log("async2");
// }
// async1();
// console.log("start");
//

// **2 new Promise不会阻塞后面的代码
// async function async1() {
//   console.log("async1 start");
//   new Promise((resolve) => {
//     console.log("promise");
//   });
//   console.log("async1 end");
// }
// async1();
// console.log("start");
//
// **3 定时器
// async function async1() {
//   console.log("async1 start");
//   await async2();
//   console.log("async1 end");
// }
// async function async2() {
//   setTimeout(() => {
//     console.log("timer");
//   }, 0);
//   console.log("async2");
// }
// async1();
// console.log("start");
//

// **4 多个定时器
// async function async1() {
//   console.log("async1 start");
//   await async2();
//   console.log("async1 end");
//   setTimeout(() => {
//     console.log("timer1");
//   }, 0);
// }
// async function async2() {
//   setTimeout(() => {
//     console.log("timer2");
//   }, 0);
//   console.log("async2");
// }
// async1();
// setTimeout(() => {
//   console.log("timer3");
// }, 0);
// console.log("start");
//
// *5
// async function fn() {
//   // return await 123;
//   return 123;
//   // return Promise.resolve(123);
// }
// fn().then((res) => {
//   console.log(res);
// });
// 123
// *6
// async function async1() {
//   console.log("start");
//   await new Promise((resolve, reject) => {
//     console.log("promise1");
//   });
//   console.log("async1 success");
//   return "async end";
// }
// console.log("script start");
// async1().then((res) => {
//   console.log(res);
// });
// console.log("script end");
//
// *7
// async function async1() {
//   console.log("async1 start");
//   await new Promise((resolve) => {
//     console.log("promise1");
//     resolve("promise1 resolve");
//   }).then((res) => console.log(res));
//   console.log("async1 success");
//   return "async1 end";
// }
// console.log("srcipt start");
// async1().then((res) => console.log(res));
// console.log("srcipt end");
//
// *8
// async function async1() {
//   console.log("async1 start");
//   await new Promise((resolve) => {
//     console.log("promise1");
//     resolve("promise resolve");
//   });
//   console.log("async1 success");
//   return "async1 end";
// }
// console.log("srcipt start");
// async1().then((res) => {
//   console.log(res);
// });
// new Promise((resolve) => {
//   console.log("promise2");
//   setTimeout(() => {
//     console.log("timer");
//   });
// });
//
// *9
// async function async1() {
//   console.log("async1 start");
//   await async2();
//   console.log("async1 end");
// }
// async function async2() {
//   console.log("async2");
// }
// console.log("script start");
// setTimeout(function () {
//   console.log("setTimeout");
// }, 0);
// async1();
// new Promise(function (resolve) {
//   console.log("promise1");
//   resolve();
// }).then(function () {
//   console.log("promise2");
// });
// console.log("script end");
// * 10
// async function testSometing() {
//   console.log("执行testSometing");
//   return "testSometing";
// }
// async function testAsync() {
//   console.log("执行testAsync");
//   return Promise.resolve("hello async");
// }
// async function test() {
//   console.log("test start...");
//   const v1 = await testSometing();
//   console.log("v1:", v1);
//   const v2 = await testAsync();
//   console.log("v2:", v2);
//   console.log(v1, v2);
// }
// test();
// var promise = new Promise((resolve) => {
//   console.log("promise start...");
//   resolve("promise");
// });
// promise.then((val) => console.log("val", val));
// console.log("test end...");

// * 11
// async function async1() {
//   await async2();
//   console.log("async1");
//   return "async1 success";
// }
// async function async2() {
//   return new Promise((resolve, reject) => {
//     console.log("async2");
//     reject("error");
//   });
// }
// async1().then((res) => console.log(res));
//
// * 12
// async function async1() {
//   try {
//     await Promise.reject("error!!!");
//   } catch (e) {
//     console.log(e);
//   }
//   console.log("async1");
//   return Promise.resolve("async1 success");
// }
// async1().then((res) => console.log(res));
// console.log("script start");
//
// * 13
// async function async1() {
//   await Promise.reject("error!!!").catch((e) => console.log(e));
//   console.log("async1");
//   return Promise.resolve("async1 success");
// }
// async1().then((res) => console.log(res));
// console.log("script start");
//
