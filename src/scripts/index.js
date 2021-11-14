import 'regenerator-runtime' /* for async await transpile */
import '../styles/main.css'
import '../styles/responsive.css'
import App from './view/app'

const app = new App({
  button: document.querySelector('#menu'),
  hero: document.querySelector('.hero'),
  content: document.querySelector('main'),
  drawer: document.querySelector('#drawer')
})

window.addEventListener('hashChange', () => {
  app.renderPage()
})

window.addEventListener('load', () => {
  app.renderPage()
})
