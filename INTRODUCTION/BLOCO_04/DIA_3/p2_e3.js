const array = [2, 4, 6, 7, 10, 0, -3];

menorNum(array);

function menorNum(teste) {
    let menorNum = teste[0];
    let indice = 0;

    for(i in teste) {
        if(teste[i] < menorNum) {
            menorNum = teste[i];
            indice = i;
        }
    }

    console.log(indice);
    return true;
};