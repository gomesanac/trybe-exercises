const funcs = require("./exercicio4");

test("func1 com mock para retornar em caixa baixa", () => {
  expect.assertions(2);

  spyFunc1 = jest.spyOn(funcs, "func1");
  spyFunc1.mockImplementation((str) => str.toLowerCase());

  expect(spyFunc1("ANA")).toBe("ana");

  funcs.func1.mockRestore();

  expect(funcs.func1("AsdF")).toBe("ASDF");
});
