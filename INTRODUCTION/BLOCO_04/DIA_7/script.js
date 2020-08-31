let fundoAzul = document.getElementById("fundoAzul");
let fundoVerde = document.getElementById("fundoVerde");
let fundoVermelho = document.getElementById("fundoVermelho");

let colorFundo = localStorage.colorFundo;
if (colorFundo) {
    document.body.style.backgroundColor = colorFundo;
}

function mudaFundo(indicador) {
    if (indicador == 1) {
        let colorFundo = "#3a6584";
        localStorage.setItem("colorFundo", colorFundo);
        document.body.style.backgroundColor = colorFundo;
    } else if (indicador == 2) {
        let colorFundo = "#556b2f";
        localStorage.setItem("colorFundo", colorFundo);
        document.body.style.backgroundColor = colorFundo;
    } else if (indicador == 3) {
        let colorFundo = "#a93e3a";
        localStorage.setItem("colorFundo", colorFundo);
        document.body.style.backgroundColor = colorFundo;
    }
}

fundoAzul.addEventListener("click", function() {
    mudaFundo(1);
});

fundoVerde.addEventListener("click", function() {
    mudaFundo(2);
});

fundoVermelho.addEventListener("click", function() {
    mudaFundo(3);
});

/*--------------------------------------------------------------*/

let textoAmarelo = document.getElementById("textoAmarelo");
let textoBranco = document.getElementById("textoBranco");
let textoRosa = document.getElementById("textoRosa");

let colorTexto = localStorage.colorTexto;
if (colorTexto) {
    document.body.style.color = colorTexto;
}

function mudaCorTexto(indicador) {
    if (indicador == 1) {
        let colorTexto = "#fff36b";
        localStorage.setItem("colorTexto", colorTexto);
        document.body.style.color = colorTexto;
    } else if (indicador == 2) {
        let colorTexto = "#ffffff";
        localStorage.setItem("colorTexto", colorTexto);
        document.body.style.color = colorTexto;
    } else if (indicador == 3) {
        let colorTexto = "#ff9db1";
        localStorage.setItem("colorTexto", colorTexto);
        document.body.style.color = colorTexto;
    }
}

textoAmarelo.addEventListener("click", function() {
    mudaCorTexto(1);
});

textoBranco.addEventListener("click", function() {
    mudaCorTexto(2);
});

textoRosa.addEventListener("click", function() {
    mudaCorTexto(3);
});

/*--------------------------------------------------------------*/

let textoP = document.getElementById("textoPequeno");
let textoM = document.getElementById("textoMedio");
let textoG = document.getElementById("textoGrande");

let tamanhoTexto = localStorage.tamanhoTexto;
if (tamanhoTexto) {
    document.body.style.fontSize = tamanhoTexto;
}

function mudaTamanhoTexto(indicador) {
    if (indicador == 1) {
        let tamanhoTexto = 10 + "px";
        localStorage.setItem("tamanhoTexto", tamanhoTexto);
        document.body.style.fontSize = tamanhoTexto;
    } else if (indicador == 2) {
        let tamanhoTexto = 20 + "px";
        localStorage.setItem("tamanhoTexto", tamanhoTexto);
        document.body.style.fontSize = tamanhoTexto;
    } else if (indicador == 3) {
        let tamanhoTexto = 30 + "px";
        localStorage.setItem("tamanhoTexto", tamanhoTexto);
        document.body.style.fontSize = tamanhoTexto;
    }
}

textoP.addEventListener("click", function() {
    mudaTamanhoTexto(1);
});

textoM.addEventListener("click", function() {
    mudaTamanhoTexto(2);
});

textoG.addEventListener("click", function() {
    mudaTamanhoTexto(3);
});

/*--------------------------------------------------------------*/

let EspP = document.getElementById("espacamentoPequeno");
let EspM = document.getElementById("espacamentoMedio");
let EspG = document.getElementById("espacamentoGrande");

let espacoTexto = localStorage.espacoTexto;
if (espacoTexto) {
    document.body.style.lineHeight = espacoTexto;
}

function mudaEspacoTexto(indicador) {
    if (indicador == 1) {
        let espacoTexto = 20 + "px";
        localStorage.setItem("espacoTexto", espacoTexto);
        document.body.style.lineHeight = espacoTexto;
    } else if (indicador == 2) {
        let espacoTexto = 30 + "px";
        localStorage.setItem("espacoTexto", espacoTexto);
        document.body.style.lineHeight = espacoTexto;
    } else if (indicador == 3) {
        let espacoTexto = 40 + "px";
        localStorage.setItem("espacoTexto", espacoTexto);
        document.body.style.lineHeight = espacoTexto;
    }
}

EspP.addEventListener("click", function() {
    mudaEspacoTexto(1);
});

EspM.addEventListener("click", function() {
    mudaEspacoTexto(2);
});

EspG.addEventListener("click", function() {
    mudaEspacoTexto(3);
});

/*--------------------------------------------------------------*/

let mono = document.getElementById("monospace");
let sans = document.getElementById("sansSerif");
let serif = document.getElementById("serif");

let fonteTexto = localStorage.fonteTexto;
if (fonteTexto) {
    document.body.style.fontFamily = fonteTexto;
}

function mudaFonteTexto(indicador) {
    if (indicador == 1) {
        let fonteTexto = "monospace";
        localStorage.setItem("fonteTexto", fonteTexto);
        document.body.style.fontFamily = fonteTexto;
    } else if (indicador == 2) {
        let fonteTexto = "sans-serif";
        localStorage.setItem("fonteTexto", fonteTexto);
        document.body.style.fontFamily = fonteTexto;
    } else if (indicador == 3) {
        let fonteTexto = "serif";
        localStorage.setItem("fonteTexto", fonteTexto);
        document.body.style.fontFamily = fonteTexto;
    }
}

mono.addEventListener("click", function() {
    mudaFonteTexto(1);
});

sans.addEventListener("click", function() {
    mudaFonteTexto(2);
});

serif.addEventListener("click", function() {
    mudaFonteTexto(3);
});
