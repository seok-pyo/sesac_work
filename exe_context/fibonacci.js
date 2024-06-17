// 피보나치 수열을
// 1) Loop를 이용하여 작성하시오.
// 2) 순수 재귀를 이용하여 작성하시오.
// 3) memoization하여 작성하시오.
// 수열의 규칙은 f(n) = f(n - 2) + f(n - 1)  (단, n <= 1 일 때 f(n) = n)
// 즉, 0 ~ 9까지의 값은 [0, 1, 1, 2, 3, 5, 8, 13, 21, 34] 이다.

// function fi_loop(n) {
//   const res = [0, 1];
//   for (let i = 2; i <= n; i += 1) {
//     res[i] = res[i - 1] + res[i - 2];
//   }
//   return res[n];
// }

// console.log(fi_loop(30));

// function fi_recur(n) {
//   if (n <= 0) return 0;
//   if (n == 1) return 1;
//   return fi_recur(n - 1) + fi_recur(n - 2);
// }

// console.log(fi_recur(30));

function fi_memo(fn) {
  const table = [];
  return function b(n) {
    if (n <= 0) return 0;
    if (n == 1) return 1;
    table[n] = fn(n - 1) + fn(n - 2);
    return table[n];
  };
}

const fi_recur_memo = fi_memo(function a(n) {
  return fi_recur_memo(n);
});

console.log(fi_recur_memo(7));
