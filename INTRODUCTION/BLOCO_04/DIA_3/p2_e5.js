const array = [2, 3, 2, 5, 8, 2, 3];

console.log(maisRepetido(array));

function maisRepetido(teste) {
    let num = {};
    for(let i = 0; i < teste.length; i+=1) {
        let valor = teste[i]
        num[valor] = num[valor] === undefined ? 1 : num[valor] + 1 ;
    }

    let maior = 0;
    let maisVezes = 0;

    for(let prop in num){
        if(maior < num[prop]) {
            maior = num[prop];
            maisVezes = prop;
        }
    }

    return maisVezes;
};