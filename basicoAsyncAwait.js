const quantosGuizosKakashiTemNoBolso = () => {
  return Promise.resolve(parseInt(Math.random()*10))
}

const chutesQtdGuizos = async() => {
  const primeiroChute = await quantosGuizosKakashiTemNoBolso()
  const segundoChute = await quantosGuizosKakashiTemNoBolso()
  const terceiroChute = await quantosGuizosKakashiTemNoBolso()
  console.log(`${primeiroChute} Guizos,${segundoChute} Guizos,${terceiroChute} Guizos`)
}

chutesQtdGuizos()