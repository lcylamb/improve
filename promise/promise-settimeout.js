// ** 1
console.log("start");
setTimeout(() => {
  console.log("time");
});
Promise.resolve().then(() => {
  console.log("resolve");
});
console.log("end");

// ** 2
const promise = new Promise((resolve, reject) => {
  console.log(1);
  setTimeout(() => {
    console.log("timerstart");
    resolve("success");
    console.log("timerend");
  }, 0);
  console.log("2");
});
promise.then((res) => {
  console.log(res);
});

// ? ** 3
setTimeout(() => {
  console.log("timer1");
  setTimeout(() => {
    console.log("timer3");
  }, 0);
}, 1000);
setTimeout(() => {
  console.log("timer2");
}, 2000);
console.log("start");

// ** 4

setTimeout(() => {
  console.log("timer1");
  Promise.resolve().then(() => {
    // ! Promise.then是微任务，它会被加入到本轮中的微任务列表，
    console.log("promise");
  });
}, 0);
setTimeout(() => {
  console.log("timer2");
}, 0);
console.log("start");
//
// ** 5
Promise.resolve().then(() => {
  console.log("promise1");
  const timer2 = setTimeout(() => {
    console.log("timer2");
  }, 0);
});
const timer1 = setTimeout(() => {
  console.log("timer1");
  Promise.resolve().then(() => {
    console.log("promise2");
  });
}, 0);
console.log("start");
//

// ** 6
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("success");
  }, 1000);
});
const promise2 = promise1.then(() => {
  throw new Error("error!!!");
});
console.log("promise1:", promise1);
console.log("promise2:", promise2);
setTimeout(() => {
  console.log("promise1:", promise1);
  console.log("promise2:", promise2);
}, 2000);
// promise1 pending promise2 pending  promise1 'success'  promise2:'rejected'
// ** 7
// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("success");
//     console.log("timer1");
//   }, 1000);
//   console.log("promise1里的内容");
// });
// const promise2 = promise1.then(() => {
//   throw new Error("error!!!");
// });
// console.log("promise1:", promise1);
// console.log("promise2:", promise2);
// setTimeout(() => {
//   console.log("timer2");
//   console.log("promise1:", promise1);
//   console.log("promise2:", promise2);
// }, 2000);
// promise1里的内容 promise1:pengding promise2:pending  timer1 promise1:'success' promise2:rejected
