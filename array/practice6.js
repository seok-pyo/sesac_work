const arr = [1, 2, 3, 4, 5];

const square = (arr) => {
  return arr.map((a) => a ** 2);
};

const sqrt = (arr) => {
  return arr.map((a) => Math.sqrt(a));
};

const cube = (arr) => {
  return arr.map((a) => a ** 3);
};

let fns = [square, sqrt, cube];

console.log(fns.reduce((arr, func) => func(arr), arr));
