import 'regenerator-runtime' /* for async await transpile */
import 'lazysizes'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'
import '../styles/main.css'
import '../styles/responsive.css'
import swRegister from './utils/sw-register'
import App from './view/app'

const app = new App({
  button: document.querySelector('#menu'),
  content: document.querySelector('main'),
  drawer: document.querySelector('#drawer')
})

window.addEventListener('hashchange', () => {
  app.renderPage()
})

window.addEventListener('load', () => {
  app.renderPage()
  swRegister()
})
