let n = 5;
let linha = "";

for (let i = 0; i < n; i += 1) {
  for (let j = 0; j < n; j += 1) {
    if (j < n - (i + 1)) {
      linha = linha + " ";
    } else {
      linha = linha + "*";
    }
  }
  console.log(linha);
  linha = "";
}
