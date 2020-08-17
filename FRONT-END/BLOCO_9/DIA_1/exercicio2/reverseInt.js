function reverseInt(n) {
  const inverso = parseInt(n.toString().split("").reverse().join(""));
  if (n < 0) return inverso - (2 * inverso);
  return inverso;
}

module.exports = reverseInt;
