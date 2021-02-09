<div class="nav-wrapper">
  <div class="nav">
    <a class="brand-wrapper" href="/">
      <div class="brand">
        <span class="icon">
          <img src="/maskdao-logo-stub.png" />
        </span>
        <span class="name">{brand}</span>
      </div>
    </a>
    <div class="nav-list">
      <div class="flex-center">
        <a class="nav-item" href="/">Home</a>
        <a class="nav-item" href="https://discord.gg/8c73c3zR" target="_blank">Forum</a>
        <a href="https://docs.google.com/document/d/1G8Mzg5rSTQi27hHbNR4T2fJtvmO9MhhKSad7tjJWIW8/edit" target="_blank" class="nav-item">About</a>
      </div>
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
  import { brand } from "../store.js";
  import { createEventDispatcher } from "svelte"

  const dispatch = createEventDispatcher()

  function showNav(openOrNot) {
    dispatch("message", {
      open: openOrNot
    })
  }

  function toggle() {
    window.document.body.classList.toggle("dark")
  }
</script>

<style>
  .nav-wrapper {
    box-sizing: border-box;
    margin: 0px auto;
    max-width: 1200px;
    padding: 0px 24px;
    width: 100%;
  }

  .nav {
    -webkit-box-align: center;
    align-items: center;
    display: flex;
    height: 72px;
    -webkit-box-pack: justify;
    justify-content: space-between;
    max-width: 1200px;
    width: 100%;
  }

  .brand-wrapper {
    width: 156px;
  }

  .brand {
    -webkit-box-align: center;
    align-items: center;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    margin: 0px;
    min-height: 44px;
    min-width: 44px;
    padding: 0px;
    text-decoration: none;
  }

  .brand .icon img {
    width: 24px;
  }

  .brand .name {
    color: rgb(20, 1, 8);
    font-size: 18px;
    font-weight: 700;
    margin-left: 8px;
  }

  body.dark .brand .name {
    color: rgb(255, 255, 255);
  }

  @media (max-width: 500px) {
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
  }

  @media (max-width: 500px) {
    .nav-list {
      display: none;
    }
  }

  .flex-center {
    -webkit-box-align: center;
    align-items: center;
    display: flex;
  }

  .nav-list .nav-item {
    color: rgb(141, 124, 130);
    padding-left: 16px;
    padding-right: 16px;
    text-decoration: none;
    font-weight: bold;
  }

  .nav-list .nav-item:hover {
    color: rgb(104, 85, 92);
  }

  .mode-toggle, .mobile-menu-toggle {
    align-items: center;
    display: flex;
    height: 72px;
    width: auto;
    cursor: pointer;
  }

  @media (max-width: 500px) {
    .mode-toggle {
      display: none;
    }
  }

  @media (min-width: 501px) {
    .mobile-menu-toggle {
      display: none;
    }
  }

  .mode-toggle svg, .mobile-menu-toggle svg {
    height: 1.25rem;
    fill: rgb(141, 124, 130);
  }
</style>