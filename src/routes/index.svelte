<script lang="ts">
	import Clipboard from '../components/Clipboard.svelte';

	// Page dimenstions
	let horizontal: string = 'w-4/5 md:w-3/5 mx-auto';
	let vSpacing: string = 'mt-12';

	// Copy to clipboard
	function copy(choco: string) {
		let name = choco;
		const app = new Clipboard({
			target: document.getElementById('clipboard'),
			props: { name }
		});
		app.$destroy();
	}
</script>

<!-- ------------------------------------------------------------ -->
<!--                          HTML                                -->
<!-- ------------------------------------------------------------ -->

<h1>Welcome to SvelteKit</h1>
<p>
	Visit <a class="text-blue-600 underline" href="https://kit.svelte.dev">kit.svelte.dev</a> to read the
	documentation
</p>

<!-- Clipboard: hidden element to enable copy to clipboard -->
<div id="clipboard" />

<!-- ------------------------------------------------------------ -->
<!--                          CSS                                 -->
<!-- ------------------------------------------------------------ -->

<!--  -->
<style>
	:global(body) {
		background-color: #1f2937;
		color: #fff;
	}
</style>
