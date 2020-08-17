const returnNums = () => {
  const numbersArr = Array.from(
    { length: 10 },
    () => Math.floor(Math.random() * 50) + 1
  );
  const result = numbersArr
    .map((number) => number * number)
    .reduce((acc, number) => acc + number, 0);

  if (result > 8000) throw new Error();

  return result;
};

const allCalcs = (sum) =>
  [2, 3, 5, 10].map((div) => sum / div).reduce((acc, num) => num + acc, 0);

const funcPromise = async () => {
  try {
    const sum = await returnNums();
    const calcs = await allCalcs(sum);

    console.log(calcs);
  } catch (e) {
    console.log("É mais de oito mil! Essa promise deve estar quebrada!");
  }
};

funcPromise();
