const assert = require('assert');

const arr = [1, 2, 3, 4];

function push(array, ...args) {
  return [...array, ...args];
}

function pop(array, cnt) {
  let last_idx = array.length - 1;
  if (cnt === 1 || cnt === undefined) return array[last_idx];
  if (cnt > array.length) return array;
  else return array.slice(array.length - cnt);
}

function shift(array, cnt) {
  if (cnt === undefined) return array.slice(1);
  else return array.slice(cnt);
}

function unshift(array, ...args) {
  return [...args, ...array];
}

assert.deepStrictEqual(push(arr, 5, 6), [1, 2, 3, 4, 5, 6]);
assert.deepStrictEqual(pop(arr), 4);
assert.deepStrictEqual(pop(arr, 2), [3, 4]);
assert.deepStrictEqual(unshift(arr, 0), [0, 1, 2, 3, 4]);
assert.deepStrictEqual(unshift(arr, 7, 8), [7, 8, 1, 2, 3, 4]);
assert.deepStrictEqual(shift(arr), [2, 3, 4]);
assert.deepStrictEqual(shift(arr, 2), [3, 4]);
assert.deepStrictEqual(arr, [1, 2, 3, 4]);
