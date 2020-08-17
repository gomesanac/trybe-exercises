const service = require("./exercicio1");

test("Testa se randomNumber foi chamada", () => {
  expect.assertions(2);

  service.randomNumber = jest.fn().mockReturnValue(10);
  expect(service.randomNumber()).toBe(10);
  expect(service.randomNumber).toHaveBeenCalledTimes(1);
});
