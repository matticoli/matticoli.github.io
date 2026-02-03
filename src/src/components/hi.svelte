<script lang="ts">
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';

  export let className = '';

  const displayText = writable('👋 Hi! ');

  onMount(() => {
    const fullText = "👋 Hi! I'm Mikel";
    let currentIndex = 0;
    let isTyping = true;

    const interval = setInterval(() => {
      if (isTyping) {
        if (currentIndex < fullText.length) {
          displayText.set(fullText.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          // Wait 45 seconds then erase
          setTimeout(() => {
            isTyping = false;
          }, 45000);
        }
      }
    }, 100);

    return () => clearInterval(interval);
  });
</script>

<div class="flex flex-1 flex-col items-center justify-center text-center p-4 w-full h-20 {className}">
  <h2 style="font-family: 'Montserrat, Helvetica, sans-serif'" class="text-2xl sm:text-3xl font-bold text-primary">
    {#if $displayText}{ $displayText }|{/if}
  </h2>
</div>