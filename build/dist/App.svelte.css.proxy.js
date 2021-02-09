// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "body.dark{background:radial-gradient(circle at center top, rgb(45, 32, 36), rgb(31, 20, 24)) 0% 0% / cover fixed;color:rgb(255, 255, 255)}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}