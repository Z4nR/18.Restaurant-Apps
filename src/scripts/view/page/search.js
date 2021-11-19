import DataSource from '../../data/data-source'
import '../component/search/search'
import '../component/search/search-list'

const Search = {
  async render () {
    return `
        <section class="content content-find">
            <div class="resto_list">
                <h1 class="explore_resto">Find Some Restaurant</h1>
                <search-box aria-label="Search Resto name Box"></search-box>
                <search-list aria-label="Restaurants Item"></search-list>
            </div>
        </section>`
  },

  async afterRender () {
    const searchInput = document.querySelector('search-box')
    const restoContainer = document.querySelector('search-list')

    const searchResult = result => {
      restoContainer.searchResto = result
    }

    const onButtonSearchClicked = async () => {
      const result = await DataSource.getSearchData(searchInput.value)
      searchResult(result)
    }

    searchInput.clickEvent = onButtonSearchClicked
  }
}

export default Search
