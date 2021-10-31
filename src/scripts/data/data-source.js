const restaurants = require('../../DATA.json')

class DataSource {
  static getRestoData () {
    return restaurants
  }
}

export default DataSource
