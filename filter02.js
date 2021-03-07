let obj = [
  {
    "name": "Luke Skywalker",
    "height": "172",
    "weight": 77,
    "hair_color": "blond",
    "skin_color": "fair",
    "eye_color": "blue",
    "birth_year": "19BBY",
    "gender": "male",
  },
  {
    "name": "C-3PO",
    "height": "167",
    "weight": 75,
    "hair_color": "n/a",
    "skin_color": "gold",
    "eye_color": "yellow",
    "birth_year": "112BBY",
    "gender": "n/a",
  },
  {
    "name": "R2-D2",
    "height": "96",
    "weight": 32,
    "hair_color": "n/a",
    "skin_color": "white, blue",
    "eye_color": "red",
    "birth_year": "33BBY",
    "gender": "n/a",
  }
]

const getPesoMaisBaixo = item => item.weight < 70

const resultadoPessoas = obj.filter(getPesoMaisBaixo).map(item => item.name)
console.log(resultadoPessoas)