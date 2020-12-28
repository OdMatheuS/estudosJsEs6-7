//* este metodo cria outro array apartir do array original
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let numbers2 = Array.from(numbers);
console.log(numbers2);

//! ou utilizando uma fn para escolher quais valores mapear
//esta fn retorna se o numero for par = true e impar = false, com base nos elementos do array original
let choiceNumb = Array.from(numbers, (x) => x % 2 == 0);
console.log(choiceNumb);

////////////////////////////////////////////////////////////////////////
//Utilizando o metodo Array.of
//basicamente ele cria um novo array apartir dos argumentos passados para o Metodo
let numbersOne = Array.of(22, 32, 42);
let numbersFoobar = Array.of(11, 92, 63);

console.log(numbersOne);
console.log(numbersFoobar);
//Posso utilizar este metodo para fazer uma copia de um array existente tambem

let copiaArrNumbFoobar = Array.of(...numbersFoobar)
console.log(copiaArrNumbFoobar)