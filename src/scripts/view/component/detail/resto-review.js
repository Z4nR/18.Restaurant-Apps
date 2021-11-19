class RestoReview extends HTMLElement {
  set reviewer (reviewer) {
    this._reviewer = reviewer
    this.render()
  }

  render () {
    const reviews = this._reviewer
    let restoReview = ''
    reviews.forEach((review) => {
      restoReview += `
        <div class="review">
          <p class="date">${review.date}</p>
          <p class="name">${review.name}</p>
          <p>${review.review}</p>
        </div>
      `
    })
    this.innerHTML = `
      <style>
        .resto-review-box {
            margin: 15px 0 auto;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            width: 100%;
            border-radius: 5px;
            padding: 16px;
        }
        h1 {
            text-align: center;
            font-weight: 400;
            margin-bottom: 10px;
        }
        .review {
            margin-bottom: 10px;
            border-bottom: 1px solid #E0E0E0;
        }
        .name {
            font-size: 15px;
            font-weight: 300;
        }
        .date {
            font-size: 10px;
            font-weight: 500;
            margin-bottom: 5px;
        }
      </style>
      <div class="resto-review-box">
        <h1>Customer Reviews</h1>
        ${restoReview}
      </div>
    `
  }
}

customElements.define('resto-review', RestoReview)
