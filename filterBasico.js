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

//retorn apenas um personagem com peso maior que 100, ou retorna um/varios objeto(s) com o valor pedido na condicao
const pesoMaior100 = characters.filter((c) => {
  return c.mass > 100;
});
//console.log(pesoMaior100);

//mesma coisa, porem retorno 3  objetos que respeitaram a condicao, ter uma altura maior que 150
const alturaMaior150 = characters.filter((c) => {
  return c.height > 150;
});
//console.log(alturaMaior150);

//retorna apenas os objetos que tem o valor male, de acordo com a condicao passada me retorna qualquer objeto que contenha o valor que a condicao espera
const retornaApenasMale = characters.filter((c) => {
  return c.gender === "male";
});
console.log("male",retornaApenasMale);


//mesmo conceito acima porem, a condicao pede apenas female
const retornaApenasFemale = characters.filter((c) => {
  return c.gender === "female";
});
console.log("female",retornaApenasFemale);
