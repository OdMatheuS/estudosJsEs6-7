const characters = [
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 77,
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: 202,
    mass: 136,
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: 150,
    mass: 49,
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: 188,
    mass: 84,
    eye_color: "blue",
    gender: "male",
  },
];

const totalDosValoresDasChavesHeight = characters.reduce((acumulado, valorAtual) => {
  return acumulado + valorAtual.height;
}, 0);
//console.log("total soma valor de height de todos os personagens ==>", totalDosValoresDasChavesHeight);

//* Usando uma sintax mais enxuta ES6
// const totalDosValoresDasChavesHeights = characters.reduce((acumulado, valorAtual) =>  acumulado + valorAtual.height , 0);
// console.log(" ==>", totalDosValoresDasChavesHeights);

// =============>>>>   <<<<==================

const totalDeCorDeOlhosPorChave = characters.reduce((acumulado, valorAtual) => {
  if (acumulado[valorAtual.eye_color]) {
    acumulado[valorAtual.eye_color] = acumulado[valorAtual.eye_color] + 1;
  } else {
    acumulado[valorAtual.eye_color] = 1;
  }
  return acumulado;
}, {});

console.log(totalDeCorDeOlhosPorChave);

//* Usando uma sintax mais enxuta ES6
// const totalDeCorDeOlhosPorChave = characters.reduce((acumulado, valorAtual) => {
//   const cor = valorAtual.eye_color
//   if (acumulado[cor]) {
//     acumulado[cor] ++;
//   } else {
//     acumulado[cor] = 1;
//   }
//   return acumulado;
// }, {});
// console.log(totalDeCorDeOlhosPorChave);


// =============>>>>   <<<<==================

const totalDeCaracteresDeTodasAsChaveName = characters.reduce((acc,curr) => acc + curr.name.length,0)

console.log("---",totalDeCaracteresDeTodasAsChaveName)