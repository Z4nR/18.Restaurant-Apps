import CONFIG from '../../globals/config'

class RestoItem extends HTMLElement {
  set content (content) {
    this._content = content
    this.render()
  }

  render () {
    const restaurant = this._content
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
        padding: 1.3em 1.3em 1.3em 0;
      }

      .resto-name a {
        padding: 1.3em 1.3em 1.3em 0;
        color: #247291;
        text-decoration: none;
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
      <p class="resto-location">${restaurant.city}</p>
      <img src="${restaurant.pictureId ? CONFIG.BASE_IMG_URL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}" alt="${restaurant.name} image" class="resto-img lazyload">
    </div>
    <div aria-label="resto detail" class="resto-detail">
      <p class="resto-name"><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></p>
      <p class="resto-rating">⭐️ ${restaurant.rating}</p>
      <p class="resto-desc">${restaurant.description}</p>
    </div>`
  }
}

customElements.define('resto-item', RestoItem)
