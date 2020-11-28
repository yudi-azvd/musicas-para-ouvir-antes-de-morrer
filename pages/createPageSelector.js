import aboutPage from './aboutPage.js'
import songPage from './songPage.js'
import songsIndexPage from './songsIndexPage.js'

function createPageSelector(root) {
  const documentRoot = root

  const pages = {
    aboutPage,
    songPage,
    songsIndexPage,
  }
  
  function selectPage(pageName) {
    const page = pages[pageName]
    documentRoot.innerHTML = ''
    documentRoot.append(page())
    console.log('selecting page')
  }

  return {
    selectPage
  }
}

export default createPageSelector
