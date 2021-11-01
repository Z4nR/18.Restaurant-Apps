import './resto-item'

class RestoList extends HTMLElement {
  constructor () {
    super()
    this.shadowDOM = this.attachShadow({ mode: 'open' })
  }

  set restaurants (restaurants) {
    this._restaurants = [...restaurants.restaurants]
    this.render()
  }

  render () {
    this.shadowDOM.innerHTML = ''
    console.log(this._restaurants)
    this._restaurants.forEach(restaurants => {
      const restoItems = document.createElement('resto-item')
      restoItems.restaurant = restaurants
      this.shadowDOM.appendChild(restoItems)
    })
  }
}

customElements.define('resto-list', RestoList)
