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
    <h1>The Museum</h1>
    <div class="row">
      <div class="col">
        <img class="golden-ticket" src="/golden-ticket.png" />
      </div>
      <div class="col">
        <h2>Why you should get a Golden Ticket?</h2>
        <div class="mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        {#if unlocked_val}
          {#if isTesting}
            <div class="center">
              {#if !loading}
                <div class="button" on:click={() => mintTicket()}>Mint</div>
              {:else}
                <div>Loading...</div>
              {/if}
              {#if error.length > 0}
                <div class="error">{error}</div>
              {/if}
            </div>
          {:else}
            <div class="center error">Main Network implementation is currently under development. Please use Rinkeby Test Network.</div>
          {/if}
        {:else}
          <div class="center">
            <div class="button disabled">Please connect your wallet</div>
          </div>
        {/if}
      </div>
    </div>
  </div>
  <Footer />
</div>

<script>
  import Nav from "../components/Nav.svelte"
  import MobileMenu from "../components/MobileMenu.svelte"
  import Footer from "../components/Footer.svelte"
  import { link } from "svelte-spa-router"
  import { web3, connected, selectedAccount, chainId } from "svelte-web3"
  import { contracts } from "../store"

  let open = false
  let loading = false
  let error = ''

  $: unlocked_val = $connected
  $: account = $selectedAccount || '0x0000000000000000000000000000000000000000'
  $: balance = $connected ? $web3.eth.getBalance(account) : ''
  $: isTesting = $chainId === '0x4'

  const showNav = function(event) {
    open = event.detail.open
  }

  const getContract = function(name) {
    let contract = new $web3.eth.Contract(contracts[name].abi, contracts[name].address)
    return contract
  }

  const mintTicket = function(event) {
    loading = true
    error = ''
    let nctContract = getContract('nct')
    let ticketContract = getContract('ticket')

    nctContract.methods.increaseAllowance(contracts.ticket.address, "2000000000000000000000").send({from: account}).then(function (result) {
      console.log("increaseAllowance(): " + result)
      loading = false
    }).catch(e => {
      loading = false
      error = e
    })
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

  .row {
    display: flex;
  }

  .col {
    width: 50%;
  }

  .col img {
    width: calc(100% - 2rem);
    padding: 1rem;
  }

  .golden-ticket {
    animation: float 3s ease-in-out infinite;
  }

  @keyframes float {
    0% {
      transform: translatey(0px);
    }
    50% {
      transform: translatey(-6px);
    }
    100% {
      transform: translatey(0px);
    }
  }

  .center {
    text-align: center;
  }

  .button {
    display: initial;
    padding: .5rem 1.5rem;
    margin: 1rem auto;
    background: #74c0d0;
    border-radius: 28px;
    color: rgb(255, 255, 255);
    cursor: pointer;
    font-size: 1.5rem;
    font-weight: 700;
    white-space: nowrap;
    height: 2.25rem;
    line-height: 2.25rem;
  }

  .button.disabled {
    background: #fff;
    color: #d3d3d3;
    border: 2px solid #d3d3d3;
    cursor: not-allowed;
  }

  .mb-2 {
    margin-bottom: 2rem;
  }

  .error {
    color: #c00;
    font-weight: bold;
  }
</style>
