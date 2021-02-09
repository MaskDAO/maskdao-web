<div class="mobile-menu-wrapper">
  <div class="backdrop" on:click={() => showNav(false)}></div>
  <div class="mobile-menu">
    <a class="nav-item" href="/">Home</a>
    <a class="nav-item" href="https://discord.gg/8c73c3zR" target="_blank">Forum</a>
    <a href="https://docs.google.com/document/d/1G8Mzg5rSTQi27hHbNR4T2fJtvmO9MhhKSad7tjJWIW8/edit" target="_blank" class="nav-item">About</a>
  </div>
</div>

<script>
  export let navOpen = false

  import { createEventDispatcher } from "svelte"

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
    color: rgb(141, 124, 130);
    font-size: 24px;
    font-weight: 700;
    padding: 1rem 2rem;
    text-align: center;
    text-decoration: none;
    width: 100%;
  }

  .nav-item:hover {
    color: rgb(104, 85, 92);
  }
</style>