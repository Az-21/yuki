import preprocess from "svelte-preprocess";
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [vitePreprocess(), preprocess({
		postcss: true
	})],

	kit: {
		adapter: adapter(),
		alias: {
			$components: './src/components',
			$delta: './src/delta',
			$icons: './src/style/icons',
			$static: './src/static',
			$style: './src/style',
		},
	}
};

export default config;
