import DataSource from '../data/data-source'

const SearchInit = {
  async init ({ search, result, btn }) {
    this._search = search
    console.log(search)
    this._result = result
    console.log(result)
    this._btn = btn
    console.log(btn)

    await this._searchContainer()
  },

  async _searchProcess () {
    const result = await DataSource.getSearchData(this._search)
    console.log(result)
    this._result(result)
  },

  async _searchContainer () {
    this._btn = this._searchProcess
  }
}

export default SearchInit
