import DataSource from '../../data/data-source'
import UrlParser from '../../routes/url-parser'

const Detail = {
  async render () {
    return `
        <section class="content">
            <div class="detail-container"></div>
        </section>`
  },

  async afterRender () {
    const { id } = UrlParser.parseActiveUrlWithoutCombiner()
    const restoDetail = await DataSource.getRestoDetail(id)
    const detailContainer = document.querySelector('.detail-container')
    const detailItem = document.createElement('resto-detail')
    detailItem.detail = restoDetail

    // const restoMenu = document.createElement('resto-menu')
    // restoMenu.classList.add('resto-menu-container')
    // restoMenu.menu = restoDetail.menus

    detailContainer.appendChild(detailItem)
    // detailContainer.appendChild(restoMenu)
  }
}

export default Detail
