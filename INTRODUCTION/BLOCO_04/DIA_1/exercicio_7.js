console.log(percentToConcept(100))

function percentToConcept(nota) {
    if (nota <= 100 && nota >= 90 ) {
        return "Conceito: A";
    } else if (nota < 90 && nota >= 80) {
        return "Conceito: B";
    } else if (nota < 80 && nota >= 70) {
        return "Conceito: C";
    } else if (nota < 70 && nota >= 60) {
        return "Conceito: D";
    } else if (nota < 60 && nota >= 50) {
        return "Conceito: E";
    } else if (nota < 50) {
        return "Conceito: F";
    } else {
        return "Erro: entrada incorreta";
    }
}
