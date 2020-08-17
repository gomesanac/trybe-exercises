const assert = require("assert");

const greetPeople = people => {
  const greetingArray = [];
  const greeting = "Hello ";

  for (const person in people) {
    greetingArray.push(`${greeting}${people[person]}`);
  }
  return greetingArray;
};

const parameter = ["Irina", "Ashleigh", "Elsa"];
const result = ["Hello Irina", "Hello Ashleigh", "Hello Elsa"];

assert.deepEqual(greetPeople(parameter), result, "Não são iguais");

/*
Use a variável parameter como parâmetro da função acima, escreva testes para verificar
se a mesma está retornando a como se vê na variável result e, caso não esteja, altere
o código para que ele passe nos testes. Lembre-se: testes pequenos e numerosos! Escreva
um por vez e vá corrigindo a função aos poucos:

const greetPeople = people => {
  let greeting = "Hello ";

  for (const person in people) {
    greeting += people[person];
  }
  return greeting;
};
*/
