const assert = require('assert')

Feature('Liking Resto')

Scenario('liking one resto', async (I) => {
  I.amOnPage('/')
  I.seeElement('resto-item')

  const resto = locate('.resto-name > a').first()
  const restoTitle = await I.grabTextFrom(resto)
  I.click(resto)

  I.seeElement('#like')
  I.click('#like')

  I.amOnPage('/#/fav')
  I.seeElement('resto-item')

  const likeFirstRestoTitle = await I.grabTextFrom('.resto-name')

  assert.strictEqual(restoTitle, likeFirstRestoTitle)
})

Scenario('disliking one resto', async (I) => {
  I.amOnPage('/')
  I.seeElement('resto-item')
  const restoName = locate('.resto-name > a').first()
  I.click(restoName)
  I.seeElement('#like')
  I.click('#like')

  I.amOnPage('/')
  const favPage = locate('[aria-label="Favorite"]')
  I.seeElement(favPage)
  I.click(favPage)

  const likedResto = locate('.resto-name > a').first()
  I.click(likedResto)
  I.seeElement('#like')
  I.click('#like')

  I.amOnPage('/#/fav')
  I.dontSeeElement('resto-item')
})
