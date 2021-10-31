class RestoItem extends HTMLElement {
  constructor () {
    super()
    this.shadowDOM = this.attachShadow({ mode: 'open' })
  }

  set restaurant (restaurant) {
    this._restaurant = restaurant
    this.render()
  }

  render () {
    this.shadowDOM.innerHTML = `
    <article class="resto-box">
        <div class="img-container">
            <p class="resto-location">${this._restaurant.city}</p>
            <img src="${this._restaurant.pictureId}" alt="Restaurant Rekomendasi" class="resto-img">
        </div>
        <div class="resto-detail">
            <p class="resto-name">${this._restaurant.name}</p>
            <p class="resto-rating">${this._restaurant.rating}</p>
            <p class="resto-desc">${this._restaurant.description}</p>
        </div>
    </article>`
  }
}

customElements.define('resto-item', RestoItem)
