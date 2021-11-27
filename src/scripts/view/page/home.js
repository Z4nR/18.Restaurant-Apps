import DataSource from '../../data/data-source'

const Home = {
  async render () {
    return `
        <section class="hero">
            <div class="hero_inner">
                <h1 class="hero_title">
                    Lapar? Haus?
                </h1>
                <p class="hero_tag">
                    Yuk cari tau tempat jajan yang enak dan asik buat kamu sendiri, bareng doi, atau rame-rame
                </p>
            </div>
        </section>
        <div class="main-container">
        <section class="content">
            <div class="resto_list">
                <h1 class="explore_resto">Explore The Restaurant</h1>
                <div class="resto-list" aria-label="Restaurants List Item"></div>
            </div>
        </section>
        <section class="about-us" id="about-us">
            <div class="about">
                <h1 class="about-us-teks">About Us</h1>
                <div class="about-content">
                    <figure class="about_us_figure">
                        <img src="../public/images/heros/hero-image_1.jpg" alt="Chef Image">
                        <figcaption>Info : Chef made delicious food</figcaption>
                    </figure>
                    <div class="about_us_content">
                        <div class="about_us_description">Love to explore a nice, fun and definitely unique place to eat? But confused where? Fully Belly Catalog Solution. Fully
                            Belly has the meaning of a full stomach which represents that this website recommends places to eat that make you
                            satisfied to eat there. Fully Belly is an online catalog website that lists places to eat that you have never met before. Let's explore unique
                            places and save them in favorites, for you to come to next time. Happy Belly, Happy People
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
        `
  },

  async afterRender () {
    const restaurants = await DataSource.getRestoData()
    const restoContainer = document.querySelector('.resto-list')
    restaurants.forEach((restaurant) => {
      const restoItems = document.createElement('resto-item')
      restoItems.content = restaurant
      restoContainer.appendChild(restoItems)
    })
  }
}

export default Home
