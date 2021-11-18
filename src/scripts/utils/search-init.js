import DataSource from '../data/data-source'
import '../view/component/appbar/search'

const searchBox = document.querySelector('search-box')

const SearchInit = {
  async init ({ result }) {
    this._result = result

    await this._searchContainer()
  },

  async _searchProcess () {
    const result = await DataSource.getSearchData(searchBox.value)
    this._result(result.restaurant)
  },

  async _searchContainer () {
    searchBox.clickEvent = this._searchProcess
  }
}

export default SearchInit
