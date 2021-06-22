import Home from './pages/Home.svelte'
import About from './pages/About.svelte'
import Tools from './pages/Tools.svelte'
import Addresses from './pages/Addresses.svelte'
import NotFound from './pages/NotFound.svelte'

const routes = {
  '/': Home,
  '/about': About,
  '/tools': Tools,
  '/addresses': Addresses,
  '*': NotFound
}

export default routes
