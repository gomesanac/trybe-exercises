const assert = require('assert');

function thereIs() {}

assert.strictEqual(typeof thereIs, 'function', 'A função não foi definida');
