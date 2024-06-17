// 1 ~ n까지의 원소로 이루어진 배열을 만드는 함수를 재귀함수로 작성하시오.
// (단, array 메소드를 사용하지 말고, destructuring을 사용하시오)

// ------------------------------

// let arr = [];
// let cnt = 0;
// function makeArray(n) {
//   if (n === 0) return arr;
//   arr = [n, ...arr];

//   makeArray(n - 1);
// }

// console.log(makeArray(10)); // undefined 반환

// ------------------------------

// let arr = [];

// function makeArray(n) {
//   if (n === 0) return arr;
//   arr = [n, ...arr];

//   return makeArray(n - 1);
// }

// console.log(makeArray(10));

// ------------------------------

function memo(fn) {
  let arr = [];
  return function b(k) {
    arr = [...arr, k];
    fn(k - 1);
    return arr;
  };
}

const makeArray = memo(function a(n) {
  if (n === 0) return;
  return makeArray(n);
});

console.log(makeArray(5));
