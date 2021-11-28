import './component/resto-item'
import './component/appbar/appbar'
import './component/search/search'
import './component/search/search-list'
import './component/detail/resto-detail'
import './component/detail/resto-menu'
import './component/detail/resto-review'
import routes from '../routes/routes'
import UrlParser from '../routes/url-parser'
import NavDrawerInit from '../utils/nav-drawer-init'

class App {
  constructor ({ button, drawer, content }) {
    this._button = button
    this._drawer = drawer
    this._content = content

    this._initialAppShell()
  }

  _initialAppShell () {
    NavDrawerInit.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content
    })
  }

  async renderPage () {
    const url = UrlParser.parseActiveUrlWithCombiner()
    const page = routes[url]
    this._content.innerHTML = await page.render()
    await page.afterRender()
    const skipLinkElem = document.querySelector('.skip-link')
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault()
      document.querySelector('#maincontent').focus()
    })
  }
}

export default App
