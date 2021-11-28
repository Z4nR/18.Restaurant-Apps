class AppBar extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
        <div class="header_inner">
            <h1 class="header_title">
                Fully Belly Catalog
            </h1>
        </div>

        <div class="hamburger-container">
            <button aria-label="Hamburger Anchor" id="menu" class="header_menu">☰</button>
        </div>

        <nav id="drawer" class="nav">
             <ul class="nav_list">
                <li class="nav_item" aria-label="Home"><a href="#/home">Home</a></li>
                <li class="nav_item" aria-label="Favorite"><a href="#/fav">Favorite</a></li>
                <li class="nav_item" aria-label="Search"><a href="#/search">Search</a></li>
                <li class="nav_item" aria-label="About Us"><a href="https://www.instagram.com/_zul_zulham_/">About Us</a></li>
            </ul>
        </nav>`
  }
}

customElements.define('header-container', AppBar)
