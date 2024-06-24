const assert = require('assert');

function keyPair(arr, target) {
  let table = {};
  let result = [];
  for (let i = 0; i < arr.length; i += 1) {
    let diff = target - arr[i];

    if (!table.hasOwnProperty(diff)) table[diff] = i;

    if (table.hasOwnProperty(arr[i])) {
      result.push(table[arr[i]]);
      result.push(i);
      return result;
    }
  }
}

assert.deepStrictEqual(keyPair([1, 3, 4, 5], 7), [1, 2]);
assert.deepStrictEqual(keyPair([1, 4, 45, 6, 10, 8], 16), [3, 4]);
assert.deepStrictEqual(keyPair([1, 2, 4, 3, 6], 10), [2, 4]);
assert.deepStrictEqual(keyPair([1, 2, 3, 4, 5, 7], 9), [3, 4]);

const user = { 1: 2, 2: 3, 4: 5 };

console.log(user.hasOwnProperty(1));
