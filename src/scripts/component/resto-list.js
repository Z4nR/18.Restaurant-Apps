import './resto-item'

class RestoList extends HTMLElement {
  constructor () {
    super()
    this.shadowDOM = this.attachShadow({ mode: 'open' })
  }

  set restaurants (restaurants) {
    this._restaurants = restaurants
    this.render()
  }

  render () {
    this.shadowDOM.innerHTML =
    this._restaurants.forEach(resto => {
      const restoItems = document.createElement('resto-item')
      restoItems.restaurant = resto
      this.shadowDOM.appendChild(restoItems)
    })
  }
}

customElements.define('resto', RestoList)
