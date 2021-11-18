class SearchBar extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  set clickEvent (event) {
    this._clickEvent = event
    this.render()
  }

  get value () {
    return this.querySelector('#searchElement').value
  }

  render () {
    this.innerHTML = `
      <style>
        :host {
          display: block;
          width: auto;
          margin: 0 5px 0 0;
          padding: 4px;
        }
        .search {
          margin: 0 auto;
          justify-items: center;
          padding: 6px;
          display: flex;
        }
        .search > input {
          min-height: 44px;
          min-width: 44px;
          width: 60%;
          padding: 4px;
          border: 0;
          border-bottom: 1px solid #f8da5b;
        }
        .search > input:focus {
          outline: 0;
          border-bottom: 2px solid #247291;
        }
        .search > input::placeholder {
          color: #247291;
          font-weight: normal;
        }
        .search > button {
          min-height: 44px;
          min-width: 44px;
          width: auto;
          cursor: pointer;
          margin-left: auto;
          padding: 4px;
          background-color: #f8da5b;
          border: 0;
        }
        .search a {
          color: #247291;
          text-decoration: none;
          text-align: center;
        }

        @media screen and (min-width: 520px) {
          .search {
            border : 1px solid #f8da5b;
            border-radius: 5px;
          }
        }
      </style>
      <div class="search">
        <input aria-label="Search Form" placeholder="Search Resto Name" id="searchElement" type="search">
        <button aria-label="Search Button" id="searchButtonElement" type="submit"><a href="#/search">Search</a></button>
      </div>`
    this.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent)
  }
}

customElements.define('search-box', SearchBar)
