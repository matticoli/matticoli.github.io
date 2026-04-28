<script lang="ts">
  import type { PageData } from './$types';
  import Hi from '../components/hi.svelte';
  import { base, assets } from '$app/paths';

  export let data: PageData;
  const { projects } = data;
</script>

<div class="flex flex-row align-left justify-left">
  <span class="grow w-11/12 sm:w-10/12 lg:w-9/12 xl:w-8/12"></span>
</div>
<section class="w-full flex flex-col items-center justify-center">
  <div class="backdrop-blur-sm w-11/12 sm:w-10/12 lg:w-9/12 mr-10 ml-10 mt-5 mb-5 bg-[#121212CC] rounded-3xl p-5">
    <div class="bg-[#2c2c2cCC] rounded-3xl flex flex-col md:flex-col items-center gap-6 p-5">
      <Hi className="mt-auto mb-auto" />
      <div class="flex flex-wrap items-center justify-center">
        <img
          class="sm:w-6/12 w-40"
          src="{assets}/assets/111-coding.png"
          alt="A web illustration of a smiling coffy cup and a clipboard checklist next to a laptop"
        />
      </div>
      <div class="text-sm sm:text-lg ml-5 mr-5 flex flex-col gap-4">
        <p>
          I'm a Full Stack Engineer & UX Designer with a passion for making things and helping others.
        </p>
      </div>
    </div>
  </div>

  <div class="mt-10 mb-[-5px] pb-10 w-full min-h-screen bg-[#080808CC] backdrop-blur-md">
    <h2 class="text-3xl text-primary text-center m-4 mt-10">Featured Projects</h2>
    <div class="w-full flex gap-4 sm:gap-10 flex-row flex-wrap items-center justify-center pt-4">
      {#each projects.filter((proj) => proj.featured) as proj (proj.slug)}
        <article class="w-80 min-h-80 bg-[#2c2c2cCC] max-w-xxl sm:max-w-sm flex flex-row gap-1 rounded-md">
          <div class="flex-shrink flex flex-col max-w-xxl sm:max-w-sm w-80">
            <div class="w-80 p-2 mb-4 text-center bg-[#121212] text-sm font-bold rounded-sm">
              {proj.roles}
            </div>
            <a href={`${base}/projects/${proj.slug}`}>
              <img
                class="w-full max-w-80 rounded-sm border-2"
                style={`border-color: ${proj.color}`}
                title={proj.title}
                alt={`${proj.title} title card`}
                src={proj.cover}
              />
            </a>
            <div class="flex flex-wrap gap-0 justify-center mt-2">
              {#each proj.tags.slice(0, 4) as tag (tag[0])}
                <span
                  class="m-1 px-2 py-1 rounded-sm text-xs font-semibold text-black"
                  style={`background-color: ${tag[1]}`}
                >
                  {tag[0]}
                </span>
              {/each}
            </div>
            <p class="text-md p-2 text-left">{proj.excerpt}</p>
            <a
              href={`${base}/projects/${proj.slug}`}
              class="ml-auto mr-auto mb-4 flex-shrink text-center justify-center items-center p-3 w-60 h-10 leading-tight bg-primary text-white hover:bg-blue-600 hover:-translate-y-1 active:scale-95 rounded-sm text-sm"
            >
              More Info &gt;&gt;
            </a>
          </div>
        </article>
      {/each}
      <div class="p-5 m-5 bg-[#2c2c2cCC] rounded-3xl w-80 h-40 flex flex-col justify-center">
        <a href="{base}/projects" class="m-auto w-60 text-xl text-center bg-primary text-white py-3 rounded-sm hover:bg-blue-600 hover:-translate-y-1 active:scale-95">
          All Projects
        </a>
      </div>
    </div>
  </div>
</section>

<style>
  h2 {
    font-family: 'Montserrat', Helvetica, sans-serif;
  }
</style>
