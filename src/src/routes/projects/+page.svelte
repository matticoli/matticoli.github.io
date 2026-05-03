<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
  const { projects } = data;
</script>

<section class="mt-10 mb-[-5px] pb-10 w-full min-h-screen bg-[#121212CC] backdrop-blur-md">
  <h2 class="text-3xl text-primary text-center m-4 mt-8">All Projects</h2>
  <div class="w-full flex gap-4 sm:gap-10 flex-row flex-wrap items-center justify-center pt-4">
    {#each projects as proj (proj.slug)}
      <article class="w-80 min-h-80 bg-[#2c2c2cCC] max-w-xxl sm:max-w-sm flex flex-row gap-1 rounded-md">
        <div class="flex-shrink flex flex-col max-w-xxl sm:max-w-sm w-80">
          <div class="w-80 p-2 mb-4 text-center bg-[#121212] text-sm font-bold rounded-sm">
            {proj.roles}
          </div>
          <a href={`/projects/${proj.slug}`}>
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
            href={`/projects/${proj.slug}`}
            class="ml-auto mr-auto mb-4 flex-shrink text-center justify-center align-center p-3 w-80 h-10 leading-tight bg-primary text-white hover:bg-blue-600 hover:-translate-y-1 active:scale-95 rounded-sm text-sm"
          >
            More Info &gt;&gt;
          </a>
        </div>
      </article>
    {/each}
  </div>
</section>
