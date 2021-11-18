import DataSource from '../../data/data-source'
import UrlParser from '../../routes/url-parser'
import LikeBtnInit from '../../utils/like-btn-init'
import '../component/detail/resto-detail'
import '../component/detail/resto-menu'
import '../component/detail/resto-review'

const Detail = {
  async render () {
    return `
        <section class="content detail-box">
            <h1 class="detail_resto">The Restaurant Detail</h1>
            <div class="detail_container"></div>
            <div class="like-box"></div>
        </section>`
  },

  async afterRender () {
    const { id } = UrlParser.parseActiveUrlWithoutCombiner()
    const restoDetail = await DataSource.getRestoDetail(id)
    const detailContainer = document.querySelector('.detail_container')
    const detailItem = document.createElement('resto-detail')
    detailItem.detail = restoDetail

    const restoMenu = document.createElement('resto-menu')
    restoMenu.classList.add('resto-menu-container')
    restoMenu.menu = restoDetail.restaurant.menus

    const restoReview = document.createElement('resto-review')
    restoReview.reviewer = restoDetail.restaurant.customerReviews

    detailContainer.appendChild(detailItem)
    detailContainer.appendChild(restoMenu)
    detailContainer.appendChild(restoReview)

    const likeButton = document.querySelector('.like-box')
    LikeBtnInit.init({
      likeBtnBox: likeButton,
      resto: restoDetail.restaurant
    })
  }
}

export default Detail
