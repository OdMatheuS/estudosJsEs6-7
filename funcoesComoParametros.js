
function potenciaBasica(basePotencia) {
  return function (expoente) {
    return Math.pow(basePotencia, expoente)
  }
}

//console.log(potenciaBasica(2)(8));

function somar(a) {
  return (b) => {
    return (c) => {
      return a + b + c
    }
  }
}

//console.log(somar(1)(1)(1))


//*um pouco mais simples de escrever
function calcular(x) {
  return (y) => {
    return (fn) => {
      return fn(x, y)
    }
  }
}

//? maneirea mais declarativa
// function calcular(x) {
//   return function (y) {
//     return function (fn) {
//       return fn(x, y)
//     }
//   }
// }

//!maneira cyberpunk/ultron
// function calcular(x) {
//   return (y) => (fn) => fn(x, y)
// }


function subtrair(a, b) {
  return a - b
}
function multiplicar(a, b) {
  return a * b
}
function dividir(a, b) {
  return a / b
}

console.log(calcular(10)(1)(subtrair))
console.log(calcular(10)(2)(multiplicar))
console.log(calcular(10)(2)(dividir))