<script lang="ts">
  import '../styles/globals.css';
  import Nav from '../components/nav.svelte';
  import ContactPopup from '../components/contact-popup.svelte';
  import Fireflies from '../components/fireflies.svelte';
  import { onNavigate } from '$app/navigation';
  import { base, assets } from '$app/paths';

  onNavigate((navigation) => {
    if (!document.startViewTransition) return;
    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });
</script>

<svelte:head>
  <title>Mikel Matticoli</title>
  <link rel="apple-touch-icon" sizes="180x180" href="{assets}/apple-touch-icon.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="{assets}/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="{assets}/favicon-16x16.png" />
  <link rel="manifest" href="{assets}/site.webmanifest" />
</svelte:head>

<div style="font-family: 'Montserrat'" class="flex min-h-screen flex-col items-center justify-center bg-slate-900 text-white">
  <Nav />
  <Fireflies />
  <main class="flex w-full z-10 flex-1 flex-col items-center justify-center text-center transition ease-in-out duration-200">
    <slot />
  </main>
  <ContactPopup />
  <footer class="flex flex-col justify-center items-center h-24 w-full bg-black z-30 opacity-80 p-5">
    <span class="absolute sm:mt-[-12px] mb-40 right-20 w-40 z-10 animate-bounce">Contact me 👉</span>
    <p class="mb-2">©{new Date().getFullYear()} Mikel Matticoli.</p>
    <div class="flex flex-row justify-center items-center gap-4 text-lg">
      <a href="{base}/resume.pdf" title="Resume">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16"><path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/><path d="M4.603 14.087a.81.81 0 0 1-.438-.42c-.195-.388-.13-.776.08-1.102.198-.307.526-.568.897-.787a7.68 7.68 0 0 1 1.482-.645 19.697 19.697 0 0 0 1.062-2.227 7.269 7.269 0 0 1-.43-1.295c-.086-.4-.119-.796-.046-1.136.075-.354.274-.672.65-.823.192-.077.4-.12.602-.077a.7.7 0 0 1 .477.365c.088.164.12.356.127.538.007.188-.012.396-.047.614-.084.51-.27 1.134-.52 1.794a10.954 10.954 0 0 0 .98 1.686 5.753 5.753 0 0 1 1.334.05c.364.066.734.195.96.465.12.144.193.32.2.518.007.192-.047.382-.138.563a1.04 1.04 0 0 1-.354.416.856.856 0 0 1-.51.138c-.331-.014-.654-.196-.933-.417a5.712 5.712 0 0 1-.911-.95 11.651 11.651 0 0 0-1.997.406 11.307 11.307 0 0 1-1.02 1.51c-.292.35-.609.656-.927.787a.793.793 0 0 1-.58.029zm1.379-1.901c-.166.076-.32.156-.459.238-.328.194-.541.383-.647.547-.094.145-.096.25-.04.361.01.022.02.036.026.044a.266.266 0 0 0 .035-.012c.137-.056.355-.235.635-.572a8.18 8.18 0 0 0 .45-.606zm1.64-1.33a12.71 12.71 0 0 1 1.01-.193 11.744 11.744 0 0 1-.51-.858 20.801 20.801 0 0 1-.5 1.05zm2.446.45c.15.163.29.264.4.31a.5.5 0 0 0 .2.019c.015-.001.032-.003.05-.012a.266.266 0 0 0 .052-.11.333.333 0 0 0-.039-.23c-.07-.099-.29-.2-.718-.07zm-2.965-1.354a14.89 14.89 0 0 0 .33-1.06 7.5 7.5 0 0 1-.33.39c-.066.082-.13.16-.19.238l-.01.01.2.422z"/></svg>
      </a>
      <a href="https://linkedin.com/in/matticoli" title="LinkedIn" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/></svg>
      </a>
      <a href="https://github.com/matticoli" title="GitHub" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
      </a>
    </div>
  </footer>
</div>
