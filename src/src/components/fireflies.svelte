<script lang="ts">
  import '../styles/fireflies.css';
</script>

{#each { length: 30 } as _, i}
  <div class="firefly"></div>
{/each}
