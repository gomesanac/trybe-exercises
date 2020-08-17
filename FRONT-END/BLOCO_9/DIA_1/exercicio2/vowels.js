function vowels(str) {
  const strArr = str.split("");
  return strArr.reduce((acc, letter) => {
    if (
      letter === "a" ||
      letter === "e" ||
      letter === "i" ||
      letter === "o" ||
      letter === "u" ||
      letter === "A" ||
      letter === "E" ||
      letter === "I" ||
      letter === "O" ||
      letter === "U"
    ) {
      acc += 1;
    }
    return acc;
  }, 0);
}

console.log(vowels("aaaa"));

module.exports = vowels;
