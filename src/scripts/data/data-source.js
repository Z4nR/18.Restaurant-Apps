import data from '../../DATA.json'

class DataSource {
  static getRestoData () {
    return data
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
