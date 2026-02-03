<script lang="ts">
  import { page } from '$app/stores';

  const active = 'underline underline-offset-4 decoration-primary text-primary hover:text-white-200';

  $: isActive = (path?: string): boolean => {
    const currentPath = $page.url.pathname;
    if (path) {
      return currentPath.toLowerCase().includes(path);
    } else {
      return currentPath === '/';
    }
  };
</script>

<div
  style="min-height: 60px; font-family: 'Lexend, Helvetica, sans-serif'; letter-spacing: 1.3px; font-weight: 500; overflow: initial;"
  class="sticky top-0 z-20 w-full flex-row backdrop-blur-sm border-[#121212] border-b bg-black/80 p-4 lg:pl-20 lg:pr-20 items-center hidden lg:flex lg:sticky"
>
  <div class="flex flex-row justify-end items-center gap-8 md:gap-12 ml-auto text-sm lg:text-lg">
    <a href="/" class="flex flex-row gap-2 hover:text-primary whitespace-nowrap {isActive() ? active : ''}">
      <span class="mb-auto mt-auto">🏠 Home</span>
    </a>
    <a href="/about" class="flex flex-row gap-2 hover:text-primary whitespace-nowrap {isActive('about') ? active : ''}">
      <span class="mb-auto mt-auto">👤 About</span>
    </a>
    <a href="/projects" class="flex flex-row gap-2 hover:text-primary whitespace-nowrap {isActive('projects') ? active : ''}">
      <span class="mb-auto mt-auto">🛠️ Projects</span>
    </a>
  </div>
</div>
