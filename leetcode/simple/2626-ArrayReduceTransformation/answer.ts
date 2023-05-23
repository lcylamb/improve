type Fn = (accum: number, curr: number) => number;

function Reduce(nums: number[], fn: Fn, init: number): number {
  let accum: number = init;
  nums.forEach((item) => {
    accum = fn(accum, item);
  });
  return accum;
}
