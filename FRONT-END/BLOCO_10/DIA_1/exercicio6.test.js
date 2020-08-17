const { findAnimalByName, findAnimalByAge } = require("./exercicio6");

describe("Testando promise - findAnimalByName", () => {
  describe("Quando existe o animal com o nome procurado", () => {
    test("Retorne o objeto do animal", () => {
      expect.assertions(1);
      return findAnimalByName("Dorminhoco").then((animal) => {
        expect(animal).toEqual({ name: "Dorminhoco", age: 1, type: "Dog" });
      });
    });
  });

  describe("Quando não existe o animal com o nome procurado", () => {
    test("Retorna um erro", () => {
      expect.assertions(1);
      return findAnimalByName("Bob").catch((error) =>
        expect(error).toEqual("Nenhum animal com esse nome!")
      );
    });
  });
});

describe("Testando promise - findAnimalByAge", () => {
  describe("Quando existe o animal com a idade procurada", () => {
    test("Retorne um array com o objeto do animal", () => {
      expect.assertions(1);
      return findAnimalByAge(1).then((animal) => {
        expect(animal).toEqual([{ name: "Dorminhoco", age: 1, type: "Dog" }]);
      });
    });
  });

  describe("Quando não existe o animal com a idade procurada", () => {
    test("Retorna um erro", () => {
      expect.assertions(1);
      return findAnimalByAge(7).catch((error) =>
        expect(error).toEqual("Nenhum animal com essa idade!")
      );
    });
  });
});
