const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }
  return a + b;
}

// Exercício 1
assert.strictEqual(sum(4, 5), 9, '4 + 5 = 9');
// Exercício 2
assert.strictEqual(sum(0, 0), 0, '0 + 0 = 0');
// Exercício 3
assert.throws(() => { sum(4, '5'); }, 'Verifica se o erro aparece');
// Exercício 4
assert.throws(() => { sum(4, '5'); }, 'parameters must be numbers', 'O erro não é o esperado');
