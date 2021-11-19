import '../resto-item'

class searchsList extends HTMLElement {
  set searchResto (resto) {
    this._searchResto = resto
    console.log(resto)
    this.render()
  }

  get value () {
    return this.querySelector('#listFindResto').value
  }

  render () {
    this.innerHTML = ''
    this._searchResto.forEach(resto => {
      const searchItems = document.createElement('resto-item')
      searchItems.content = resto
      this.appendChild(searchItems)
    })
  }
}

customElements.define('search-list', searchsList)
