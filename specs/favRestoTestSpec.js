import FavoriteRestoIdb from '../src/scripts/data/favdatabase'
import testFactories from './helper/presenterFactory'

const initLike = () => {
  document.body.innerHTML = '<div class="like-box"></div>'
}

describe('Liking A Resto', () => {
  beforeEach(() => {
    initLike()
  })

  it('should display like button when a restaurant hasnt been liked before', async () => {
    await testFactories.createLikeBtnElement({ id: 1 })
    expect(
      document.querySelector('[aria-label="add restaurant to favorite"]')
    ).toBeTruthy()
  })

  it('should display unlike button when a restaurant has been liked before', async () => {
    await testFactories.createLikeBtnElement({ id: 1 })
    expect(
      document.querySelector('[aria-label="remove restaurant from favorite"]')
    ).toBeFalsy()
  })

  it('should be able to like the resto', async () => {
    await testFactories.createLikeBtnElement({ id: 1 })
    document.querySelector('like-btn').dispatchEvent(new Event('click'))
    const resto = await FavoriteRestoIdb.getResto(1)
    expect(resto).toEqual({ id: 1 })
    FavoriteRestoIdb.deleteResto(1)
  })

  it('should not add a resto again when its already liked', async () => {
    await testFactories.createLikeBtnElement({ id: 1 })
    await FavoriteRestoIdb.putResto({ id: 1 })
    document.querySelector('like-btn').dispatchEvent(new Event('click'))
    expect(await FavoriteRestoIdb.getAllResto()).toEqual([{ id: 1 }])
    FavoriteRestoIdb.deleteResto(1)
  })

  it('should not add a resto when it has no id', async () => {
    await testFactories.createLikeBtnElement({})
    document.querySelector('like-btn').dispatchEvent(new Event('click'))
    console.log(document.querySelector('like-btn'))
    expect(await FavoriteRestoIdb.getAllResto()).toEqual([])
  })
})

describe('Unliking A Resto', () => {
  beforeEach(async () => {
    initLike()
    await FavoriteRestoIdb.putResto({ id: 1 })
  })

  afterEach(async () => {
    await FavoriteRestoIdb.deleteResto(1)
  })

  it('should display unlike button when a restaurant has been liked before', async () => {
    await testFactories.createLikeBtnElement({ id: 1 })
    expect(
      document.querySelector('[aria-label="remove restaurant from favorite"]')
    ).toBeTruthy()
  })

  it('should display like button when a restaurant hasnt been liked before', async () => {
    await testFactories.createLikeBtnElement({ id: 1 })
    expect(document.querySelector('[aria-label="add restaurant to favorite"]'))
      .toBeFalsy()
  })

  it('should be able to unlike the resto from list', async () => {
    await testFactories.createLikeBtnElement({ id: 1 })
    document.querySelector('[aria-label="remove restaurant from favorite"]').dispatchEvent(new Event('click'))
    expect(await FavoriteRestoIdb.getAllResto()).toEqual([])
  })

  it('should not throw error if the unliked resto is not in the list', async () => {
    await testFactories.createLikeBtnElement({ id: 1 })
    await FavoriteRestoIdb.deleteResto(1)
    document.querySelector('[aria-label="remove restaurant from favorite"]').dispatchEvent(new Event('click'))
    expect(await FavoriteRestoIdb.getAllResto()).toEqual([])
  })
})
