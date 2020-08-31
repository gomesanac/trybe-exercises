const assert = require('assert');

function myIndexOf(arr, item) {
  let searchedIndex = -1;
  for (let i = 0; i < arr.length; i += 1) {
    if (item === arr[i]) {
      searchedIndex = i;
    }
  }
  return searchedIndex;
}

// Exercício 1
assert.strictEqual(myIndexOf([1, 2, 3, 4], 3), 2, 'O índice de 3 é 2');
// Exercício 2
assert.strictEqual(myIndexOf([1, 2, 3, 4], 5), -1, '5 não pertence ao array arr');
