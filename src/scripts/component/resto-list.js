import './resto-item'

class RestoList extends HTMLElement {
  constructor () {
    super()
    this.shadowDOM = this.attachShadow({ mode: 'open' })
  }

  set restaurants (restaurants) {
    this._restaurants = [...restaurants.restaurants]
    console.log(restaurants)
    this.render()
  }

  get value () {
    return this.querySelector('#listResto').value
  }

  renderError (message) {
    this.shadowDOM.innerHTML = `
      <style>
        resto-list > .placeholder {
          font-weight: lighter;
          color: rgba(0,0,0,0.5);
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
      </style>`
    this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`
  }

  render () {
    this.shadowDOM.innerHTML = ''
    this._restaurants.forEach(restaurants => {
      const restoItems = document.createElement('resto-item')
      restoItems.restaurant = restaurants
      this.shadowDOM.appendChild(restoItems)
    })
  }
}

customElements.define('resto-list', RestoList)
