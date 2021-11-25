import FavoriteRestoIdb from '../data/favdatabase'
import '../view/component/detail/liked-btn'

const LikeBtnInit = {
  async init ({ likeBtnBox, resto }) {
    this._likeBtnBox = likeBtnBox
    this._resto = resto

    await this._renderButton()
  },

  async _renderButton () {
    const { id } = this._resto
    const exist = await this._isRestoExist(id)
    if (exist) {
      this._renderUnFav()
    } else {
      this._renderFav()
    }
  },

  async _isRestoExist (id) {
    const resto = await FavoriteRestoIdb.getResto(id)
    return resto != null
  },

  _renderUnFav () {
    const likeButton = document.createElement('like-btn')
    likeButton.like = true

    this._likeBtnBox.innerHTML = ''
    this._likeBtnBox.appendChild(likeButton)

    const likeBtn = document.querySelector('#like')
    likeBtn.addEventListener('click', async () => {
      await FavoriteRestoIdb.deleteResto(this._resto.id)
      this._renderButton()
    })
  },

  _renderFav () {
    const likeButton = document.createElement('like-btn')
    likeButton.like = false

    this._likeBtnBox.innerHTML = ''
    this._likeBtnBox.appendChild(likeButton)

    const likeBtn = document.querySelector('#like')
    likeBtn.addEventListener('click', async () => {
      await FavoriteRestoIdb.putResto(this._resto)
      this._renderButton()
    })
  }
}

export default LikeBtnInit
