const service = require("./exercicio1");

test("Implementa a divisão de dois números um vez em randomNumber", () => {
  expect.assertions(3);

  service.randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);

  expect(service.randomNumber(4, 2)).toBe(2);
  expect(service.randomNumber).toHaveBeenCalledTimes(1);
  expect(service.randomNumber).toHaveBeenCalledWith(4, 2);
});
