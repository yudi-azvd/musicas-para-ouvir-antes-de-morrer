import GoToPageButton from '../util/GoToPageButton.js'

function aboutPage() {
  const songsIndexPage = new GoToPageButton('songsIndexPage', 'Músicas')

  const div = document.createElement('div')

  div.innerHTML = `
    <h1>Sobre esse Site</h1>

    <p>
      Há muito tempo, quando estávamos no Ensino Médio, uma amiga criou uma
      uma lista de músicas e ela a chamou de <strong> Músicas para Ouvir Antes 
      de Morrer </strong>.
    </p>
    <p>
      Minha parte era escutar cada uma dessas músicas e escrever o que eu achava
      delas. Comecei a escrever algum tempo depois, mas nunca terminei. 
    </p>
    <p>
      Bem, aqui está...
    </p>
  `

  div.append(songsIndexPage.button)

  return div
}

export default aboutPage
