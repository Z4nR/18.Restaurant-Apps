import SearchInit from '../../utils/search-init'
import '../component/search-list'

const Search = {
  async render () {
    return `
        <section class="content">
            <div class="resto_list">
                <h1 class="explore_resto">Find Some Restaurant</h1>
                <search-list></search-list>
            </div>
        </section>`
  },

  async afterRender () {
    const restoContainer = document.querySelector('.search-list')

    const searchResult = result => {
      restoContainer.value = result
    }

    SearchInit.init({
      result: searchResult
    })
  }
}

export default Search
