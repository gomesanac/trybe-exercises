somatorio(5);

function somatorio(n) {
    let somatorio = 0;

    for(let i = n; i > 0; i-=1) {
        somatorio = somatorio + i;
    }

    console.log(somatorio);
    return true;
};