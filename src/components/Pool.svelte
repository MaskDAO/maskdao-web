<div class="pool">
  <div class="metadata">
    <div class="pool-info">
      <div class="token">
        <img src={ '/coins/' + ticker + '.png' } />
      </div>
      <div class="pair-info">
        <div class="pair-name">{ name }</div>
        <div class="pair-ticker">{ ticker }</div>
      </div>
    </div>
    <div class="apy">Earn MSKD at { apy*100 }% APY</div>
    <div class="state">
      <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="5.5" cy="5.5" r="5.5" fill={circleState[state]}/>
      </svg>
      { state }
    </div>
  </div>
  <div>
    <div class="liquidity">Liquidity</div>
    <div>$ { liquidity.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }</div>
  </div>
  <div class="button">Deposit</div>
  <div class="button alt">Claim</div>
</div>

<script>
  export let ticker = ""
  export let name = ""
  export let state = false
  export let apy = 0
  export let liquidity = 0

  const circleState = {
    active: "#90e0b0",
    offline: "#e0a390"
  }
</script>

<style>
  .pool {
    background: #fdf5eb;
    margin: 1rem .5rem;
    padding: 1rem;
    width: calc(33.3333% - 3rem);
    display: inline-block;
  }

  @media (max-width: 680px) {
    .pool {
      width: calc(100% - 3rem);
    }
  }

  .pool .metadata {
    padding: .8rem;
    margin-bottom: 1rem;
    font-size: 0.8rem;
    background: #f5dab8;
    position: relative;
  }

  body.dark .pool .metadata {
    background: #2b2b2b;
  }

  .pool .metadata .apy {
    background: #eda41f;
    color: #ffffff;
    padding: .25rem;
    margin-top: 1rem;
    text-align: center;
  }

  .pool .metadata .pool-info {
    display: flex;
  }

  .pool .metadata .pool-info .token {
    width: 3rem;
    height: 3rem;
  }

  .pool .metadata .pool-info .token img {
    display: block;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 6%);
  }

  .pool .metadata .pool-info .pair-info {
    margin: .5rem;
  }

  .pool .liquidity, .pool .metadata .pool-info .pair-info .pair-name {
    font-weight: 700;
    font-size: .7rem;
  }

  .pool .metadata .pool-info .pair-info .pair-ticker {
    text-transform: uppercase;
  }

  .pool .metadata .state {
    position: absolute;
    border: 1px solid #000;
    background: #fff;
    top: -1.8rem;
    left: calc(50% - 2rem);
    text-align: center;
    text-transform: uppercase;
    padding: 2px 4px;
    display: flex;
    align-items: center;
  }

  body.dark .pool .metadata .state {
    color: #2b2b2b;
  }

  .pool .metadata .state svg {
    margin: 0 3px;
  }

  .button {
    padding: 0 1rem;
    margin: .5rem 0;
    background: #000;
    color: #fff;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 700;
    white-space: nowrap;
    height: 2.25rem;
    line-height: 2.25rem;
    text-align: center;
    border: 1px solid transparent;
  }

  .button.alt {
    background: none;
    color: #000;
    border-color: #000;
  }
</style>