import './NotFound.svelte.css.proxy.js';
/* src/pages/NotFound.svelte generated by Svelte v3.32.2 */
import {
	SvelteComponent,
	append,
	attr,
	create_component,
	destroy_component,
	detach,
	element,
	init,
	insert,
	mount_component,
	noop,
	safe_not_equal,
	space,
	transition_in,
	transition_out
} from "../../_snowpack/pkg/svelte/internal.js";

import Footer from "../components/Footer.svelte.js";

function create_fragment(ctx) {
	let div4;
	let div3;
	let t4;
	let footer;
	let current;
	footer = new Footer({});

	return {
		c() {
			div4 = element("div");
			div3 = element("div");

			div3.innerHTML = `<section class="svelte-1vaqvgu"><div class="hero-icon svelte-1vaqvgu"><img src="/maskdao-logo-stub.png" class="svelte-1vaqvgu"/></div> 
      <div class="coming-soon svelte-1vaqvgu">Not Found</div> 
      <div class="center"><a href="/">Go Home</a></div></section>`;

			t4 = space();
			create_component(footer.$$.fragment);
			attr(div3, "class", "main svelte-1vaqvgu");
		},
		m(target, anchor) {
			insert(target, div4, anchor);
			append(div4, div3);
			append(div4, t4);
			mount_component(footer, div4, null);
			current = true;
		},
		p: noop,
		i(local) {
			if (current) return;
			transition_in(footer.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(footer.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div4);
			destroy_component(footer);
		}
	};
}

class NotFound extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment, safe_not_equal, {});
	}
}

export default NotFound;