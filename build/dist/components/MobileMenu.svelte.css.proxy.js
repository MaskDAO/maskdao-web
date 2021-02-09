// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".mobile-menu-wrapper.svelte-18lt9wl{display:flex;flex-direction:column;position:fixed;top:0;right:0;bottom:0;left:0;z-index:1000}.backdrop.svelte-18lt9wl{background-color:#000;opacity:0.75;position:absolute;top:0;right:0;bottom:0;left:0}.mobile-menu.svelte-18lt9wl{animation:svelte-18lt9wl-slideIn 0.3s forwards ease-out;background:#fff8ec;display:flex;flex:1;flex-direction:column;justify-content:center;position:absolute;top:0;left:100%;bottom:0;width:calc(100% - 48px)}@keyframes svelte-18lt9wl-slideIn{0%{transform:translateX(0)\n    }100%{transform:translateX(-100%)}}.nav-item.svelte-18lt9wl{box-sizing:border-box;color:rgb(141, 124, 130);font-size:24px;font-weight:700;padding:1rem 2rem;text-align:center;text-decoration:none;width:100%}.nav-item.svelte-18lt9wl:hover{color:rgb(104, 85, 92)}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}