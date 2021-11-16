import DataSource from '../../data/data-source'
import UrlParser from '../../routes/url-parser'
import '../component/detail/resto-detail'
import '../component/detail/resto-menu'

const Detail = {
  async render () {
    return `
        <section class="content">
            <h1 class="detail_resto">The Restaurant Detail</h1>
            <div class="detail_container"></div>
        </section>`
  },

  async afterRender () {
    const { id } = UrlParser.parseActiveUrlWithoutCombiner()
    const restoDetail = await DataSource.getRestoDetail(id)
    const detailContainer = document.querySelector('.detail_container')
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
