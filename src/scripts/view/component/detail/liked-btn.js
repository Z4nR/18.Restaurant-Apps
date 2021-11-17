class LikedBtn extends HTMLElement {
  set like (liked) {
    this._like = liked
    this.render()
  }

  get like () {
    return this._like
  }

  render () {
    const like = this._like
    const aria = !like ? 'add restaurant to favorite' : 'remove restaurant from favorite'

    this.innerHTML = `
        <button aria-label="${aria}" id="like" class="like">
            <i class="fa ${like ? 'fa-heart' : 'fa-heart-o'}" aria-hidden="true"></i>
        </button>`
  }
}

customElements.define('like-btn', LikedBtn)
