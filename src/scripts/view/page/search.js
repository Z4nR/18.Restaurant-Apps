import SearchInit from '../../utils/search-init'
import '../component/appbar/search'

const Search = {
  async render () {
    return `
        <section class="content">
            <div class="resto_list">
                <h1 class="explore_resto">Find Some Restaurant</h1>
                <div class="resto-list" aria-label="Restaurants Item"></div>
            </div>
        </section>`
  },

  async afterRender () {
    const restoContainer = document.querySelector('.resto-list')

    const searchResult = result => {
      restoContainer.value = result
    }

    const searchInput = document.querySelector('search-box')
    const searchValue = searchInput.value

    const searchBtn = document.querySelector('search-box')
    const searchBtnClick = searchBtn.clickEvent

    SearchInit.init({
      search: searchValue,
      result: searchResult,
      btn: searchBtnClick
    })
  }
}

export default Search
