import '../component/resto-list'
import DataSource from '../data/data-source'

const main = () => {
  const restoList = document.querySelector('resto')

  restoList.restaurants = DataSource.getRestoData()
}

export default main
