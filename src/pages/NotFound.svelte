<div>
  <div class="main">
    <section>
      <div class="hero-icon">
        <img src="/logo.svg" />
      </div>
      <div class="coming-soon">
        Not Found
      </div>
      <div class="center">
      	<a href="/">Go Home</a>
      </div>
    </section>
  </div>
  <Footer />
</div>

<script>
  import Footer from "../components/Footer.svelte"
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
