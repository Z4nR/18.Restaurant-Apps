import API_ENDPOINT from '../globals/api-endpoint'

class DataSource {
  static async getRestoData () {
    const response = await fetch(API_ENDPOINT.RESTAURANTS)
    const { restaurants } = await response.json()
    return restaurants
  }

  static async getRestoDetail (id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id))
    return response.json()
  }

  static async getSearchData (name) {
    const response = await fetch(API_ENDPOINT.SEARCH(name))
    const { restaurants } = await response.json()
    return restaurants
  }
}

export default DataSource
