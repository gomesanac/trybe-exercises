console.log(culcoSalarioLiquido(25000));

function culcoSalarioLiquido(salarioBruto) {
    let salarioBase = null;
    let salarioLiquido = null;

    let alicotaInss8 = salarioBruto * 0.08;
    let alicotaInss9 = salarioBruto * 0.09;
    let alicotaInss11 = salarioBruto * 0.11;
    const alicotaInssMax = 570.88;

    let alicotaIr7 = (salarioBase * 0.075) - 142.8;
    let alicotaIr15 = (salarioBase * 0.15) - 354.8;
    let alicotaIr22 = (salarioBase * 0.225) - 636.13;
    let alicotaIr27 = (salarioBase * 0.275) - 869.36;

    if (salarioBruto <= 1556.94) {
        salarioBase = salarioBruto - alicotaInss8;
    } else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
        salarioBase = salarioBruto - alicotaInss9;
    } else if (salarioBruto >= 2594.93 && 5189.82) {
        salarioBase = salarioBruto - alicotaInss11;
    } else {
        salarioBase = salarioBruto - alicotaInssMax;
    }

    if (salarioBase <= 1906.98) {
        salarioLiquido = salarioBase;
    } else if (salarioBase >= 1906.99 && salarioBase <= 2826.65) {
        salarioLiquido = salarioBase - alicotaIr7;
    } else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
        salarioLiquido = salarioBase - alicotaIr15;
    } else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
        salarioLiquido = salarioBase - alicotaIr22;
    } else {
        salarioLiquido = salarioBase - alicotaIr27;
    }

    return "Seu salário líquido é de R$" + salarioLiquido;
};
