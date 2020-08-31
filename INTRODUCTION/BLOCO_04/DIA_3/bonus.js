let algarismos = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
};

function romanToNumber(romanString) {
    let number = 0;
    let romanArray = romanString.split("");

    for(let i = 0; i < romanArray.length; i+=1) {
        for(let chave in algarismos) {
            if(romanArray[i] == chave) {
                number += algarismos[chave];
            }
        }
    }

    return number;
}

console.log(romanToNumber("IV"));
