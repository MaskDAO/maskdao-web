<div class="nav-wrapper">
  <div class="nav">
    <a class="brand-wrapper" href="/">
      <div class="brand">
        <span class="icon">
          <img src="/logo.svg" />
        </span>
        <span class="name">{brand}</span>
      </div>
    </a>
    <div class="nav-list">
      <div class="flex-center">
        <a class="nav-item" href="/" use:link>Home</a>
        <a class="nav-item" href="/about" use:link>About</a>
        <a class="nav-item" href="/museum" use:link>The Museum</a>
      </div>
    </div>
    <div class="unlock-wallet">
      {#if unlocked_val}
        <div class="button address">{truncateAddr(account)}</div>
      {:else}
        <div class="button" on:click={() => unlockWallet()}>Connect</div>
      {/if}
    </div>
    <div class="mode-toggle" on:click={toggle}>
      <svg id="Capa_1" enable-background="new 0 0 512.001 512.001" viewBox="0 0 512.001 512.001" xmlns="http://www.w3.org/2000/svg"><g><path d="m406 151.001c8.284 0 15-6.716 15-15 0-24.813 20.187-45 45-45 8.284 0 15-6.716 15-15s-6.716-15-15-15c-24.393 0-45-21.065-45-46 0-8.284-6.716-15-15-15s-15 6.716-15 15c0 24.935-20.607 46-45 46-8.284 0-15 6.716-15 15s6.716 15 15 15c24.813 0 45 20.187 45 45 0 8.284 6.716 15 15 15zm-15.253-75.15c5.784-4.41 10.865-9.568 15.253-15.479 4.387 5.91 9.468 11.069 15.253 15.479-5.781 4.312-10.922 9.437-15.253 15.203-4.331-5.767-9.472-10.891-15.253-15.203z"/><path d="m301 106.001c0-8.284-6.716-15-15-15s-15 6.716-15 15c0 41.355-33.645 75-75 75-8.284 0-15 6.716-15 15s6.716 15 15 15c41.355 0 75 33.645 75 75 0 8.284 6.716 15 15 15s15-6.716 15-15c0-41.355 33.645-75 75-75 8.284 0 15-6.716 15-15s-6.716-15-15-15c-41.355 0-75-33.645-75-75zm-15 125.972c-8.871-14.722-21.25-27.101-35.971-35.972 14.722-8.871 27.1-21.25 35.971-35.972 8.871 14.722 21.25 27.101 35.971 35.972-14.721 8.871-27.1 21.249-35.971 35.972z"/><path d="m256 512.001c128.638 0 238.83-96.522 255.862-221.298.946-6.93-3.022-13.593-9.566-16.063-6.542-2.469-13.924-.09-17.793 5.737-33.016 49.73-91.835 80.624-153.503 80.624-99.252 0-180-80.748-180-180 0-61.668 30.893-120.487 80.624-153.503 5.826-3.868 8.207-11.25 5.737-17.793-2.469-6.543-9.131-10.511-16.063-9.566-124.939 17.055-221.298 127.397-221.298 255.862 0 140.959 115.05 256 256 256zm-87.774-466.347c-29.922 37.658-47.226 85.737-47.226 135.347 0 115.794 94.206 210 210 210 49.61 0 97.688-17.304 135.347-47.226-34.932 81.747-117.091 138.226-210.347 138.226-124.617 0-226-101.383-226-226 0-93.256 56.479-175.415 138.226-210.347z"/></g></svg>
    </div>
    <div class="mobile-menu-toggle" on:click={() => showNav(true)}>
      <svg viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"></path><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>
    </div>
  </div>
</div>

<script>
  import { brand, setModal } from "../store.js";
  import { createEventDispatcher } from "svelte"
  import { link } from "svelte-spa-router"
  import { defaultChainStore, connected, selectedAccount } from "svelte-web3"

  const dispatch = createEventDispatcher()

  $: unlocked_val = $connected
  $: account = $selectedAccount || '0x0000000000000000000000000000000000000000'

  function showNav(openOrNot) {
    dispatch("message", {
      open: openOrNot
    })
  }

  function toggle() {
    window.document.body.classList.toggle("dark")
  }

  function unlockWallet() {
    defaultChainStore.setBrowserProvider()
  }

  const truncateAddr = function(addr) {
    return `0x...${addr.slice(38)}`
  }
</script>

<style>
  .nav-wrapper {
    box-sizing: border-box;
    margin: 0px auto;
    padding: 0px 24px;
    width: 100%;
  }

  .nav {
    align-items: center;
    display: flex;
    height: 72px;
    justify-content: space-between;
    background: #fdf5eb;
    margin: 0 -24px;
    padding: 0px 24px;
  }

  body.dark .nav-wrapper .nav {
    background: #1d1d1d;
  }

  .brand-wrapper {
    width: 156px;
  }

  .brand {
    align-items: center;
    display: flex;
    justify-content: center;
    margin: 0px;
    min-height: 44px;
    min-width: 44px;
    padding: 0px;
    text-decoration: none;
  }

  .brand .icon {
    align-items: center;
    display: flex;
  }

  .brand .icon img {
    height: 25px;
  }

  .brand .name {
    color: rgb(20, 1, 8);
    font-size: 18px;
    font-weight: 700;
    margin-left: 4px;
  }

  body.dark .brand .name {
    color: rgb(255, 255, 255);
  }

  @media (max-width: 660px) {
    .brand {
      width: auto;
      justify-content: flex-start;
    }

    .brand .name {
      display: none;
    }
  }

  .nav-list {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  @media (max-width: 660px) {
    .nav-list {
      display: none;
    }
  }

  @media (max-width: 680px) {
    .nav-list {
      margin-left: 0;
    }
  }

  .flex-center {
    align-items: center;
    display: flex;
  }

  .nav-list .nav-item {
    color: #666;
    padding-left: 16px;
    padding-right: 16px;
    text-decoration: none;
    font-weight: bold;
  }

  body.dark .nav-list .nav-item {
    color: #ccc;
  }

  .nav-list .nav-item::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: #000;
    transition: width .3s;
  }

  body.dark .nav-list .nav-item::after {
    background: #fff;
  }

  .nav-list .nav-item:hover {
    color: #000;
  }

  body.dark .nav-list .nav-item:hover {
    color: #fff;
  }

  .nav-list .nav-item:hover::after {
    width: 100%;
  }

  .unlock-wallet {
    display: flex;
    align-items: center;
  }

  @media (max-width: 660px) {
    .unlock-wallet {
      width: 100%;
      justify-content: flex-end;
    }
  }

  .unlock-wallet .button {
    padding: 0 1rem;
    margin: 0 1rem;
    background: #eca333;
    border-radius: 28px;
    color: rgb(255, 255, 255);
    cursor: pointer;
    font-size: 1rem;
    font-weight: 700;
    white-space: nowrap;
    height: 2.25rem;
    line-height: 2.25rem;
  }

  .unlock-wallet .button.address {
    background: #fff;
    color: #000;
  }

  .mode-toggle, .mobile-menu-toggle {
    align-items: center;
    display: flex;
    height: 72px;
    width: auto;
    cursor: pointer;
  }

  @media (max-width: 660px) {
    .mode-toggle {
      display: none;
    }
  }

  @media (min-width: 661px) {
    .mobile-menu-toggle {
      display: none;
    }
  }

  .mode-toggle svg, .mobile-menu-toggle svg {
    height: 1.25rem;
    fill: rgb(141, 124, 130);
  }
</style>
