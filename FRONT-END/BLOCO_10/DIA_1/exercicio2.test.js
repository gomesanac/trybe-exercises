const getUserName = require("./exercicio2");

test("usuário é encontrado", () => {
  expect.assertions(1);

  return getUserName(5).then((name) => expect(name).toBe("Paul"));
});

test("usuário não é encontrado", () => {
  expect.assertions(1);

  return getUserName(6).catch((error) =>
    expect(error).toEqual({ error: "User with 6 not found." })
  );
});
