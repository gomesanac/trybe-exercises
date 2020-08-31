console.log(oneIsOdd(4, 7, 8))

function oneIsOdd(num1, num2, num3) {
    if (num1 % 2 != 0 || num2 % 2 != 0 || num3 % 2 != 0) {
       return true;
    } else {
       return false;
    }
}
