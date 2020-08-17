const funcPromise = () => {
  const promise = new Promise((resolve, reject) => {
    const numbersArr = Array.from(
      { length: 10 },
      () => Math.floor(Math.random() * 50) + 1
    );
    const result = numbersArr
      .map((number) => number * number)
      .reduce((acc, number) => acc + number, 0);

    result < 8000 ? resolve() : reject();
  });

  promise
    .then(() => console.log("Resultado menor que 8000"))
    .catch(() => console.log("Resultado maior que 8000"));
};

funcPromise();
