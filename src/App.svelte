<div class="app">
  <Router {routes} />
  {#if $modal === "unlockWallet"}
  	<UnlockWalletModal></UnlockWalletModal>
  {/if}
</div>

<script>
  import Router from "svelte-spa-router"
  import routes from "./routes.js"
  import { modal } from "./store.js"
  import UnlockWalletModal from "./components/UnlockWalletModal.svelte"
</script>

<style>
  :global(body.dark) {
    background: #2b2b2b;
    color: #fff;
  }
</style>