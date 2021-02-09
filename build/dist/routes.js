import Home from './pages/Home.svelte.js'
import NotFound from './pages/NotFound.svelte.js'

const routes = {
  '/': Home,
  '*': NotFound
}

export default routes
