const funcPromise = () => {
  const promise = new Promise((resolve, reject) => {
    const numbersArr = Array.from(
      { length: 10 },
      () => Math.floor(Math.random() * 50) + 1
    );
    const result = numbersArr
      .map((number) => number * number)
      .reduce((acc, number) => acc + number, 0);

    result < 8000 ? resolve(result) : reject();
  });

  promise
    .then((result) => console.log([2, 3, 5, 10].map((div) => result / div)))
    .catch(() =>
      console.log("É mais de oito mil! Essa promise deve estar quebrada!")
    );
};

funcPromise();
