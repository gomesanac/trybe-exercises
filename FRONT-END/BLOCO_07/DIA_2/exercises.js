const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};

/* EXERCÍCIO 1 */

const addTurno = (objeto, key, valor) => (objeto[`${key}`] = `${valor}`);
addTurno(lesson2, "turno", "manhã");

console.log("EXERCÍCIO 1");
console.log(``);
console.log(lesson2);
console.log(``);

/* EXERCÍCIO 2 */

const listKeys = objeto => Object.keys(objeto);

console.log("EXERCÍCIO 2");
console.log(``);
console.log(listKeys(lesson1));
console.log(``);

/* EXERCÍCIO 3 */

const objLength = objeto => Object.keys(objeto).length;

console.log("EXERCÍCIO 3");
console.log(``);
console.log(`Tamanho do objeto: ${objLength(lesson3)}`);
console.log(``);

/* EXERCÍCIO 4 */

const listValues = objeto => Object.values(objeto);

console.log("EXERCÍCIO 4");
console.log(``);
console.log(listValues(lesson2));
console.log(``);

/* EXERCÍCIO 5 */

const allLessons =  Object.assign({}, {lesson1}, {lesson2}, {lesson3});

console.log("EXERCÍCIO 5");
console.log(``);
console.log(allLessons);
console.log(``);

/* EXERCÍCIO 6 */

const totalStudents = () => lesson1.numeroEstudantes + lesson2.numeroEstudantes + lesson3.numeroEstudantes
console.log('EXERCÍCIO 6');
console.log(``);
console.log(`Total de estudantes: ${totalStudents()}`);
console.log(``);

/* EXERCÍCIO 7 */

const getValueByNumber = (objeto, index) => Object.values(objeto)[index];

console.log('EXERCÍCIO 7');
console.log(``);
console.log(`Valor: ${getValueByNumber(lesson1, 0)}`);
console.log(``);

/* EXERCÍCIO 8 */

const verifyPair = (objeto, key, value) => Object.keys(objeto).includes(key) && Object.values(objeto).includes(value);

console.log('EXERCÍCIO 8');
console.log(``);
console.log(verifyPair(lesson1, 'turno', 'manhã'));
console.log(``);

/* BÔNUS 1 */

const matStudents = allLessons => {
  const inputs = Object.entries(allLessons);
  let students = 0;
  for (let i = 0; i < inputs.length; i += 1) {
    if(inputs[i][1].materia == 'Matemática'){
      students += inputs[i][1].numeroEstudantes
    }
  }
  return students
};

console.log('BÔNUS 1');
console.log(``);
console.log(`Número de estudandes de matemática: ${matStudents(allLessons)}`);
console.log(``);

/* BÔNUS 2 */

const createReport = (allLessons, teacher) => {
  const lessons = Object.values(allLessons);
  const report = {
    professor: teacher,
    aulas: [],
    estudantes: 0,
  };

  for (let i = 0; i < lessons.length; i += 1) {
    if(lessons[i].professor === teacher) {
      report.aulas.push(lessons[i].materia);
      report.estudantes += lessons[i].numeroEstudantes;
    }
  }

  return report
};

console.log('BÔNUS 2');
console.log(``);
console.log(createReport(allLessons, 'Maria Clara'));
console.log(``);
