console.log(movimentoXadrez("Cavalo"));

function movimentoXadrez(peca) {
    peca = peca.toLocaleLowerCase()

    switch (peca) {
        case "rei":
            return "O rei pode se movimentar em qualquer direção uma casa por vez";
            break
        case "rainha":
            return "A rainha pode se movimentar em qualquer direção para quantas casas quiser, contanto que estas estejam vazias";
            break
        case "torre":
            return "O torre pode se movimentar em linha reta, na horizontal e na vertical, para quantas casas quiser, contanto que estas estejam vazias";
            break
        case "bispo":
            return "O bispo pode se movimentar na diagonal para quantas casas quiser, contanto que estas estejam vazias";
            break
        case "cavalo":
            return "O cavalo pode se movimentar duas casa na vertinal e uma casa na horizontal, ou duas casas na horizontal e uma na vertical, podendo pular qualquer peça caso necessário";
            break
        case "peão":
            return "O peão pode se movimentar apenas um casa para a frente";
            break
        default:
            return "Erro: entrada incorreta";
    }
}
               