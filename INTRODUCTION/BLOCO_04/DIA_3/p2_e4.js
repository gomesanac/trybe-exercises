const array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

maiorString(array);

function maiorString(teste) {
    let maiorString = teste[0];
    let tamanho = teste[0].length;

    for(i in teste) {
        if(teste[i].length > tamanho) {
            tamanho = teste[i].length;
            maiorString = teste[i];
        }
    }

    console.log(maiorString);
    return true;
};
