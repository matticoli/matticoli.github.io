<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
  const { project } = data;

  const iconClass = 'text-primary inline ml-2 mb-1';
</script>

<svelte:head>
  <title>{project.title} – Projects – Mikel Matticoli</title>
</svelte:head>

<section class="w-full bg-black p-6">
  <h1 class="text-4xl">{project.title}</h1>
  <span class="text-xs text-[var(--primary)]">
    <a class="underline" href="/projects">projects</a> &gt; {project.slug}
  </span>
</section>

<section class="flex flex-col gap-4 lg:gap-2 lg:flex-row w-full sm:w-11/12 lg:w-10/12 mr-10 ml-10 mt-5 mb-5">
  <!-- Left column -->
  <div class="h-fit backdrop-blur-sm sm:min-w-[250px] w-full ml-auto mr-auto sm:w-full lg:w-[30%] bg-[#121212CC] rounded-2xl p-5 text-left">
    <h3 class="text-primary text-xs font-medium flex items-center gap-2">
      Project Type
      <span class={iconClass}>💻</span>
    </h3>
    <p class="text-sm font-medium mb-5">{project.type}</p>

    <h3 class="text-primary text-xs font-medium flex items-center gap-2">
      My Roles
      <span class={iconClass}>🧑‍🚀</span>
    </h3>
    <p class="text-sm font-medium mb-5">{project.roles}</p>

    <h3 class="text-primary text-xs font-medium flex items-center gap-2">
      Team Size
      <span class={iconClass}>👥</span>
    </h3>
    <p class="text-md font-medium mb-5">{project.team_size}</p>

    <h3 class="text-primary text-xs font-medium flex items-center gap-2">
      Additional Responsibilities
      <span class={iconClass}>📝</span>
    </h3>
    <p class="text-sm font-medium mb-5">{project.responsibilities}</p>

    <h3 class="text-primary text-xs font-medium flex items-center gap-2">
      Timeline
      <span class={iconClass}>⏱️</span>
    </h3>
    <p class="text-sm font-medium mb-5">{project.timeline}</p>

    <h3 class="text-primary text-xs font-medium flex items-center gap-2">
      Achievements
      <span class={iconClass}>🏅</span>
    </h3>
    <ul class="text-sm font-medium mb-5 list-disc list-inside">
      {#each project.achievements as a}
        <li>{a}</li>
      {/each}
    </ul>
  </div>

  <!-- Right column -->
  <div class="h-min backdrop-blur-sm sm:min-w-[500px] w-full ml-auto mr-auto sm:w-full lg:w-[66%] bg-[#121212CC] rounded-2xl p-5">
    <!-- Media gallery (simplified: show all images stacked) -->
    <div class="mb-6 flex flex-col items-center gap-6">
      {#each project.media as media (media[0])}
        {#if media[0].includes('png') || media[0].includes('jpg')}
          <img
            class="max-w-[80%] mx-auto mb-4 rounded-md border-2"
            src={media[0]}
            alt={media[1] ?? project.title}
          />
        {:else if media[0].includes('youtu')}
          <iframe
            style="max-width: 80%; margin: auto; margin-bottom: 30px; height: 100%;"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            class="w-full h-full sm:min-h-[300px]"
            src={media[0]}
          >
            Failed to load video
          </iframe>
        {:else}
          <span>Unrecognized media type {media[0]}</span>
        {/if}
      {/each}
    </div>

    <div class="bg-[#2c2c2cCC] rounded-t-2xl rounded-b-none p-4 flex flex-wrap text-xs mb-2">
      <b class="text-md mt-auto mb-auto mr-2">Made With:</b>
      {#each project.tags as tag (tag[0])}
        <span
          class="m-1 px-2 py-1 rounded-sm text-xs font-semibold text-black"
          style={`background-color: ${tag[1]}`}
        >
          {tag[0]}
        </span>
      {/each}
    </div>

    <div class="bg-[#2c2c2cCC] rounded-none p-5 text-sm text-left">
      <div class="prose prose-invert">
        {@html project.content}
      </div>
    </div>

    <div class="bg-[#2c2c2cCC] rounded-b-2xl rounded-t-none p-4 flex flex-row gap-4 justify-center mt-2">
      {#each project.links as link (link[0])}
        <a class="hover:scale-110 hover:-translate-y-1 underline" href={link[1]}>
          {link[0]}
        </a>
      {/each}
    </div>
  </div>
</section>
