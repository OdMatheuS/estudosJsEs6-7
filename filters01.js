const number = [1,2,3,4,5,6,7,8,9,10]
function checkNumberOdd(){
  let foo = number.map(b => b ).filter(a => a % 2 == 1).map(c => c*2)
  return foo
}

console.log(checkNumberOdd())