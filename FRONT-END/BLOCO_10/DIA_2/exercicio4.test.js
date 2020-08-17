const funcs = require("./exercicio4");

jest.mock("./exercicio4");

test("func1 com mock para retornar em caixa baixa", () => {
  expect.assertions(2);

  funcs.func1.mockImplementation((str) => str.toLowerCase());

  expect(funcs.func1("ANA")).toBe("ana");
  expect(funcs.func1).toHaveBeenCalledTimes(1);
});

test("func2 com mock para retornar a ultima letra", () => {
  expect.assertions(2);

  funcs.func2.mockImplementation((str) => str.charAt(str.length - 1));

  expect(funcs.func2("ANA")).toBe("A");
  expect(funcs.func2).toHaveBeenCalledTimes(1);
});

test("func3 com mock para retornar a concatenação de três strings", () => {
  expect.assertions(2);

  funcs.func3.mockImplementation((str1, str2, str3) => str1.concat(str2, str3));

  expect(funcs.func3("ANA", " CAROLINA", " GOMES")).toBe("ANA CAROLINA GOMES");
  expect(funcs.func3).toHaveBeenCalledTimes(1);
});
