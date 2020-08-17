const uppercase = require("./exercicio1");

test("teste retorno de uppercase", (done) => {
  expect.assertions(1);

  const callback = (str) => {
    expect(str).toBe("HOJE");
    done();
  };

  uppercase("hoje", callback);
});
