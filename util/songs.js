function Song(
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
    name, text, songUrl, link
  }
}

const songs = [
  Song(
    'Wish You Were Here',
    'oi\nah não...'
  ),

  Song(
    'Time',
    'oi\nah não...'
  ),

  Song(
    'Someone to Love',
    `Todos dizem que essa música é uma clássica deles, mas, seja por ignorância
    seja por incapacidade de apreciar a músic, não vi nada de mais nela.

    Ainda assim, gostei dela.`,
    'https://www.youtube.com/watch?v=IXdNnw99-Ic'
  ),
]


export { Song, songs }
