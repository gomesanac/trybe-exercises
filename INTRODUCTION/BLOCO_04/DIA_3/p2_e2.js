const array = [2, 3, 6, 7, 10, 1];

maiorNum(array)

function maiorNum(teste) {
    let maiorNum = teste[0];
    let indice = 0;

    for(i in teste) {
        if(teste[i] > maiorNum) {
            maiorNum = teste[i];
            indice = i;
        }
    }

    console.log(indice);
    return true;
};
