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
    <section class="section stage">
      <div class="wrapper">
        <div class="subtitle">
          <h1>Stage</h1>
          <a class="see-all" href="/stage" use:link>See All ({pool.length})</a>
        </div>
        {#each selectedPools as pool, i}
          <Pool
            ticker={pool.ticker}
            name={pool.name}
            state={pool.state}
            apy={pool.apy}
            liquidity={pool.liquidity}
          />
        {/each}
      </div>
    </section>
    <section class="section gallery">
      <div class="wrapper">
        <div class="subtitle">
          <h1>Gallery</h1>
          <a class="see-all" href="/gallery" use:link>See All ({galleryCount})</a>
        </div>
        {#each selectedCollections as id, i}
          <Collection
            title={galleryDetail[id].name}
            description={gallery[id].length}
            masks={gallery[id].slice(0, 4)}
          />
        {/each}
      </div>
    </section>
  </div>
  <Footer />
</div>

<script>
  import Nav from "../components/Nav.svelte"
  import MobileMenu from "../components/MobileMenu.svelte"
  import Footer from "../components/Footer.svelte"
  import Collection from "../components/Collection.svelte"
  import Pool from "../components/Pool.svelte"
  import { gallery, galleryDetail, pool } from "../store.js"
  import { link } from "svelte-spa-router"

  let open = false
  let galleryCount = Object.keys(gallery).length

  const showNav = function(event) {
    open = event.detail.open
  }

  let nums = new Set()
  while(nums.size !== 3) {
    nums.add(Math.floor(Math.random() * galleryCount))
  }
  const selectedCollections = [...nums].slice(0, 3).map(n => Object.keys(gallery)[n])

  const selectedPools = pool.slice(0, 3)
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

  section {
    box-sizing: border-box;
    margin: 0px auto;
    max-width: 800px;
    padding: 0px 24px;
    width: 100%;
  }

  .coming-soon {
    color: rgb(228 201 155);
    font-size: 70px;
    font-weight: 800;
    margin: 0px;
    padding: 0px;
    text-align: center;
  }

  .hero-icon {
    text-align: center;
  }

  .hero-icon img {
    height: 96px;
    animation: float 4s ease-in-out infinite;
  }

  @keyframes float {
    0% {
      transform: translatey(0px);
    }
    50% {
      transform: translatey(-12px);
    }
    100% {
      transform: translatey(0px);
    }
  }

  .section {
    max-width: none;
    padding: 2rem;
  }

  .section.gallery {
    background: #e7f5f8;
  }

  body.dark .main .section.gallery {
    background: #424242;
  }

  .wrapper {
    max-width: 800px;
    margin: 0 auto;
  }

  .subtitle {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }

  a.see-all {
    color: inherit;
    text-decoration: underline;
  }
</style>
