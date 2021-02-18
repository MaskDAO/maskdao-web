import Home from './pages/Home.svelte'
import Tools from './pages/Tools.svelte'
import Gallery from './pages/Gallery.svelte'
import NotFound from './pages/NotFound.svelte'

const routes = {
  '/': Home,
  '/tools': Tools,
  '/gallery': Gallery,
  '*': NotFound
}

export default routes
