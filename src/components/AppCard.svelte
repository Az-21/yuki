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
			<img class="w-10 h-10" src={icon} alt={title.toLowerCase()} />
			<p class="text-lg font-bold text-white">
				{title}
				{#if cli.slice(0, 6) === 'winget'}🟢
				{:else if cli.slice(0, 5) === 'https'}🔵
				{:else}🔴{/if}
			</p>
		</div>
		<input class="checkmark accent-violet-400" type="checkbox" bind:checked />
	</div>

	<!-- Details -->
	<div class="flex mt-2 space-x-4 items-end text-xs">
		{#if free === 0}<p>💠 Free</p>
		{:else if free === 1}<p>🎁 Freemium</p>
		{:else}<p>💲 Paid</p>{/if}

		{#if open === 0}<p>💖 Open Source</p>
		{:else if open === 1}<p>🎀 Open Core</p>
		{:else}<p>📑 Proprietary</p>{/if}

		<a href={website} target="_blank" class="text-blue-500">🔷 Website</a>
	</div>

	<!-- Subtitle -->
	<p class="mt-2 mb-32 text-sm">{subtitle}</p>

	<!-- winget CLI -->
	<div class="absolute inset-x-0 bottom-0 flex px-8 py-8 space-x-4 items-end">
		<textarea
			type="text"
			class="h-12 overflow-x-auto w-full px-2 pt-3 text-emerald-100 text-center font-mono text-sm bg-transparent rounded ring-2 ring-emerald-600"
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
