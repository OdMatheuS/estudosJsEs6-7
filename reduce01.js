let objt = [{
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
},
{
  firstName: "Frankly",
  lastName: "Mob",
  age: 25,
  eyeColor: "red"
},
{
  firstName: "Lucca",
  lastName: "Caruaru",
  age: 23,
  eyeColor: "yellow"
},
{
  firstName: "Frankly",
  lastName: "francs",
  age: 20,
  eyeColor: "brown"
},
{
  firstName: "Levi",
  lastName: "lone",
  age: 32,
  eyeColor: "green"
},
{
  firstName: "Covovai",
  lastName: "vov",
  age: 27,
  eyeColor: "grey"
}
]


const calcAllAges = (acc, curr) => {
  //console.log(acc,curr) 
  return acc + curr
}

const totalAges = objt.map(item => item.age).reduce(calcAllAges)
console.log(totalAges) 

