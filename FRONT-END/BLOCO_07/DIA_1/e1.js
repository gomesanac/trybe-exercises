const FATORIAL = n => (n > 0) ? (n * FATORIAL(n - 1)) : 1;

console.log(FATORIAL(4));
