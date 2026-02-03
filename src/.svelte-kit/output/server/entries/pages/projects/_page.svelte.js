import { y as ensure_array_like, z as attr, F as attr_style, G as bind_props } from "../../../chunks/index.js";
import { k as escape_html } from "../../../chunks/context.js";
function _page($$renderer, $$props) {
  let data = $$props["data"];
  const { projects } = data;
  $$renderer.push(`<section class="mt-10 mb-[-5px] pb-10 w-full min-h-screen bg-[#121212CC] backdrop-blur-md"><h2 class="text-3xl text-primary text-center m-4 mt-8">All Projects</h2> <div class="w-full flex gap-4 sm:gap-10 flex-row flex-wrap items-center justify-center pt-4"><!--[-->`);
  const each_array = ensure_array_like(projects);
  for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
    let proj = each_array[$$index_1];
    $$renderer.push(`<article class="w-80 min-h-80 bg-[#2c2c2cCC] max-w-xxl sm:max-w-sm flex flex-row gap-1 rounded-md"><div class="flex-shrink flex flex-col max-w-xxl sm:max-w-sm w-80"><div class="w-80 p-2 mb-4 text-center bg-[#121212] text-sm font-bold rounded-sm">${escape_html(proj.roles)}</div> <a${attr("href", `/projects/${proj.slug}`)}><img class="w-full max-w-80 rounded-sm border-2"${attr_style(`border-color: ${proj.color}`)}${attr("title", proj.title)}${attr("alt", `${proj.title} title card`)}${attr("src", proj.cover)}/></a> <div class="flex flex-wrap gap-0 justify-center mt-2"><!--[-->`);
    const each_array_1 = ensure_array_like(proj.tags.slice(0, 4));
    for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
      let tag = each_array_1[$$index];
      $$renderer.push(`<span class="m-1 px-2 py-1 rounded-sm text-xs font-semibold text-black"${attr_style(`background-color: ${tag[1]}`)}>${escape_html(tag[0])}</span>`);
    }
    $$renderer.push(`<!--]--></div> <p class="text-md p-2 text-left">${escape_html(proj.excerpt)}</p> <a${attr("href", `/projects/${proj.slug}`)} class="ml-auto mr-auto mb-4 flex-shrink text-center justify-center align-center p-3 w-80 h-10 leading-tight bg-primary text-white hover:bg-blue-600 hover:-translate-y-1 active:scale-95 rounded-sm text-sm">More Info >></a></div></article>`);
  }
  $$renderer.push(`<!--]--></div></section>`);
  bind_props($$props, { data });
}
export {
  _page as default
};
