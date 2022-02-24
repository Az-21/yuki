<script lang="ts">
	import Clipboard from './Clipboard.svelte';
	import { toast } from '@zerodevx/svelte-toast';

	export let horizontal: string = 'w-4/5 md:w-3/5 mx-auto';
	export let vSpacing: string = 'mt-12';
	export let checkedCLI: string = '~~FIXME: checkedCLI not passed';
	export let checked: boolean = false;

	// Copy to clipboard
	function copy(cliCommand: string) {
		let name = cliCommand;
		const app = new Clipboard({
			target: document.getElementById('clipboard'),
			props: { name }
		});

		toast.push(
			`<i class="fa-regular fa-square-check text-emerald-500"></i> Success <br> Copied to clipboard`,
			{ pausable: true }
		);
		app.$destroy();
	}
</script>

<div class="{horizontal} {vSpacing} w-full mb-12">
	<div class="px-8 py-4 bg-neutral-900 rounded-lg shadow-md">
		<div class="flex place-content-between">
			<h2 class="text-2xl font-bold">Personalized List</h2>
			<div class="flex items-center mt-2">
				<input class="w-4 h-4" type="checkbox" bind:checked />
				<p class="ml-2">Select all apps</p>
			</div>
		</div>

		<!-- Winget CLI -->
		<div class="flex py-8 space-x-4 items-center">
			<textarea
				type="text"
				class="h-12 overflow-x-auto pt-3 w-full text-neutral-500 text-center font-mono bg-transparent rounded ring-2 ring-neutral-700"
				spellcheck="false"
				readonly
				value={checkedCLI}
				wrap="off"
				style="resize: none;"
			/>
			<div on:click={() => copy(checkedCLI)}>
				<i class="text-white hover:text-emerald-400 fa-regular fa-copy fa-2xl" />
			</div>
		</div>
	</div>
</div>

<!-- Hidden element to enable copy to clipboard -->
<div id="clipboard" />
