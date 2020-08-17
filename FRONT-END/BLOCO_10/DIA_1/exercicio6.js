const Animals = [
  { name: "Dorminhoco", age: 1, type: "Dog" },
  { name: "Soneca", age: 2, type: "Dog" },
  { name: "Preguiça", age: 5, type: "Cat" },
];

const findAnimalByName = (searchName) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const animal = Animals.find(({ name }) => name === searchName);

      if (animal) return resolve(animal);

      return reject("Nenhum animal com esse nome!");
    }, 100);
  });
};

const findAnimalByAge = (searchAge) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const animal = Animals.filter(({ age }) => age === searchAge);

      if (animal.length !== 0) return resolve(animal);

      return reject("Nenhum animal com essa idade!");
    }, 100);
  });
};

module.exports = { findAnimalByName, findAnimalByAge };
