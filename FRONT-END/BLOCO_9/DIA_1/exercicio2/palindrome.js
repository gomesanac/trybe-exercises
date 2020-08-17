function palindrome(str) {
  const inverso = str.split("").reverse().join("");
  if (inverso === str) return true;
  return false;
}

module.exports = palindrome;
