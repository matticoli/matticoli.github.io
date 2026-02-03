import { w as head, x as slot } from "../../chunks/index.js";
import { k as escape_html } from "../../chunks/context.js";
function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    head("12qhfyh", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Mikel Matticoli</title>`);
      });
      $$renderer3.push(`<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/> <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/> <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/> <link rel="manifest" href="/site.webmanifest"/>`);
    });
    $$renderer2.push(`<div class="flex min-h-screen flex-col items-center justify-center bg-slate-900 text-white"><main class="flex w-full z-10 flex-1 flex-col items-center justify-center text-center transition ease-in-out duration-200"><!--[-->`);
    slot($$renderer2, $$props, "default", {});
    $$renderer2.push(`<!--]--></main> <footer class="flex flex-col justify-center items-center h-24 w-full bg-black z-30 opacity-80 p-5"><p class="mb-2">©${escape_html((/* @__PURE__ */ new Date()).getFullYear())} Mikel Matticoli.</p></footer></div>`);
  });
}
export {
  _layout as default
};
