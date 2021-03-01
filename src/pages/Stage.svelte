<div>
  <Nav
  {open}
  on:message={showNav}/>
  {#if open}
    <MobileMenu
    {open}
    on:message={showNav}/>
  {/if}
  <div class="main">
    <section>
      <h2>
        Stage ({ pool.length })
      </h2>
      {#each pool as pool, i}
        <Pool
          ticker={pool.ticker}
          name={pool.name}
          state={pool.state}
          apy={pool.apy}
          liquidity={pool.liquidity}
        />
      {/each}
    </section>
  </div>
  <Footer />
</div>

<script>
  import Nav from "../components/Nav.svelte"
  import MobileMenu from "../components/MobileMenu.svelte"
  import Footer from "../components/Footer.svelte"
  import Pool from "../components/Pool.svelte"
  import { pool } from "../store.js";

  let open = false

  const showNav = function(event) {
    open = event.detail.open
  }
</script>

<style>
  .main {
    align-items: center;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 160px);
    padding: 48px 0px;
  }

  body.dark .app div .main {
    background: #2b2b2b;
  }

  section {
    box-sizing: border-box;
    margin: 0px auto;
    max-width: 800px;
    padding: 0px 24px;
    width: 100%;
  }
</style>
