import CONFIG from '../../../globals/config'

class RestoDetail extends HTMLElement {
  set detail (detail) {
    this._detail = detail
    this.render()
  }

  render () {
    const detail = this._detail.restaurant
    this.innerHTML = `
        <div class="detail-container>
            <h2 class="detail-name>${detail.name}</h3>
            <img src="${detail.pictureId ? CONFIG.BASE_IMG_URL + detail.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}" alt="${detail.name} image" class="detail-img">
            <div class="resto-detail">
                <h3>Restaurant Information</h3>
                <h4>Address</h4>
                <p>${detail.address}, ${detail.city}</p>
                <h4>Category</h4>
                <p>${detail.category}</p>
            </div>
            <div class="resto-desc">
                <h4>Description</h4>
                <p>${detail.description}</p>
            </div>
        </div>`
  }
}

customElements.define('resto-detail', RestoDetail)
