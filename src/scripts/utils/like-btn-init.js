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

    if (await this._isRestoExist(id)) {
      this._renderUnFav()
    } else {
      this._renderFav()
    }
  },

  async _isRestoExist (id) {
    const resto = await FavoriteRestoIdb.getResto(id)
    return !!resto
  },

  _renderFav () {
    this._likeBtnBox.innerHTML = '<like-btn></like-btn>'

    const likeBtn = document.querySelector('#like')
    likeBtn.addEventListener('click', async () => {
      await FavoriteRestoIdb.putResto(this._resto)
      this._renderButton()
    })
  },

  _renderUnFav () {
    this._likeBtnBox.innerHTML = '<like-btn></like-btn>'

    const likeBtn = document.querySelector('#like')
    likeBtn.addEventListener('click', async () => {
      await FavoriteRestoIdb.deleteResto(this._resto)
      this._renderButton()
    })
  }
}

export default LikeBtnInit
