import DataSource from '../data/data-source'

const SearchInit = {
  async init ({ search, result }) {
    this._search = search
    this._result = result

    await this._searchProcess()
  },

  async _searchProcess () {
    const result = await DataSource.getSearchData(this._search.value)
    this._result = result
  }
}

export default SearchInit
