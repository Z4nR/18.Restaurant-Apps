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
    <style>
      .menu {
        margin: 15px 0 auto;
        display: flex;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        width: 100%;
        border-radius: 5px;
        padding: 16px;
      }
      .foods, .drinks {
        flex-direction: column;
        display: flex;
        flex-grow: 1;
      }
      h1 {
        text-align: center;
        font-weight: 400;
      }
      .list {
        padding-top: 5px;
        padding-bottom: 10px;
        list-style-type: none;
        font-size: 15px;
        font-weight: lighter;
        text-align: center;
      }

      @media screen and (max-width: 499px) {
        .menu {
          flex-direction: column;
        }
        .drinks {
          margin-top: 15px;
        }
      }
    </style>
    <div class="menu">
      <div class="foods">
        <h1>Foods</h1>
        <ul class="list">${_foods}</ul>
      </div>
      <div class="drinks">
        <h1>Drinks</h1>
        <ul class="list">${_drinks}</ul>
      </div>
    </div>
    `
  }
}

customElements.define('resto-menu', RestoMenu)
