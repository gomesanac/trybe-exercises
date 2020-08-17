const getRepos = require("./exercicio4");

test("testa existência de repositórios no retorno de getRepos", async () => {
  expect.assertions(2);

  const repos = await getRepos("https://api.github.com/users/tryber/repos");

  expect(repos).toContain("sd-01-week14-js-unit-tests");
  expect(repos).toContain("sd-01-week15-react-tests");
});
