import DataSource from '../../data/data-source'

const Fav = {
  async render () {
    return `
        <section class="content">
            <div class="resto_list">
                <h1 class="explore_resto">My Favorite Restaurant</h1>
                <div class="resto-list" aria-label="Restaurants Item"></div>
            </div>
        </section>`
  },

  async afterRenderr () {
    const restaurants = await DataSource.getRestoData()
    const restoContainer = document.querySelector('.resto-list')
    restaurants.forEach((restaurants) => {
      const restoItems = document.createElement('resto-item')
      restoItems.content = restaurants
      restoContainer.appendChild(restoItems)
    })
  }
}

export default Fav
