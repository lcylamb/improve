// -返回任意一个非 promise 的值都会被包裹成 promise 对象
// **1
const promise = new Promise((resolve, reject) => {
  resolve("success1");
  reject("error");
  resolve("success2");
});
promise
  .then((res) => {
    console.log("then:", res);
  })
  .catch((err) => {
    console.log("catch:", err);
  });

// **2
// const promise = new Promise((resolve, reject) => {
//   reject("error");
//   resolve("success2");
// });
// promise
//   .then((res) => {
//     console.log("then1:", res);
//   })
//   .then((res) => {
//     console.log("then2:", res);
//   })
//   .catch((err) => {
//     console.log("catch", err);
//   })
//   // promise.then
//   .then((res) => {
//     console.log("then3:", res);
//   });
//
// **3
Promise.resolve(1)
  .then((res) => {
    console.log(res);
    return 2;
  })
  .catch((err) => {
    return 3;
  })
  .then((res) => {
    console.log(res);
  });

// **4
Promise.reject(1)
  .then((res) => {
    console.log(res);
    return 2;
  })
  .catch((err) => {
    console.log(err);
    return 3;
  })
  .then((res) => {
    console.log(res);
  });

//两个都是异步的，谁先执行完就先输出
// ** 5
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("timer");
//     resolve("success");
//   }, 1000);
// });
// const start = Date.now();
// promise.then((res) => {
//   console.log(res, Date.now() - start);
// });
// promise.then((res) => {
//   console.log(res, Date.now() - start);
// });
//
// ** 6
Promise.resolve()
  .then(() => {
    return new Error("error");
  })
  .then((res) => {
    console.log("then:", res);
  })
  .catch((err) => {
    console.log("catch:", err);
  });

// ** 7
// const promise = Promise.resolve().then(() => {
//   return promise;
// });
// promise.catch((err) => {
//   console.log(err);
// });
//

// **8
// -then和catch的参数期望是函数，如果不是，发生值透传
Promise.resolve(1).then(2).then(Promise.resolve(3)).then(console.log);

Promise.reject()
  .then(
    (res) => {
      console.log("success", res);
    },
    (err) => {
      console.log("error", err);
    }
  )
  .catch((err) => {
    console.log("catch", err);
  });

// ** 9
Promise.resolve()
  .then(
    function success(res) {
      throw new Error("error");
    },
    function fail1(err) {
      console.log("fail1", err);
    }
  )
  .catch(function fail2(err) {
    console.log("fail2", err);
  });
// * 10
Promise.resolve(1)
  .then((res) => {
    console.log(res);
  })
  .finally((res) => {
    console.log("finally", res);
  });

Promise.resolve(2)
  .finally(() => {
    console.log("finally2");
    return "finally2返回值";
  })
  .then((res) => {
    console.log("finally2后面的then", res);
  });
