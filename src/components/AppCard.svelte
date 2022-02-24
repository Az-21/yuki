<script lang="ts">
	import Button from './Button.svelte';
	import Clipboard from './Clipboard.svelte';

	export let icon: string = '~~FIXME~~ icon not passed';
	export let title: string = '~~FIXME~~ add title';
	export let subtitle: string = '~~FIXME~~ add subtitle';
	export let free: number = -1;
	export let open: number = -1;
	export let website: string = '~~FIXME~~ add website';
	export let cli: string = '~~FIXME~~ add winget cli';
	export let checked: boolean = false;

	// Copy to clipboard
	function copy(cliCommand: string) {
		let name = cliCommand;
		const app = new Clipboard({
			target: document.getElementById('clipboard'),
			props: { name }
		});
		app.$destroy();
	}
</script>

<div class="relative px-8 py-4 mx-auto bg-neutral-900 rounded-lg shadow-lg w-full">
	<!-- Title -->
	<div class="flex justify-between">
		<div class="flex space-x-4 items-end">
			<img class="rounded-xl" src={icon} alt={title.toLowerCase()} />
			<p class="text-xl font-bold text-white">
				{title}
				{#if cli.slice(0, 6) === 'winget'}🟢
				{:else if cli.slice(0, 5) === 'https'}🔵
				{:else}🔴{/if}
			</p>
		</div>
		<input class="checkmark accent-emerald-600" type="checkbox" bind:checked />
	</div>

	<!-- Details -->
	<div class="flex mt-2 space-x-4 items-end">
		{#if free === 0}<p>💠 Free</p>
		{:else if free === 1}<p>🎁 Freemium</p>
		{:else if free === 2}<p>💲 Paid</p>
		{:else}<p>~~FIXME~~ Uncaught 'price': not in [0:2]</p>{/if}

		{#if open === 0}<p>💖 Open Source</p>
		{:else if open === 1}<p>🎀 Open Core</p>
		{:else if open === 2}<p>📑 Proprietary</p>
		{:else}<p>~~FIXME~~ Uncaught 'open': not in [0:2]</p>{/if}

		<a href={website} target="_blank" class="text-blue-500">🔷 Website</a>
	</div>

	<!-- Subtitle -->
	<p class="mt-2 mb-32">{subtitle}</p>

	<!-- winget CLI -->
	<div class="absolute inset-x-0 bottom-0 flex px-8 py-8 space-x-4 items-end">
		<textarea
			type="text"
			class="h-12 overflow-x-auto w-full px-2 pt-3 text-white text-center font-mono bg-transparent rounded ring-2 ring-emerald-600"
			spellcheck="false"
			readonly
			value={cli}
			wrap="off"
			style="resize: none;"
		/>
		<div class="h-12" on:click={() => copy(cli)}>
			<Button text="Copy" expand={true} />
		</div>
	</div>

	<!-- Hidden element to enable copy to clipboard -->
	<div id="clipboard" />
</div>

<style>
	/* Checkbox */
	.checkmark {
		height: 25px;
		width: 25px;
	}
</style>
