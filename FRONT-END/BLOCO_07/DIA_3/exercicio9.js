const assert = require('assert');

function change(param) {
  return !param;
}

assert.ok(change(false), 'Condição falsa');
