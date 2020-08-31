console.log(calculoLucro(100, 250))

function calculoLucro(valorCusto, valorVenda) {
    let custoTotal = valorCusto * 1000;
    let impostoTotal = custoTotal * 0.2;

    let vendaTotal = valorVenda * 1000;

    let lucro = vendaTotal - custoTotal - impostoTotal;

    if (valorCusto < 0 || valorVenda < 0) {
        return "Erro: O valor informado menor que zero";
    } else {
        return "O lucro da venda de 1000 produtos é de ", lucro;
    }
}
