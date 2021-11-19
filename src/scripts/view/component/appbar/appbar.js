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

        <nav id="drawer" class="nav">
             <ul class="nav_list">
                <li class="nav_item"><a href="#/home">Home</a></li>
                <li class="nav_item"><a href="#/fav">Favorite</a></li>
                <li class="nav_item"><a href="#/search">Search</a></li>
                <li class="nav_item"><a href="https://www.instagram.com/_zul_zulham_/">About Us</a></li>
            </ul>
        </nav>

        <div class="hamburger-container">
            <div aria-label="Hamburger Anchor" id="menu" class="header_menu">☰</div>
        </div>`
  }
}

customElements.define('header-container', AppBar)
