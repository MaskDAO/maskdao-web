// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".main.svelte-1vaqvgu.svelte-1vaqvgu{align-items:center;box-sizing:border-box;display:flex;flex-direction:column;min-height:calc(100vh - 160px);padding:48px 0px}section.svelte-1vaqvgu.svelte-1vaqvgu{box-sizing:border-box;margin:0px auto;max-width:800px;padding:0px 24px;width:100%}.coming-soon.svelte-1vaqvgu.svelte-1vaqvgu{color:rgb(222 197 150);;;font-size:80px;font-weight:900;margin:0px;padding:0px;text-align:center}.hero-icon.svelte-1vaqvgu.svelte-1vaqvgu{text-align:center}.hero-icon.svelte-1vaqvgu img.svelte-1vaqvgu{height:96px}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}