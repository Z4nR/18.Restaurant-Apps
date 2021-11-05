class SearchBar extends HTMLElement {
  constructor () {
    super()
    this.shadowDOM = this.attachShadow({ mode: 'open' })
  }

  set clickEvent (event) {
    this._clickEvent = event
    this.render()
  }

  get value () {
    return this.shadowDOM.querySelector('#searchElement').value
  }

  render () {
    this.shadowDOM.innerHTML = `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Hind+Madurai:wght@500&family=Rubik:wght@300&display=swap');
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
          width: 75%;
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
          color: #247291;
          border-radius: 3px;
          border: 0;
        }

        @media screen and (min-width: 520px) {
          .search {
            border : 1px solid #f8da5b;
            border-radius: 5px;
          }
        }
      </style>
      <div class="search">
        <input placeholder="Search Resto Name" id="searchElement" type="search">
        <button id="searchButtonElement" type="submit">Search</button>
      </div>`
    this.shadowDOM.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent)
  }
}

customElements.define('search-box', SearchBar)
