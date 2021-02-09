import './Nav.svelte.css.proxy.js';
/* src/components/Nav.svelte generated by Svelte v3.32.2 */
import {
	SvelteComponent,
	append,
	attr,
	detach,
	element,
	init,
	insert,
	listen,
	noop,
	run_all,
	safe_not_equal,
	space
} from "../../_snowpack/pkg/svelte/internal.js";

import { brand } from "../store.js";
import { createEventDispatcher } from "../../_snowpack/pkg/svelte.js";

function create_fragment(ctx) {
	let div6;
	let div5;
	let a0;
	let div0;
	let span0;
	let t0;
	let span1;
	let t2;
	let div2;
	let t8;
	let div3;
	let t9;
	let div4;
	let mounted;
	let dispose;

	return {
		c() {
			div6 = element("div");
			div5 = element("div");
			a0 = element("a");
			div0 = element("div");
			span0 = element("span");
			span0.innerHTML = `<img src="/maskdao-logo-stub.png" class="svelte-9rdi02"/>`;
			t0 = space();
			span1 = element("span");
			span1.textContent = `${brand}`;
			t2 = space();
			div2 = element("div");

			div2.innerHTML = `<div class="flex-center svelte-9rdi02"><a class="nav-item svelte-9rdi02" href="/">Home</a> 
        <a class="nav-item svelte-9rdi02" href="https://discord.gg/8c73c3zR" target="_blank">Forum</a> 
        <a href="https://docs.google.com/document/d/1G8Mzg5rSTQi27hHbNR4T2fJtvmO9MhhKSad7tjJWIW8/edit" target="_blank" class="nav-item svelte-9rdi02">About</a></div>`;

			t8 = space();
			div3 = element("div");
			div3.innerHTML = `<svg id="Capa_1" enable-background="new 0 0 512.001 512.001" viewBox="0 0 512.001 512.001" xmlns="http://www.w3.org/2000/svg" class="svelte-9rdi02"><g><path d="m406 151.001c8.284 0 15-6.716 15-15 0-24.813 20.187-45 45-45 8.284 0 15-6.716 15-15s-6.716-15-15-15c-24.393 0-45-21.065-45-46 0-8.284-6.716-15-15-15s-15 6.716-15 15c0 24.935-20.607 46-45 46-8.284 0-15 6.716-15 15s6.716 15 15 15c24.813 0 45 20.187 45 45 0 8.284 6.716 15 15 15zm-15.253-75.15c5.784-4.41 10.865-9.568 15.253-15.479 4.387 5.91 9.468 11.069 15.253 15.479-5.781 4.312-10.922 9.437-15.253 15.203-4.331-5.767-9.472-10.891-15.253-15.203z"></path><path d="m301 106.001c0-8.284-6.716-15-15-15s-15 6.716-15 15c0 41.355-33.645 75-75 75-8.284 0-15 6.716-15 15s6.716 15 15 15c41.355 0 75 33.645 75 75 0 8.284 6.716 15 15 15s15-6.716 15-15c0-41.355 33.645-75 75-75 8.284 0 15-6.716 15-15s-6.716-15-15-15c-41.355 0-75-33.645-75-75zm-15 125.972c-8.871-14.722-21.25-27.101-35.971-35.972 14.722-8.871 27.1-21.25 35.971-35.972 8.871 14.722 21.25 27.101 35.971 35.972-14.721 8.871-27.1 21.249-35.971 35.972z"></path><path d="m256 512.001c128.638 0 238.83-96.522 255.862-221.298.946-6.93-3.022-13.593-9.566-16.063-6.542-2.469-13.924-.09-17.793 5.737-33.016 49.73-91.835 80.624-153.503 80.624-99.252 0-180-80.748-180-180 0-61.668 30.893-120.487 80.624-153.503 5.826-3.868 8.207-11.25 5.737-17.793-2.469-6.543-9.131-10.511-16.063-9.566-124.939 17.055-221.298 127.397-221.298 255.862 0 140.959 115.05 256 256 256zm-87.774-466.347c-29.922 37.658-47.226 85.737-47.226 135.347 0 115.794 94.206 210 210 210 49.61 0 97.688-17.304 135.347-47.226-34.932 81.747-117.091 138.226-210.347 138.226-124.617 0-226-101.383-226-226 0-93.256 56.479-175.415 138.226-210.347z"></path></g></svg>`;
			t9 = space();
			div4 = element("div");
			div4.innerHTML = `<svg viewBox="0 0 24 24" class="svelte-9rdi02"><path d="M0 0h24v24H0z" fill="none"></path><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>`;
			attr(span0, "class", "icon");
			attr(span1, "class", "name svelte-9rdi02");
			attr(div0, "class", "brand svelte-9rdi02");
			attr(a0, "class", "brand-wrapper svelte-9rdi02");
			attr(a0, "href", "/");
			attr(div2, "class", "nav-list svelte-9rdi02");
			attr(div3, "class", "mode-toggle svelte-9rdi02");
			attr(div4, "class", "mobile-menu-toggle svelte-9rdi02");
			attr(div5, "class", "nav svelte-9rdi02");
			attr(div6, "class", "nav-wrapper svelte-9rdi02");
		},
		m(target, anchor) {
			insert(target, div6, anchor);
			append(div6, div5);
			append(div5, a0);
			append(a0, div0);
			append(div0, span0);
			append(div0, t0);
			append(div0, span1);
			append(div5, t2);
			append(div5, div2);
			append(div5, t8);
			append(div5, div3);
			append(div5, t9);
			append(div5, div4);

			if (!mounted) {
				dispose = [
					listen(div3, "click", toggle),
					listen(div4, "click", /*click_handler*/ ctx[1])
				];

				mounted = true;
			}
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(div6);
			mounted = false;
			run_all(dispose);
		}
	};
}

function toggle() {
	window.document.body.classList.toggle("dark");
}

function instance($$self) {
	const dispatch = createEventDispatcher();

	function showNav(openOrNot) {
		dispatch("message", { open: openOrNot });
	}

	const click_handler = () => showNav(true);
	return [showNav, click_handler];
}

class Nav extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, {});
	}
}

export default Nav;