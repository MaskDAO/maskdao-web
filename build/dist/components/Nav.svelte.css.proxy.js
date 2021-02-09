// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".nav-wrapper.svelte-9rdi02.svelte-9rdi02{box-sizing:border-box;margin:0px auto;max-width:1200px;padding:0px 24px;width:100%}.nav.svelte-9rdi02.svelte-9rdi02{align-items:center;display:flex;height:72px;justify-content:space-between;max-width:1200px;width:100%}.brand-wrapper.svelte-9rdi02.svelte-9rdi02{width:156px}.brand.svelte-9rdi02.svelte-9rdi02{-webkit-box-align:center;align-items:center;display:flex;-webkit-box-pack:center;justify-content:center;margin:0px;min-height:44px;min-width:44px;padding:0px;text-decoration:none}.brand.svelte-9rdi02 .icon img.svelte-9rdi02{width:24px}.brand.svelte-9rdi02 .name.svelte-9rdi02{color:rgb(20, 1, 8);font-size:18px;font-weight:700;margin-left:8px}body.dark .brand.svelte-9rdi02 .name.svelte-9rdi02{color:rgb(255, 255, 255)}@media(max-width: 500px){.brand.svelte-9rdi02.svelte-9rdi02{width:auto;justify-content:flex-start}.brand.svelte-9rdi02 .name.svelte-9rdi02{display:none}}.nav-list.svelte-9rdi02.svelte-9rdi02{display:flex;justify-content:center;width:100%;padding-right:6rem}@media(max-width: 500px){.nav-list.svelte-9rdi02.svelte-9rdi02{display:none}}.flex-center.svelte-9rdi02.svelte-9rdi02{-webkit-box-align:center;align-items:center;display:flex}.nav-list.svelte-9rdi02 .nav-item.svelte-9rdi02{color:rgb(141, 124, 130);padding-left:16px;padding-right:16px;text-decoration:none;font-weight:bold}.nav-list.svelte-9rdi02 .nav-item.svelte-9rdi02:hover{color:rgb(104, 85, 92)}.mode-toggle.svelte-9rdi02.svelte-9rdi02,.mobile-menu-toggle.svelte-9rdi02.svelte-9rdi02{align-items:center;display:flex;height:72px;width:auto;cursor:pointer}@media(max-width: 500px){.mode-toggle.svelte-9rdi02.svelte-9rdi02{display:none}}@media(min-width: 501px){.mobile-menu-toggle.svelte-9rdi02.svelte-9rdi02{display:none}}.mode-toggle.svelte-9rdi02 svg.svelte-9rdi02,.mobile-menu-toggle.svelte-9rdi02 svg.svelte-9rdi02{height:1.25rem;fill:rgb(141, 124, 130)}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}