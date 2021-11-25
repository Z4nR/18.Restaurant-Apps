import LikeBtnInit from '../../src/scripts/utils/like-btn-init'

const createLikeBtnElement = async (restaurant) => {
  LikeBtnInit.init({
    likeBtnBox: document.querySelector('.like-box'),
    resto: restaurant
  })
}

export default { createLikeBtnElement }
