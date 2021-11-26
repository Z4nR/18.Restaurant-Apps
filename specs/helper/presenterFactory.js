import FavoriteRestoIdb from '../../src/scripts/data/favdatabase'
import LikeBtnInit from '../../src/scripts/utils/like-btn-presenter'

const createLikeBtnElement = async (restaurant) => {
  await LikeBtnInit.init({
    likeBtnBox: document.querySelector('.like-box'),
    resto: restaurant,
    idb: FavoriteRestoIdb
  })
}

export default { createLikeBtnElement }
