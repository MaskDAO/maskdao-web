import Home from './pages/Home.svelte'
import NotFound from './pages/NotFound.svelte'

const routes = {
  '/': Home,
  '*': NotFound
}

export default routes
