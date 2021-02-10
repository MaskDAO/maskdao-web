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
      <div class="hero-icon">
        <img src="/maskdao-logo-stub.png" />
      </div>
      <div class="coming-soon">
        Coming Soon
      </div>
    </section>
    <section>
      <h1>
        Intro
      </h1>
      <p>
        MaskDAO is a community led Decentralized Autonomous Organization (DAO) built off of <a href="https://www.thehashmasks.com/" target="_blank">Hashmask</a> NFTs. The DAO focuses on building an artist marketplace, new NFT release curation, and community tools.
      </p>
      <p>
        In order to launch MaskDAO, there will be a MSK governance token distribution event. Distribution will be rewarded to Hashmask owners and can be earned through liquidity mining programs.
      </p>
    </section>
  </div>
  <Footer />
</div>

<script>
  import Nav from "../components/Nav.svelte"
  import MobileMenu from "../components/MobileMenu.svelte"
  import Footer from "../components/Footer.svelte"

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

  section {
    box-sizing: border-box;
    margin: 0px auto;
    max-width: 800px;
    padding: 0px 24px;
    width: 100%;
  }

  .coming-soon {
    color: rgb(222 197 150);;
    font-size: 80px;
    font-weight: 900;
    margin: 0px;
    padding: 0px;
    text-align: center;
  }

  .hero-icon {
    text-align: center;
  }

  .hero-icon img {
    height: 96px;
  }
</style>
