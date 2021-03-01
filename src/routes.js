import Home from './pages/Home.svelte'
import Tools from './pages/Tools.svelte'
import Gallery from './pages/Gallery.svelte'
import Stage from './pages/Stage.svelte'
import NotFound from './pages/NotFound.svelte'

const routes = {
  '/': Home,
  '/tools': Tools,
  '/gallery': Gallery,
  '/stage': Stage,
  '*': NotFound
}

export default routes
