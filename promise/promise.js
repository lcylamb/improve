const p = new Promise((resolve, reject) => {
  console.log(1);
  const q = () =>
    new Promise((resolve, reject) => {
      console.log(3);
      resolve(4);
    });
  const r = () =>
    new Promise((resolve, reject) => {
      console.log(7);
      resolve(8);
    });
  setTimeout(() => {
    console.log(10);
  }, 0);
  resolve(2); //
  q().then((res) => {
    console.log(res);
    setTimeout(() => {
      console.log(6);
    }, 0);
  });
  r().then((res) => {
    console.log(res);
    setTimeout(() => {
      console.log(9);
    }, 0);
  });
});
console.log(5);
p.then((res) => {
  console.log(res);
});
