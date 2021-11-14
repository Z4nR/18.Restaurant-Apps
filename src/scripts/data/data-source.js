import API_ENDPOINT from '../globals/api-endpoint'

class DataSource {
  static async getRestoData () {
    const response = await fetch(API_ENDPOINT.RESTAURANTS)
    const { restaurants } = await response.json()
    return restaurants
  }

  static getSearchData (keyword) {
    return new Promise((resolve, reject) => {
      const filterCafe = data.restaurants.filter(function (resto) {
        return resto.name.toUpperCase().includes(keyword.toUpperCase())
      })

      if (filterCafe.length) {
        resolve(filterCafe)
      } else {
        reject(keyword + 'is not found')
      }
    })
  }
}

export default DataSource
