const assert = require('assert');

const removeMiddle = words => {
    const middleIndex = Math.floor(words.length / 2);
    const middleWord = [words[middleIndex]];
    words.splice(middleIndex, 1);
    return middleWord;
}

const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const expectedOutput = ['queen'];
const output = removeMiddle(words);

assert.deepEqual(output, expectedOutput);
assert.deepEqual(words, expectedWords);
