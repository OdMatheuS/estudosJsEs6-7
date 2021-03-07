const car = [
  { nome: "Caneta", qtde: 10, preco: 7.99, fragil: true },
  { nome: "imp", qtde: 1, preco: 649.50, fragil: true },
  { nome: "cad", qtde: 4, preco: 27.10, fragil: false },
  { nome: "lap", qtde: 3, preco: 5.82, fragil: false },
  { nome: "teso", qtde: 1, preco: 19.20, fragil: true },
]

const getOnlyFragil = item => item.fragil ;

const multiplQtdPreco = item => item.qtde * item.preco;

const sum = (acc,curr) => {
  return acc + curr 
};

const totalSumFragil = car.filter(getOnlyFragil).map(multiplQtdPreco).reduce(sum)

let qtdFragil = car.filter(a => a.fragil)
//console.log(foo.length)

let resultChallenge = totalSumFragil / qtdFragil.length
console.log(resultChallenge.toPrecision(5))