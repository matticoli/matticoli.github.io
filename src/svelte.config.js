import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    files: {
      assets: 'public'
    },
    paths: {
      base: process.env.BASE_PATH ?? ''
    },
    prerender: {
      // Project markdown data contains absolute asset paths (/assets/...) that lack
      // the base prefix. Warn rather than error so PR preview builds succeed.
      handleHttpError: ({ message }) => {
        if (message.includes('does not begin with `base`')) return;
        throw new Error(message);
      }
    }
  },
  preprocess: [vitePreprocess()]
};

export default config;
