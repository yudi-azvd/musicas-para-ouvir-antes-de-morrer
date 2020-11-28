function songPage(
  name,
  text,
  songUrl
) {

  const innerHTML = `
    <h2>Música para Ouvir Antes de Morrer:</h2>

    <h1>${name}</h1>

    ${text.split('\n\n').map(par => `<p>${par}</p>`)}
  `

  const link = `
    <a href="">${name}</a>
  `
  return {
    innerHTML,
    link
  }
}


export default songPage
