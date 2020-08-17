const service = require("./exercicio1");

describe("testando implementações", () => {
  test("Implementa a multiplicação de três números em randomNumber", () => {
    expect.assertions(3);

    service.randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);

    expect(service.randomNumber(4, 2, 1)).toBe(8);
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber).toHaveBeenCalledWith(4, 2, 1);
  });

  test("Implementa o retorno do dobro de um número em randomNumber", () => {
    service.randomNumber.mockReset();

    expect.assertions(3);

    service.randomNumber = jest.fn().mockImplementation((a) => a * 2);

    expect(service.randomNumber(4)).toBe(8);
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber).toHaveBeenCalledWith(4);
  });
});
