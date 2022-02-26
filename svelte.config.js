import adapter from '@sveltejs/adapter-auto';
import path from 'path';
import preprocess from 'svelte-preprocess';
/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    preprocess({
      postcss: true
    })
  ],

  kit: {
    vite: {
      resolve: {
        alias: {
          $components: path.resolve('./src/components'),
          $delta: path.resolve('./src/delta'),
          $icons: path.resolve('./src/style/icons'),
          $static: path.resolve('./src/static'),
          $style: path.resolve('./src/style')
        }
      }
    },
    adapter: adapter()
  }
};

export default config;
