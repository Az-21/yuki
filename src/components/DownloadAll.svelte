<script lang="ts">
	import Button from './Button.svelte';
	import Clipboard from './Clipboard.svelte';

	export let horizontal: string = 'w-4/5 md:w-4/5 mx-auto';
	export let vSpacing: string = 'mt-12';

	export let cli: string = '~~FIXME~~ provide get all cli';
	export let category: string = '~~FIXME~~ provide category';

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

<div class="{horizontal} {vSpacing}">
	<p class="text-xl font-medium mb-2">Download all {category} apps</p>
	<div class="flex space-x-4 items-end">
		<textarea
			type="text"
			class="h-12 overflow-x-auto w-full px-2 pt-3 text-white text-center font-mono bg-transparent rounded ring-2 ring-blue-700"
			spellcheck="false"
			value={cli}
			wrap="off"
			style="resize: none;"
		/>
		<div class="" on:click={() => copy(cli)}>
			<Button text="Copy" color="blue-700" />
		</div>
		<!-- Hidden element to enable copy to clipboard -->
		<div id="clipboard" />
	</div>
</div>

<style>
	::-webkit-scrollbar {
		width: 1rem;
		height: 0.4rem;
	}
	::-webkit-scrollbar-button {
		background: #111827;
	}
	::-webkit-scrollbar-track-piece {
		background: #111827;
	}
	::-webkit-scrollbar-thumb {
		background: #3b82f6;
	}
</style>
