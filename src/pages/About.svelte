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
    <h1>About</h1>
    <p>
      Welcome to The Great Online Game, Player One. You’ve made it down the MaskDAO rabbit hole this far so maybe you’re an infinite gamer. Here’s a checklist to see if you are and fit well with MaskDAO’s Whys:
    </p>
  	<ul>
  		<li>Your strength resides within not from trying to dominate for a sense of power</li>
      <li>You genuinely have fun learning new things, helping and meeting new people</li>
      <li>You’re willing to break rules (not the law) and test boundaries</li>
    </ul>
    <a href="https://maskdao.medium.com/maskdao-for-real-now-a9e62e9b8a90" target="_blank">Read More</a>
  </div>
  <Footer />
</div>

<script>
  import Nav from "../components/Nav.svelte"
  import MobileMenu from "../components/MobileMenu.svelte"
  import Footer from "../components/Footer.svelte"
  import { link } from "svelte-spa-router"

  let open = false

  let msk = "https://etherscan.io/token/0xfdd7399e22918ba7234f5568cc2ef922489f7ba6"

  let msk_rinkeby = "https://rinkeby.etherscan.io/token/0xfdd7399e22918ba7234f5568cc2ef922489f7ba6"

  const showNav = function(event) {
    open = event.detail.open
  }
</script>

<style>
  .main {
    text-align: left;
    min-height: calc(100vh - 160px);
    padding: 48px;
    max-width: 1024px;
    margin: 0 auto;
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
