// * 1
const promise1 = new Promise((resolve, reject) => {
  console.log("1");
});
console.log(2, promise1);

// * 2
// const promise = new Promise((resolve, reject) => {
//   console.log("1");
//   resolve("success");
//   console.log("2");
// });
// promise.then(() => {
//   console.log("3");
// });
// console.log("4");
// * 3
const promise = new Promise((resolve, reject) => {
  console.log("1");
  console.log("2");
});
promise.then(() => {
  console.log("3");
});
console.log("4");
// * 4
// const promise1 = new Promise((resolve, reject) => {
//   console.log("promise1");
//   resolve("success");
// });
// const promise2 = promise1.then((res) => {
//   console.log(res);
// });
// console.log("1", promise1);
// console.log("2", promise2);

// * 5
// const fn = () =>
//   new Promise((resolve, reject) => {
//     console.log("1");
//     resolve("success");
//   });
// fn().then((res) => {
//   console.log(res);
// });
// console.log("start");

// * 6
const fn = () =>
  new Promise((resolve, reject) => {
    console.log("1");
    resolve("success");
  });
console.log("start");
fn().then((res) => {
  console.log(res);
});
