import createPageSelector from './pages/createPageSelector.js'
import GoToPageButton from './util/GoToPageButton.js'

const root = document.getElementById('root')

const pageSelector = createPageSelector(root)

GoToPageButton.subscribe(pageSelector.selectPage)

pageSelector.selectPage('aboutPage')

