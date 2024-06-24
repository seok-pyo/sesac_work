const reduce = (arr, fn, init) => {
  let ret;

  if (init !== undefined) {
    ret = init;
    for (let i = 0; i < arr.length; i += 1) {
      ret = fn(ret, arr[i]);
    }
  } else {
    ret = arr[0];
    for (let i = 1; i < arr.length; i += 1) {
      ret = fn(ret, arr[i]);
    }
  }

  return ret;
};

console.log(reduce([1, 2, 3], (a, b) => a + b, 0));
console.log(reduce([1, 2, 3, 4, 5], (a, b) => a + b));
console.log(reduce([1, 2, 3, 4, 5], (a, b) => a * b, 1));
console.log(reduce([2, 2, 2], (a, b) => a * b));
console.log(reduce([3, 3, 3], (a, b) => a * b, 0));
