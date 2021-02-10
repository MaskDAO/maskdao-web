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
      <h1>
        Tools
      </h1>
      <p>
        MaskDAO's funding to future projects/tools are not exclusive to Hashmask, but includes the entire NFT ecosystem.
      </p>
      <p>
      	ALL these tools are non-official Hashmask tools or data. They have been built by our community who would like to provide a perspective on the data, rankings, rarity and more. The MaskDAO is not responsible for the accuracy for any of the content presented on these links.
      </p>
    </section>
    <section>
      {#each toolsList as list, i}
        <div class="row">
          {#each list as tool, j}
            <div class="col">
              <div class="tool">
                <a class="preview" href={tool.link} target="_blank">
                  <img src={"/tools/"+tool.image} />
                </a>
                <a class="title" href={tool.link} target="_blank">
                  {tool.title}
                </a>
                <div class="description">
                  {tool.description}
                </div>
              </div>
            </div>
            {#if j < list.length - 1}
              <div class="sep"></div>
            {/if}
          {/each}
        </div>
      {/each}
    </section>
  </div>
  <Footer />
</div>

<script>
  import Nav from "../components/Nav.svelte"
  import MobileMenu from "../components/MobileMenu.svelte"
  import Footer from "../components/Footer.svelte"

  let open = false

  let toolsList = [
    [
      {
        title: "The Hashnames",
        description: "Search, Rankings, Trait Sort, My Collection, Visuals",
        image: "thehashnames.png",
        link: "https://thehashnames.com"
      },
      {
        title: "Maskinson",
        description: "Search, Rankings, My Collection, Visuals",
        image: "maskinson.png",
        link: "https://maskinson.netlify.app"
      },
      {
        title: "Maskswap",
        description: "Swap/Sell Hashmask names",
        image: "maskswap.png",
        link: "https://maskswap.xyz"
      }
    ],
    [
      {
        title: "Hashmask Buyers and Sellers",
        description: "",
        image: "datastudio-buyers-sellers.png",
        link: "https://datastudio.google.com/reporting/27448e37-daed-416f-a273-52a549d6726d/page/FQD1B"
      },
      {
        title: "Hashmask Listings #1",
        description: "Rankings, Search, Sort, Visuals",
        image: "listings-1.png",
        link: "https://docs.google.com/spreadsheets/d/1rLagIfx4dSU_4ZbhuRxTjPYg0A5-ZQC8PIhLs29srwI/edit#gid=282814562"
      },
      {
        title: "Hashmask Listings #2",
        description: "Rankings, Search, Sort, Rarity",
        image: "listings-2.png",
        link: "https://docs.google.com/spreadsheets/d/1ha1KdYY3vCpAEcGqpTXv_U9PI6GhPoJs5-a1k6wuBzU/edit#gid=282814562"
      }
    ]
  ]

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

  .row {
  	display: flex;
    width: 100%;
  }

  @media (max-width: 500px) {
    .row {
      flex-flow: column nowrap;
      align-items: center;
    }
  }

  .col {
    flex: 1 1 0%;
  }

  @media (max-width: 500px) {
    .col {
      flex: 0 0 auto;
      width: 100%;
    }
  }

  .sep {
    height: 12px;
    min-height: 12px;
    min-width: 12px;
    width: 12px;
  }

  .tool {
    padding: .25rem;
  }

  .tool .preview img {
    width: 100%;
    height: 28vh;
    object-fit: cover;
    object-position: left;
    border-radius: 7px;
    border: 0px;
    box-shadow: rgb(20 1 8 / 15%) 0px 0px 1px 1px, rgb(255 255 255) -1px 1px 0px inset;
  }

  @media (max-width: 500px) {
    .tool .preview img {
      height: 48vh;
    }
  }

  .tool .title {
    font-weight: 800;
  }

  .tool .description {
    color: rgb(141, 124, 130);
  }
</style>
