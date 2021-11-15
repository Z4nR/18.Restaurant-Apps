class RestoMenu extends HTMLElement {
  set menu (menu) {
    this._menu = menu
    this.render()
  }

  render () {
    const { foods, drinks } = this._menu
    let _foods = ''
    let _drinks = ''

    foods.forEach((food) => _foods += `<li>${food.name}</li>`)
    drinks.forEach((drink) => _drinks += `<li>${drink.name}</li>`)

    this.innerHTML = `
    <div class="foods">
      <h1>Foods</h1>
        <ul>
          ${_foods}
        </ul>
    </div>
    <div class="drinks">
      <h1>Drinks</h1>
        <ul>
          ${_drinks}
        </ul>
    </div>`
  }
}

customElements.define('resto-menu', RestoMenu)
