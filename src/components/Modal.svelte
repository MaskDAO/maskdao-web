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
    inset: 0px;
    backdrop-filter: blur(3px);
  }

  .overlay {
    background-color: rgba(91, 57, 38, 0.667);
    position: absolute;
    inset: 0px;
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
</style>