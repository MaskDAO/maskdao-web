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
        Collections
      </h2>
      <div>
        Data source: <a href="https://github.com/krzysu/hashmasks-db">krzysu/hashmasks-db</a>, <a href="https://twitter.com/c0d1ngpanda">c0d1ngpanda</a>
      </div>
      {#each Object.keys(gallery) as id, i}
        <div class="collection">
          <div class="metadata">
            <div class="title">{ galleryDetail[id].name }</div>
            <div class="description">
              Curated based on the implicit traits of each Hashmask.
            </div>
            <div class="button">View Collection</div>
          </div>
          <div class="mask-list">
            {#each gallery[id].slice(0, 4) as mask, j}
              <img src={`https://hashmasksstore.blob.core.windows.net/hashmaskspreview/${mask}.png`} />
            {/each}
          </div>
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
  }

  section {
    box-sizing: border-box;
    margin: 0px auto;
    max-width: 800px;
    padding: 0px 24px;
    width: 100%;
  }

  .mask-list {
    display: flex;
    flex-direction: row;
    overflow-x: auto;
  }

  .mask + .mask {
    margin-left: 1rem;
  }

  .mask img {
    width: 10rem;
  }

  .collection {
    display: flex;
    background: #c6e8f9;
    margin: 1rem 0;
    padding: 1rem;
  }

  .collection .metadata {
    width: 320%;
  }

  .collection .metadata .title {
    font-size: 1.25rem;
    font-weight: 600;
  }

  .collection .metadata .description {
    margin: 1rem 0;
  }

  .collection .metadata .button {
    padding: 0 1rem;
    margin: .5rem 0;
    border-radius: 8px;
    background: #000;
    color: #fff;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 700;
    white-space: nowrap;
    height: 2.25rem;
    line-height: 2.25rem;
    width: 7rem;
  }

  .collection .mask-list {
    height: 8rem;
  }

  .collection .mask-list img {
    margin-left: .5rem;
    cursor: pointer;
    border: 1px solid transparent;
  }

  .collection .mask-list img:hover {
    border-color: #000;
  }
</style>
