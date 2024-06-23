var assert = require('assert');

function keyPair(arr, target) {
  let left = 0;
  let right = 1;
  let sum = 0;
  let found = false;

  const sa = [...arr].sort();

  let res = [];
  for (let i = right; i < sa.length - 1; i += 1) {
    sum = sa[left] + sa[right];
    if (sum === target) res.push(left, right);
  }
}

// assert.deepStrictEqual(keyPair([1, 3, 4, 5], 7), [1, 2]);
// assert.deepStrictEqual(keyPair([1, 4, 45, 6, 10, 8], 16), [3, 4]);
// assert.deepStrictEqual(keyPair([1, 2, 4, 3, 6], 10), [2, 4]);
// assert.deepStrictEqual(keyPair([1, 2, 3, 4, 5, 7], 9), [3, 4]);
