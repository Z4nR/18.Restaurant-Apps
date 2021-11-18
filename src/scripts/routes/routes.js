import Detail from '../view/page/detail'
import Fav from '../view/page/favorite'
import Home from '../view/page/home'
import Search from '../view/page/search'

const routes = {
  '/': Home,
  '/home': Home,
  '/detail/:id': Detail,
  '/fav': Fav,
  '/search': Search
}

export default routes
