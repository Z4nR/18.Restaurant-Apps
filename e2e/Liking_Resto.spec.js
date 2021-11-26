const assert = require('assert')

Feature('Liking Resto')

Scenario('liking one resto', async (I) => {
  I.amOnPage('/')
  I.seeElement('resto-item')

  const resto = locate('.resto-name').first()
  const restoTitle = await I.grabTextFrom('.resto-name')
  I.click(resto)

  I.seeElement('like-btn')
  I.click('like-btn')

  I.amOnPage('/#/fav')
  I.seeElement('resto-item')

  const likeFirstRestoTitle = await I.grabTextFrom('.resto-name')

  assert.strictEqual(restoTitle, likeFirstRestoTitle)
})

Scenario('disliking one resto', async (I) => {
  I.amOnPage('/')
  I.seeElement('resto-item')
  const restoName = locate('.resto-name').first()
  I.click(restoName)
  I.seeElement('like-btn')
  I.click('like-btn')

  I.amOnPage('/')
  const favPage = locate('[aria-label="Favorite"]')
  I.seeElement(favPage)
  I.click(favPage)

  const likedResto = locate('.resto-name').first()
  I.click(likedResto)
  I.seeElement('like-btn')
  I.click('like-btn')

  I.amOnPage('/#/fav')
  I.dontSeeElement('resto-item')
})
