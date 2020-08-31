const assert = require("assert");

function myFizzBuzz(num) {
  if (typeof num !== "number") return false;
  if (num % 3 === 0 && num % 5 === 0) return "fizzbuzz";
  if (num % 3 === 0) return "fizz";
  if (num % 5 === 0) return "buzz";
  return num;
}

assert.strictEqual(myFizzBuzz(15), 'fizzbuzz', 'Não é divisível por 3 e por 5');
assert.strictEqual(myFizzBuzz(9), 'fizz', 'Não é divisível por 3');
assert.strictEqual(myFizzBuzz(10), 'buzz', 'Não é divisível por 5');
assert.strictEqual(myFizzBuzz(2), 2, 'O número não é divisível por 3 nem por 5');
assert.strictEqual(myFizzBuzz('Ana'), false, 'Não é um número');
