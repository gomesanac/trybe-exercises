const SKILLS = [' HTML', ' CSS', ' JavaScript', ' Git', ' SheelScript'];

const SUBSTITUIX = (string) => `Tryber ${string} aqui! 
Tudo bem?`;
const STRINGFINAL = (skills, frase) => `${frase}
    Minhas cinco principais habilidades são: ${skills.sort()}.`;

console.log(STRINGFINAL(SKILLS, SUBSTITUIX('Ana')));
