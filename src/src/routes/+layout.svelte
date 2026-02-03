<script lang="ts">
  import '../styles/globals.css';
  import Nav from '../components/nav.svelte';
</script>

<svelte:head>
  <title>Mikel Matticoli</title>
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
  <link rel="manifest" href="/site.webmanifest" />
</svelte:head>

<div style="font-family: 'Montserrat'" class="flex min-h-screen flex-col items-center justify-center bg-slate-900 text-white">
  <Nav />
  <main class="flex w-full z-10 flex-1 flex-col items-center justify-center text-center transition ease-in-out duration-200">
    <slot />
  </main>
  <footer class="flex flex-col justify-center items-center h-24 w-full bg-black z-30 opacity-80 p-5">
    <p class="mb-2">
      ©{new Date().getFullYear()} Mikel Matticoli.
    </p>
  </footer>
</div>
