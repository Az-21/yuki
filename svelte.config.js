import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [preprocess({ postcss: true })],
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
