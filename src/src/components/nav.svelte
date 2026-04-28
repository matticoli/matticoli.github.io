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
  class="sticky top-0 z-20 w-full flex-col lg:flex-row backdrop-blur-sm border-[#121212] border-b bg-black/80 p-4 lg:pl-20 lg:pr-20 text-center flex"
>
  <a href="/" class="flex flex-row flex-1 text-left justify-start">
    <div class="flex flex-col flex-grow text-center lg:text-left">
      <h2 class="text-3xl">Mikel Matticoli</h2>
      <h3 class="text-xs">Full Stack Engineer • UX Designer</h3>
    </div>
  </a>
  <div class="flex justify-center text-sm text-center lg:justify-start lg:text-left lg:text-lg gap-8 md:gap-12 lg:mr-4 items-center">
    <span class="flex-1 hidden lg:block"></span>
    <a href="/" class="flex flex-row gap-2 hover:text-primary whitespace-nowrap {isActive() ? active : ''}">
      <svg class="mt-auto mb-auto" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5z"/><path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6z"/></svg>
      <span class="mb-auto mt-auto">Home</span>
    </a>
    <a href="/about" class="flex flex-row gap-2 hover:text-primary whitespace-nowrap {isActive('about') ? active : ''}">
      <svg class="mt-auto mb-auto" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm.256 7a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z"/><path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1.5a.5.5 0 0 1-1 0V11a.5.5 0 0 1 1 0Zm0 3a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"/></svg>
      <span class="mb-auto mt-auto"> About</span>
    </a>
    <a href="/projects" class="flex flex-row gap-2 hover:text-primary whitespace-nowrap {isActive('projects') ? active : ''}">
      <svg class="mt-auto mb-auto" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0Z"/></svg>
      <span class="mb-auto mt-auto">Projects</span>
    </a>
  </div>
</div>
