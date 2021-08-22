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
      <div class="col center">
        <img class="golden-ticket" src="/golden-ticket.png" data-tilt data-tilt-full-page-listening />
        <small>Hover me!</small>
      </div>
      <div class="col">
        <h2>Why you should get a Golden Ticket?</h2>
        <div class="mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        {#if unlocked_val}
          {#if isTesting}
            <div class="center">
              {#if mintable}
                {#if !loading}
                  {#if eligible}
                    <div class="button" on:click={() => mintTicket()}>Mint</div>
                  {/if}
                {:else}
                  <div>Loading...</div>
                {/if}
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
  import { onMount, afterUpdate } from "svelte"
  import Nav from "../components/Nav.svelte"
  import MobileMenu from "../components/MobileMenu.svelte"
  import Footer from "../components/Footer.svelte"
  import { link } from "svelte-spa-router"
  import { web3, connected, selectedAccount, chainId } from "svelte-web3"
  import { contracts, NCT_BAL, SUPPLY_LIMIT } from "../store"
  import VanillaTilt from 'vanilla-tilt'

  let open = false
  let loading = false
  let mintable = false
  let eligible = false
  let error = ''
  let trackChanges = {
    account: []
  }

  $: unlocked_val = $connected
  $: account = $selectedAccount || '0x0000000000000000000000000000000000000000'
  $: isTesting = $chainId === '0x4'

  onMount(function() {
    VanillaTilt.init(document.querySelectorAll(".golden-ticket"))
  })

  afterUpdate(function() {
    trackChanges.account.push(account)
    // Check Eligibility on Account Switch
    if(trackChanges.account.length > 1 && trackChanges.account[0] !== trackChanges.account[1]) {
      eligible = false
      error = ''
      trackChanges.account = []
      initializeMint()
      selectedAccount.subscribe(value => {
        if(value) {
          checkEligibility(value)
        }
      })
    }
  })

  const showNav = function(event) {
    open = event.detail.open
  }

  const getContract = function(name) {
    let contract = new $web3.eth.Contract(contracts[name].abi, contracts[name].address)
    return contract
  }

  const checkEligibility = function(acc) {
    let hashmaskContract = getContract('hashmask')
    let nctContract = getContract('nct')
    let ticketContract = getContract('ticket')

    loading = true
    error = ''
    Promise.all([
      hashmaskContract.methods.balanceOf(acc).call(),
      nctContract.methods.balanceOf(acc).call(),
      ticketContract.methods.balanceOf(acc).call(),
      ticketContract.methods.totalSupply().call()
    ])
    .then(function(res){
      let hmBal = res[0],
          nctBal = res[1],
          ticketBal = res[2],
          supply = res[3]
      loading = false
      eligible = hmBal > 0 && nctBal >= parseInt(NCT_BAL) && ticketBal == 0 && supply < parseInt(SUPPLY_LIMIT)
      console.log('HM:', hmBal)
      console.log('NCT:', nctBal)
      console.log('Ticket:', ticketBal)
      console.log('Supply:', supply)
      console.log('Eligible:', eligible)
      if(!eligible) {
        if(supply >= parseInt(SUPPLY_LIMIT)) {
          error = 'All ticket supply has been claimed.'
        }
        else if(ticketBal > 0) {
          error = 'Not eligible for minting. You already have a ticket.'
        }
        else {
          error = 'Not eligible for minting. You may not have enough NCT or not own at least 1 Hashmask.'
        }
      }
    })
    .catch(function(e) {
      error = e
    })
  }

  const initializeMint = function(connected) {
    let ticketContract = getContract('ticket')
    ticketContract.methods.isMintEnabled().call().then(function (result) {
      mintable = result
      console.log('Mintable:', mintable)
      if(!result) {
        error = 'Minting contract is disabled. Please come back later.'
      }
      else {
        checkEligibility()
      }
    })
    .catch(e => {
      error = e
    })
  }

  const mintTicket = function(event) {
    loading = true
    error = ''
    let nctContract = getContract('nct')
    let ticketContract = getContract('ticket')

    nctContract.methods.increaseAllowance(contracts.ticket.address, NCT_BAL).send({from: account}).then(function (result) {
      ticketContract.methods.mintTicket().send({from: account}).then(function (result) {
        loading = false
        console.log("mintTicket() called", result)
        checkEligibility()
      }).catch(e => {
        loading = false
        error = e
      });
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

  @media (max-width: 660px) {
    .row {
      display: block;
    }

    .row .col {
      width: 100%;
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
