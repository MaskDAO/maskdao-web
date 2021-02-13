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
    background: radial-gradient(circle at center top, rgb(74 74 74), rgb(35 32 24)) 0% 0% / cover fixed;
    color: rgb(255, 255, 255);
  }
</style>