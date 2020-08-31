const assert = require('assert');

function mySum(arr) {
  let result = 0;
  for (let item in arr) {
    result += arr[item];
  }
  return result;
}

// Exercício 1
assert.strictEqual(mySum([1, 2, 3, 4]), 10, 'A soma de todos os elementos do array é 10');
// Exercício 2
assert.strictEqual(mySum([1, -2, -3, 4]), 0, 'A soma de todos os elementos do array é 0');
