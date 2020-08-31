let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  recorrente: "Sim",
};

let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell’s Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim",
};

for(let propriedade in info) {
    if(info[propriedade] == info.recorrente) {
        console.log("Ambos recorrentes");
        break
    }
    console.log(info[propriedade] + " " + info2[propriedade]);
};
