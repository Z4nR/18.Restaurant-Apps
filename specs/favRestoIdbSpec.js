import { itActsAsFavoriteRestoModel } from './contract/favRestoContract'
import FavoriteRestoIdb from '../src/scripts/data/favdatabase'

describe('Favorite Resto Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestoIdb.getAllResto()).forEach(async (resto) => {
      await FavoriteRestoIdb.deleteResto(resto.id)
    })
  })

  itActsAsFavoriteRestoModel(FavoriteRestoIdb)
})
