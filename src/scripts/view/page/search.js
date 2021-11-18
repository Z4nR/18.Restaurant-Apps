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
    const restoItems = document.createElement('resto-item')

    const searchResult = result => {
      restoItems.value = result
    }

    const searchBox = document.querySelector('search-box')
    SearchInit.init({
      search: searchBox,
      result: searchResult
    })
  }
}

export default Search
