const fetch = require("./exercicioBonus");

test("hamada da API para um resultado específico", async () => {
  const response = {
    id: "7h3oGtrOfxc",
    joke: "Whiteboards ... are remarkable.",
    status: 200,
  };

  fetch.fetchJoke = jest.fn();
  fetch.fetchJoke.mockResolvedValue(response);

  expect.assertions(2);

  expect(fetch.fetchJoke()).resolves.toEqual(response);
  expect(fetch.fetchJoke).toHaveBeenCalledTimes(1);
});
