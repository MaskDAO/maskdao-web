<div class="mobile-menu-wrapper">
  <div class="backdrop" on:click={() => showNav(false)}></div>
  <div class="mobile-menu">
    <a class="nav-item" href="/" use:link>Home</a>
    <a class="nav-item" href="/about" use:link>About</a>
    <a class="nav-item" href="/museum" use:link>The Museum</a>
  </div>
</div>

<script>
  export let navOpen = false

  import { createEventDispatcher } from "svelte"
  import { link } from "svelte-spa-router"

  const dispatch = createEventDispatcher()

  function showNav(openOrNot) {
    dispatch("message", {
      open: openOrNot
    })
  }
</script>

<style>
  .mobile-menu-wrapper {
  	display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1000;
  }

  .backdrop {
    background-color: #000;
    opacity: 0.75;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .mobile-menu {
    animation: slideIn 0.3s forwards ease-out;
    background: #fff8ec;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 100%;
    bottom: 0;
    width: calc(100% - 48px);
  }

  @keyframes slideIn {
    0% {
      transform: translateX(0)
    }
    100% {
      transform: translateX(-100%);
    }
  }

  .nav-item {
    box-sizing: border-box;
    color: #666;
    font-size: 24px;
    font-weight: 700;
    padding: 1rem 2rem;
    text-align: center;
    text-decoration: none;
    width: 100%;
  }

  .nav-item:hover {
    color: #000;
  }
</style>