<script lang="ts">
	import Button from './Button.svelte';
	import Clipboard from './Clipboard.svelte';

	export let icon: string = '🎀';
	export let title: string = '~~FIXME~~ add title';
	export let subtitle: string = '~~FIXME~~ add subtitle';
	export let free: boolean = false;
	export let open: boolean = false;
	export let website: string = '~~FIXME~~ add website';
	export let cli: string = '~~FIXME~~ add choco cli';

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

<div class="relative px-8 py-4 mx-auto bg-gray-900 rounded-lg shadow-lg w-full">
	<!-- Title -->
	<div class="flex">
		<p>{icon}</p>
		<p class="text-xl font-bold text-white">{title}</p>
	</div>

	<!-- Details -->
	<div class="flex mt-2 space-x-4 items-end">
		{#if free}<p>💖 Free</p>
		{:else}<p>💲 Paid</p>{/if}

		{#if open}<p>✔ Open Source</p>
		{:else}<p>📑 Proprietary</p>{/if}

		<a href={website} class="text-blue-500">🔗 Website</a>
	</div>

	<!-- Subtitle -->
	<p class="mt-2 mb-32">{subtitle}</p>

	<!-- Choco CLI -->
	<div class="absolute inset-x-0 bottom-0 flex px-8 py-8 space-x-4 items-end">
		<textarea
			type="text"
			class="h-12 overflow-x-auto w-full px-2 pt-3 text-white text-center font-mono bg-transparent rounded ring-2 ring-green-500"
			spellcheck="false"
			value={cli}
			wrap="off"
			style="resize: none;"
		/>
		<div class="" on:click={() => copy(cli)}>
			<Button text="Copy" />
		</div>
	</div>

	<!-- Hidden element to enable copy to clipboard -->
	<div id="clipboard" />
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
		background: #10b981;
	}
</style>
