import CONFIG from '../../../globals/config'

class RestoDetail extends HTMLElement {
  set detail (detail) {
    this._detail = detail
    this.render()
  }

  render () {
    const detail = this._detail
    const category = detail.categories
    let cat = ''
    category.forEach((category) => {
      cat += `<span class="category">${category.name}</span>`
    })

    this.innerHTML = `
    <style>
      .detail-container {
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1fr;
        transition: 0.5s;
        gap: 18px 16px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        width: 100%;
        border-radius: 5px;
        padding: 16px;
      }
      h3 {
        margin: 15px 0 5px 0;
      }
      p {
        text-align: justify;
        font-size: 15px;
      }
      span {
        margin-right: 5px;
        color: white;
        background-color: #247291;
        padding: 3px;
        border-radius: 5px;
      }
      .detail-img {
        border-radius: 5px;
        width: 100%;
      }

      @media screen and (min-width: 800px) {
        .detail-container {
          grid-template-columns: auto 1fr;
          transition: 0.5s;
        }
        .detail-container .detail-name {
          grid-column-start: 1;
          grid-column-end: 3;
        }
        .detail-name {
          font-size: 30px;
          font-weight: 400;
          text-align: center;
        }
        .detail-info {
          font-size: 25px;;
        }
      }

      @media screen and (max-width: 799px) {
        .detail-name {
          font-size: 25px;
          font-weight: 400;
        }
        .detail-info {
          font-size: 20px;;
        }
        h3 {
          font-size: 15px;
          font-weight:500;
        }
      }
    </style>
    <div class="detail-container">
      <h1 class="detail-name">${detail.name}</h1>
      <img src="${detail.pictureId ? CONFIG.BASE_IMG_URL + detail.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}" alt="${detail.name} image" class="detail-img">
      <div class="resto-detail">
        <p class="detail-info">Restaurant Information</p>
        <h3>Address :</h3>
        <p>${detail.address}, ${detail.city}</p>
        <h3>Category :</h3>
        <p>${cat}</p>
        <h3>Description :</h3>
        <p>${detail.description}</p>
      </div>
    </div>`
  }
}

customElements.define('resto-detail', RestoDetail)
