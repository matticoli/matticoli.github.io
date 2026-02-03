import { w as head, J as attr_class, y as ensure_array_like, z as attr, F as attr_style, G as bind_props, K as clsx } from "../../../../chunks/index.js";
import { k as escape_html } from "../../../../chunks/context.js";
function html(value) {
  var html2 = String(value ?? "");
  var open = "<!---->";
  return open + html2 + "<!---->";
}
function _page($$renderer, $$props) {
  let data = $$props["data"];
  const { project } = data;
  const iconClass = "text-primary inline ml-2 mb-1";
  head("gygcht", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>${escape_html(project.title)} – Projects – Mikel Matticoli</title>`);
    });
  });
  $$renderer.push(`<section class="w-full bg-black p-6"><h1 class="text-4xl">${escape_html(project.title)}</h1> <span class="text-xs text-[var(--primary)]"><a class="underline" href="/projects">projects</a> > ${escape_html(project.slug)}</span></section> <section class="flex flex-col gap-4 lg:gap-2 lg:flex-row w-full sm:w-11/12 lg:w-10/12 mr-10 ml-10 mt-5 mb-5"><div class="h-fit backdrop-blur-sm sm:min-w-[250px] w-full ml-auto mr-auto sm:w-full lg:w-[30%] bg-[#121212CC] rounded-2xl p-5 text-left"><h3 class="text-primary text-xs font-medium flex items-center gap-2">Project Type <span${attr_class(clsx(iconClass))}>💻</span></h3> <p class="text-sm font-medium mb-5">${escape_html(project.type)}</p> <h3 class="text-primary text-xs font-medium flex items-center gap-2">My Roles <span${attr_class(clsx(iconClass))}>🧑‍🚀</span></h3> <p class="text-sm font-medium mb-5">${escape_html(project.roles)}</p> <h3 class="text-primary text-xs font-medium flex items-center gap-2">Team Size <span${attr_class(clsx(iconClass))}>👥</span></h3> <p class="text-md font-medium mb-5">${escape_html(project.team_size)}</p> <h3 class="text-primary text-xs font-medium flex items-center gap-2">Additional Responsibilities <span${attr_class(clsx(iconClass))}>📝</span></h3> <p class="text-sm font-medium mb-5">${escape_html(project.responsibilities)}</p> <h3 class="text-primary text-xs font-medium flex items-center gap-2">Timeline <span${attr_class(clsx(iconClass))}>⏱️</span></h3> <p class="text-sm font-medium mb-5">${escape_html(project.timeline)}</p> <h3 class="text-primary text-xs font-medium flex items-center gap-2">Achievements <span${attr_class(clsx(iconClass))}>🏅</span></h3> <ul class="text-sm font-medium mb-5 list-disc list-inside"><!--[-->`);
  const each_array = ensure_array_like(project.achievements);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let a = each_array[$$index];
    $$renderer.push(`<li>${escape_html(a)}</li>`);
  }
  $$renderer.push(`<!--]--></ul></div> <div class="h-min backdrop-blur-sm sm:min-w-[500px] w-full ml-auto mr-auto sm:w-full lg:w-[66%] bg-[#121212CC] rounded-2xl p-5"><div class="mb-6 flex flex-col items-center gap-6"><!--[-->`);
  const each_array_1 = ensure_array_like(project.media);
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let media = each_array_1[$$index_1];
    if (media[0].includes("png") || media[0].includes("jpg")) {
      $$renderer.push("<!--[-->");
      $$renderer.push(`<img class="max-w-[80%] mx-auto mb-4 rounded-md border-2"${attr("src", media[0])}${attr("alt", media[1] ?? project.title)}/>`);
    } else {
      $$renderer.push("<!--[!-->");
      if (media[0].includes("youtu")) {
        $$renderer.push("<!--[-->");
        $$renderer.push(`<iframe style="max-width: 80%; margin: auto; margin-bottom: 30px; height: 100%;" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen class="w-full h-full sm:min-h-[300px]"${attr("src", media[0])}>Failed to load video</iframe>`);
      } else {
        $$renderer.push("<!--[!-->");
        $$renderer.push(`<span>Unrecognized media type ${escape_html(media[0])}</span>`);
      }
      $$renderer.push(`<!--]-->`);
    }
    $$renderer.push(`<!--]-->`);
  }
  $$renderer.push(`<!--]--></div> <div class="bg-[#2c2c2cCC] rounded-t-2xl rounded-b-none p-4 flex flex-wrap text-xs mb-2"><b class="text-md mt-auto mb-auto mr-2">Made With:</b> <!--[-->`);
  const each_array_2 = ensure_array_like(project.tags);
  for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
    let tag = each_array_2[$$index_2];
    $$renderer.push(`<span class="m-1 px-2 py-1 rounded-sm text-xs font-semibold text-black"${attr_style(`background-color: ${tag[1]}`)}>${escape_html(tag[0])}</span>`);
  }
  $$renderer.push(`<!--]--></div> <div${attr_class("bg-[#2c2c2cCC] rounded-none p-5 md text-sm text-left", void 0, { "md": md })}><div class="md">${html(project.content)}</div></div> <div class="bg-[#2c2c2cCC] rounded-b-2xl rounded-t-none p-4 flex flex-row gap-4 justify-center mt-2"><!--[-->`);
  const each_array_3 = ensure_array_like(project.links);
  for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
    let link = each_array_3[$$index_3];
    $$renderer.push(`<a class="hover:scale-110 hover:-translate-y-1 underline"${attr("href", link[1])}>${escape_html(link[0])}</a>`);
  }
  $$renderer.push(`<!--]--></div></div></section>`);
  bind_props($$props, { data });
}
export {
  _page as default
};
