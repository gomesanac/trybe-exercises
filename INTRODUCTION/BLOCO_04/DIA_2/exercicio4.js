let n = 5;
let espaco = " ";
let ast = "*";
let linha = "";
let espacoPar = (n/2) - 1;
let espacoImpar = n/2;

if(n % 2 == 0) {
    for(i = 2; i <= n; i+=2) {
        linha = espaco.repeat(espacoPar) + ast.repeat(i) + espaco.repeat(espacoPar);
        console.log(linha);
        espacoPar -= 1;
    }
} else {
    for(i = 1; i <= n; i+=2) {
        linha = espaco.repeat(espacoImpar) + ast.repeat(i) + espaco.repeat(espacoImpar);
        console.log(linha);
        espacoImpar -= 1;
    }
}
