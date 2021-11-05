class RestoItem extends HTMLElement {
  set restaurant (restaurant) {
    this._restaurant = restaurant
    this.render()
  }

  render () {
    this.innerHTML = `
    <style>
      resto-item {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        width: 100%;
        border-radius: 5px;
        overflow: hidden;
      }

      .resto-detail {
        padding: 16px;
      }

      .img-container {
        height: auto;
        width: auto;
      }

      .resto-location {
        font-size: 12px;
        padding: 10px;
        border-radius: 5px;
        position: absolute;
        margin: 205px 0 0 13px;
        background-color: white;
      }

      .resto-img {
        width: 100%;
        height: 250px;
        object-fit: cover;
      }

      .resto-name {
        font-weight: 500;
        font-size: 16px;
        margin-top: 16px;
        transition: 0.3s opacity;
      }

      .resto-rating {
        font-size: 13px;
        color: #999;
      }

      .resto-desc {
        margin-top: 16px;
        font-size: 13px;
        text-align: justify;
        line-height: 1.5em;
      }

      @media screen and (min-width: 650px) {

        .resto-detail {
          padding: 16px 32px 32px 32px;
        }

        .resto-name {
          font-size: 18px;
        }

        .resto-desc {
          font-size: 14px;
        }
      }

    </style>
    <div class="img-container">
      <p class="resto-location">${this._restaurant.city}</p>
      <img src="${this._restaurant.pictureId}" alt="${this._restaurant.name} image" class="resto-img">
    </div>
    <div aria-label="resto detail" class="resto-detail">
      <p class="resto-name">${this._restaurant.name}</p>
      <p class="resto-rating">Rating : ${this._restaurant.rating}</p>
      <p class="resto-desc">${this._restaurant.description}</p>
    </div>`
  }
}

customElements.define('resto-item', RestoItem)
