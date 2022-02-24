<script lang="ts">
	import Button from './Button.svelte';
	import Clipboard from './Clipboard.svelte';

	export let horizontal: string = 'w-4/5 md:w-3/5 mx-auto';
	export let vSpacing: string = 'mt-12';
	export let checkedCLI: string = '~~FIXME: checkedCLI not passed';
	export let isSelectAll: boolean = false;

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

<div class="{horizontal} {vSpacing} w-full mb-12">
	<div class="px-8 py-4 bg-neutral-900 rounded-lg shadow-md">
		<div class="flex place-content-between">
			<h2 class="text-2xl font-bold">Personalized List 🌠</h2>
			<div class="flex items-center mt-2">
				<input class="w-4 h-4 accent-violet-400" type="checkbox" bind:checked={isSelectAll} />
				<p class="ml-2">Select all apps</p>
			</div>
		</div>

		<!-- Winget CLI -->
		<div class="flex py-8 space-x-4 items-end align-text-bottom">
			<textarea
				type="text"
				class="h-12 overflow-x-auto pt-3 w-full text-violet-200 text-center font-mono bg-transparent rounded ring-2 ring-violet-400"
				spellcheck="false"
				readonly
				value={checkedCLI}
				wrap="off"
				style="resize: none;"
			/>
			<div class="h-12" on:click={() => copy(checkedCLI)}>
				<Button text="Copy" color="bg-violet-500" expand={true} />
			</div>
		</div>
	</div>
</div>

<!-- Hidden element to enable copy to clipboard -->
<div id="clipboard" />
