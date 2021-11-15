import Detail from '../view/page/detail'
import Fav from '../view/page/favorite'
import Home from '../view/page/home'

const routes = {
  '/': Home,
  '/home': Home,
  '/detail/:id': Detail,
  '/fav': Fav
}

export default routes
