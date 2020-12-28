// O metodo entries e uma forma de obter iteradores de um array
// ele devolve @@iterator que contem pares de chave e valor
// neste exemplo a chave sera a posicao do array e o valor o proprio elemento
let numbers = [1, 2, 3, 4, 5, 6];
let stoEntries = numbers.entries();
console.log(stoEntries.next().value);
console.log(stoEntries.next().value);
console.log(stoEntries.next().value);
console.log(stoEntries.next().value);
console.log(stoEntries.next().value);
console.log(stoEntries.next().value);

// Semelhante a um for of

stoEntries = numbers.entries();
for (const n of stoEntries) {
  console.log(n);
}
