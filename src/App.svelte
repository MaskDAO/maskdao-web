<div class="app">
  <Router {routes} />
</div>

<script>
  import Router from "svelte-spa-router"
  import routes from "./routes.js"
</script>

<style>
  :global(body.dark) {
    background: radial-gradient(circle at center top, rgb(45, 32, 36), rgb(31, 20, 24)) 0% 0% / cover fixed;
    color: rgb(255, 255, 255);
  }
</style>