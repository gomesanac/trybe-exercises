console.log(oneIsEven(4, 5, 65))

function oneIsEven(num1, num2, num3) {
    if (num1 % 2 == 0 || num2 % 2 == 0 || num3 % 2 == 0) {
        return true;
    } else {
        return false;
    }
}
