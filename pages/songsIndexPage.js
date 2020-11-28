import GoToPageButton from '../util/GoToPageButton.js'
import { songs } from '../util/songs.js'

// window.history.pushState({oi: true} ,'/oi')

function songsIndexPage() {
  const div = document.createElement('div')

  const goBack = new GoToPageButton('aboutPage', 'Voltar')

  div.innerHTML = `
    <h1>Músicas para Escutar Antes de Morrer</h1>
  `
  div.append(goBack.button)

  console.log(goBack.button.onclick)

  div.innerHTML += `${songs.map(song => `<p>${song.link}</p>\n`)}`

  return div
}

export default songsIndexPage
