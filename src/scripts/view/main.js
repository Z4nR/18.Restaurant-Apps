import '../component/resto-list'
import '../component/search'
import DataSource from '../data/data-source'

const main = () => {
  const restoList = document.querySelector('resto-list')
  const searchCafe = document.querySelector('search-box')

  const renderResult = ({ result }) => {
    restoList.restaurants = result
  }

  const fallbackResult = message => {
    restoList.renderError(message)
  }

  const onButtonSearchClicked = async () => {
    try {
      const result = DataSource.getSearchData(searchCafe.value)
      renderResult({ restaurants: { restaurant: result } })
    } catch (message) {
      fallbackResult(message)
    }
  }

  searchCafe.clickEvent = onButtonSearchClicked

  restoList.restaurants = DataSource.getRestoData()
}

export default main
