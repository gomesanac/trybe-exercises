const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// Exercício 1
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4], 'O item 3 foi removido');
// Exercício 2
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4], 'O item 3 foi removido');
// Exercício 3 - ???
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4], 'Não sofreu alteração');
// Exercício 4
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4], 'Nada foi removido');
