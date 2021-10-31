import '../scripts/component/resto-list'
import DataSource from '../scripts/data/data-source'

const main = () => {
  const restoList = document.querySelector('resto')

  restoList.restaurants = DataSource.getRestoData()
}

export default main
