<div>
  <div class="main">
    <div class="hero-icon">
      <img src="/logo.svg" />
    </div>
    <div>Taking you to <a href="https://www.maskdao.io/">maskdao.io</a>...</div>
  </div>
  <Footer />
</div>

<script>
  import Nav from "../components/Nav.svelte"
  import Footer from "../components/Footer.svelte"
  import { link } from "svelte-spa-router"

  let open = false

  const showNav = function(event) {
    open = event.detail.open
  }

  window.location.href = 'https://www.maskdao.io'
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

  .button {
    padding: .5rem 1.5rem;
    margin: 1rem;
    background: #eca333;
    border-radius: 28px;
    color: rgb(255, 255, 255);
    cursor: pointer;
    font-size: 1.5rem;
    font-weight: 700;
    white-space: nowrap;
    height: 2.25rem;
    line-height: 2.25rem;
}
</style>
