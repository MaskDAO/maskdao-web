import Home from './pages/Home.svelte'
import Tools from './pages/Tools.svelte'
import NotFound from './pages/NotFound.svelte'

const routes = {
  '/': Home,
  '/tools': Tools,
  '*': NotFound
}

export default routes
