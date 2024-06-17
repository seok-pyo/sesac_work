// function memo(fn) {
//   let sum = 0;
//   return function b(k) {
//     if (k === 0) return sum;
//     sum += k;
//     return fn(k - 1);
//   };
// }

// const ms = memo(function a(n) {
//   if (n === 0) return 100;
//   console.log(n);
//   return ms(n);
// });

// console.log(ms(5));

function getSum(n) {
  let sum = 0;

  function add(k) {
    if (k === 1) return sum + 1;
    sum += k;
    return add(k - 1);
  }

  return add(n);
}

console.log(getSum(10000));
