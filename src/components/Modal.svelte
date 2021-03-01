<div class="overlay-wrapper">
  <div class="overlay" on:click={() => close()}></div>
  <div class="modal-wrapper">
    <div class="modal">
      <slot></slot>
    </div>
  </div>
</div>

<script>
  import { createEventDispatcher } from "svelte"

  const dispatch = createEventDispatcher()
  function close() {
    dispatch("message", {
      close: true
    })
  }
</script>

<style>
  .overlay-wrapper {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    top: 0;
    height: 100vh;
    width: 100%;
  }

  .overlay {
    background-color: rgba(91, 57, 38, 0.667);
    position: absolute;
    height: 100vh;
    width: 100%;
  }

  body.dark .overlay-wrapper .overlay {
    background-color: rgba(255, 255, 255, 0.667);
  }

  .modal-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    max-height: calc(100vh - 72px);
    max-width: 600px;
    position: relative;
    width: 100%;
  }

  .modal {
    background: radial-gradient(circle at center top, rgb(247 246 243), rgb(243 241 237));
    border: 0px;
    border-radius: 8px;
    padding: 0 1rem;
  }

  body.dark .modal-wrapper .modal {
    background: #2b2b2b;
    color: #fff;
  }
</style>