const assert = require('assert');

const wordLengths = words => {
    const lengths = [];
    for (let i = 0; i < words.length; i += 1) {
        lengths[i] = words[i].length;
    }
    return lengths
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];
const output = wordLengths(words);

assert.strictEqual(typeof wordLengths, 'function');
assert.deepEqual(output, expected);
