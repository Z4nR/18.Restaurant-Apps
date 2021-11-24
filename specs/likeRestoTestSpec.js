import LikeBtnInit from '../src/scripts/utils/like-btn-init'
import DataSource from '../src/scripts/data/data-source'
import UrlParser from '../src/scripts/routes/url-parser'

describe('Liking A Resto', () => {
  it('should  how the like button when the resto has not been liked before', async () => {
    const { id } = UrlParser.parseActiveUrlWithoutCombiner()
    const restoDetail = await DataSource.getRestoDetail(id)
    document.body.innerHTML = '<div class="like-box"></div>'
    await LikeBtnInit.init({
      likeBtnBox: document.querySelector('.like-box'),
      resto: restoDetail
    })

    expect(document.querySelector('[aria-label="like this resto"]'))
      .toBeTruthy()
  })
})
