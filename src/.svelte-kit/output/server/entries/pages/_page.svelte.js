import { y as ensure_array_like, z as attr, F as attr_style, G as bind_props } from "../../chunks/index.js";
import { k as escape_html } from "../../chunks/context.js";
function _page($$renderer, $$props) {
  let data = $$props["data"];
  const { projects } = data;
  $$renderer.push(`<div class="flex flex-row align-left justify-left"><span class="flex-grow w-11/12 sm:w-10/12 lg:w-9/12 xl:w-8/12"></span></div> <section class="w-full flex flex-col items-center justify-center"><div class="backdrop-blur-sm w-11/12 sm:w-10/12 lg:w-9/12 mr-10 ml-10 mt-5 mb-5 bg-[#121212CC] rounded-3xl"><div class="p-5 m-5 bg-[#2c2c2cCC] rounded-3xl flex flex-col md:flex-row items-center gap-6"><div class="flex-1 flex flex-col items-center justify-center text-center p-4 w-full h-20"><h2 class="text-2xl sm:text-3xl font-bold text-primary" style="font-family: 'Montserrat, Helvetica, sans-serif'">👋 Hi! I'm Mikel_</h2></div> <div class="flex flex-wrap align-center justify-center"><img class="sm:w-6/12" src="/assets/111-coding.png" alt="A web illustration of a smiling coffy cup and a clipboard checklist next to a laptop"/></div> <div class="mt-3 text-sm sm:text-lg ml-5 mr-5 flex flex-col gap-4 mb-5"><p>I’m a Full Stack Engineer &amp; UX Designer with a passion for making things and helping others.</p></div></div></div> <div class="mt-10 mb-[-5px] pb-10 w-full min-h-screen bg-[#080808CC] backdrop-blur-md"><h2 class="text-3xl text-primary text-center m-4 mt-10">Featured Projects</h2> <div class="w-full flex gap-4 sm:gap-10 flex-row flex-wrap items-center justify-center pt-4"><!--[-->`);
  const each_array = ensure_array_like(projects.filter((proj) => proj.featured));
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
  $$renderer.push(`<!--]--> <div class="p-5 m-5 bg-[#2c2c2cCC] rounded-3xl w-80 h-40 flex flex-col justify-center"><a href="/projects" class="m-auto w-60 text-xl text-center bg-primary text-white py-3 rounded-sm">All Projects</a></div></div></div></section>`);
  bind_props($$props, { data });
}
export {
  _page as default
};
