verificaPrimo(89);

function verificaPrimo(num) {
    if(num == 1 || num == 0) {
        console.log("O número " + num + " não é primo!");
    } else if (num == 2) {
        console.log("O número 2 é primo!")
    } else if (num % 2 == 0) {
        console.log("O número " + num + " não é primo!");
    } else if (num % 3 == 0) {
        console.log("O número " + num + " não é primo!");
    } else if (num % 5 == 0) {
        console.log("O número " + num + " não é primo!");
    } else if (num % 7 == 0) {
        console.log("O número " + num + " não é primo!");
    } else if (num % 9 == 0) {
        console.log("O número " + num + " não é primo!");
    } else {
        console.log("O número " + num + " é primo!");
    }
}