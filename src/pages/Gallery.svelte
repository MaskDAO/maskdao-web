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
        Gallery ({ Object.keys(gallery).length })
      </h2>
      <div>
        Data source: <a href="https://github.com/krzysu/hashmasks-db">krzysu/hashmasks-db</a>, <a href="https://twitter.com/c0d1ngpanda">c0d1ngpanda</a>
      </div>
      <div>
        Curated based on the implicit traits of each Hashmask.
      </div>
      {#each Object.keys(gallery) as id, i}
        <Collection
          title={galleryDetail[id].name}
          description={gallery[id].length}
          masks={gallery[id].slice(0, 4)}
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
  import Collection from "../components/Collection.svelte"
  import { gallery, galleryDetail } from "../store.js";

  let open = false

  const nums = new Set();
  while(nums.size !== 20) {
    nums.add(Math.floor(Math.random() * 16384) + 1);
  }
  const selection = [...nums]

  const collections = {
    "masks": [
      "halo",
      "crown",
      "tears",
      "mummy"
    ],
    "eyes": [
      "flowers",
      "hearts"
    ],
    "backgrounds": [
      "chess",
      "cards",
      "poem",
      "beethoven",
      "rosetta",
      "fibonacci",
      "mantra"
    ],
    "items": [
      "phoenix",
      "voyager"
    ]
  }

  const names = {
    "flowers":"Flower Eyes",
    "hearts":"Heart Eyes",
    "poem":"Chinese Poem",
    "tears":"Tear drop",
    "beethoven":"Beethoven",
    "halo":"Halo",
    "crown":"Crown",
    "rosetta":"Rosetta",
    "fibonacci":"Fibonacci",
    "chess":"Chess piece",
    "voyager":"Voyager Golden Record",
    "cards":"Playing cards",
    "phoenix":"Phoenix",
    "mantra":"The Pavamana Mantra",
    "mummy":"Mummy"
  }

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
    background: #e7f5f8;
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
