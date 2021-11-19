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
          max-width: 800px;
          margin: 0 auto;
          justify-items: center;
          padding: 6px;
          display: flex;
          border : 1px solid #247291;
          border-radius: 5px;
        }
        .search > input {
          min-height: 44px;
          min-width: 44px;
          width: 75%;
          padding: 4px;
          border: 0;
          border-bottom: 1px solid #f8da5b;
        }
        .search > input:focus {
          outline: 0;
          font-size: 15px;
          border-bottom: 2px solid #247291;
        }
        .search > input::placeholder {
          color: #247291;
          font-weight: normal;
          font-size: 15px;
        }
        .search > button {
          min-height: 44px;
          min-width: 44px;
          width: 24%;
          cursor: pointer;
          margin-left: auto;
          padding: 5px;
          background-color: #f8da5b;
          color: #247291;
          border: 0;
        }

        @media screen and (max-width: 850px) {
          :host {
            width: 100%;
          }
          .search {
            flex-direction: column;
          }
          .search > input {
            width: 100%;
            margin-bottom: 12px;
          }
          .search > button {
            width: 100%;
          }
        }
      </style>
      <div class="search">
        <input aria-label="Search Form" placeholder="Search Resto Name" id="searchElement" type="search">
        <button aria-label="Search Button" id="searchButtonElement" type="submit">Search</button>
      </div>`
    this.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent)
  }
}

customElements.define('search-box', SearchBar)
