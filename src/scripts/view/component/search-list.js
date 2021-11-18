import './resto-item'

class searchsList extends HTMLElement {
  set searchResto (restaurants) {
    this._searchResto = restaurants
    this.render()
  }

  get value () {
    return this.querySelector('#listCocktail').value
  }

  render () {
    this._searchResto.forEach(restaurants => {
      const searchItems = document.createElement('resto-item')
      searchItems.content = restaurants
      this.appendChild(searchItems)
    })
  }
}

customElements.define('search-list', searchsList)
