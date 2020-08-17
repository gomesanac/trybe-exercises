/*Crie uma função que faça requisição para a api dog pictures . Mocke a requisição e crie dois testes. O primeiro deve interpretar que a requisição se resolveu e teve como valor “request sucess”. O segundo deve interpretar que a requisição falhou e ter como valor “request failed”. Crie todos os testes que achar necessário. */

const fetch = require("./exercicio6");

describe("requisição fetchDog", () => {
  fetch.fetchDog = jest.fn();
  afterEach(() => fetch.fetchDog.mockClear());

  test("resolve fetchDog", async () => {
    fetch.fetchDog.mockResolvedValue("request sucess");

    expect.assertions(2);

    const responde = await fetch.fetchDog();
    expect(fetch.fetchDog).toHaveBeenCalledTimes(1);
    expect(responde).toBe("request sucess");
  });
  test("reject fetchDog", async () => {
    fetch.fetchDog.mockRejectedValue("request failed");

    expect.assertions(2);

    try {
      await fetch.fetchDog();
    } catch (error) {
      expect(fetch.fetchDog).toHaveBeenCalledTimes(1);
      expect(error).toBe("request failed");
    }
  });
});
