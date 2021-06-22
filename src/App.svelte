<div class="app">
  <Router {routes} />
</div>

<script>
  import Router from "svelte-spa-router"
  import routes from "./routes.js"
</script>

<style>
  :global(body.dark) {
    background: #2b2b2b;
    color: #fff;
  }
</style>