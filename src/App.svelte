<div class="app">
  <Router {routes} />
</div>

<script>
  import Router from "svelte-spa-router"
  import routes from "./routes.js"
</script>

<style>
  :global(body.dark) {
    background: radial-gradient(circle at center top, rgb(74 74 74), rgb(35 32 24)) 0% 0% / cover fixed;
    color: rgb(255, 255, 255);
  }
</style>