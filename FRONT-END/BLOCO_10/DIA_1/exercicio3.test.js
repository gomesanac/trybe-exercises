const getUserName = require("./exercicio2");

test("usuário é encontrado", async () => {
  expect.assertions(1);
  const name = await getUserName(5);
  expect(name).toBe("Paul");
});

test("usuário não é encontrado", async () => {
  expect.assertions(1);
  try {
    await getUserName(6);
  } catch (error) {
    expect(error).toEqual({ error: "User with 6 not found." });
  }
});
