<Modal on:message={close}>
  <div class="title">Unlock Wallet</div>
  <div class="content">Under Development</div>
  <div class="footer">
    
  </div>
</Modal>

<script>
  import Modal from "./Modal.svelte"
  import { setModal } from "../store.js"

  function close(event) {
    setModal(false)
  }
</script>

<style>
  .title {
    align-items: center;
    color: rgb(91, 57, 38);
    display: flex;
    font-size: 18px;
    font-weight: 700;
    height: 72px;
    justify-content: center;
  }

  .content {
    color: rgb(91, 57, 38);
    padding: 24px;
    text-align: center;
  }

  .footer {
    align-items: center;
    background-color: rgba(247, 244, 242, 0);
    display: flex;
    margin: 0px;
    padding: 24px;
  }
</style>