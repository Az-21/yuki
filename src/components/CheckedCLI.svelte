<script lang="ts">
	import Button from './Button.svelte';
	import Clipboard from './Clipboard.svelte';

	export let horizontal: string = 'w-4/5 md:w-3/5 mx-auto';
	export let vSpacing: string = 'mt-12';
	export let checkedCLI: string = '~~FIXME: checkedCLI not passed';

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

<div class="{horizontal} {vSpacing} w-full">
	<div class="px-8 py-4 bg-gray-900 rounded-lg shadow-md">
		<div class="mt-2">
			<p class="text-2xl font-medium text-white">🌠 Select Apps You Want</p>
			<p class="mt-2 text-gray-200">
				Select the checkbox provided in the app info cards to include an app in your custom choco
				command.
			</p>
		</div>
		<!-- Choco CLI -->
		<div class="flex px-8 py-8 space-x-4 items-end">
			<textarea
				type="text"
				class="h-12 overflow-x-auto w-full px-2 pt-3 text-white text-center font-mono bg-transparent rounded ring-2 ring-purple-700"
				spellcheck="false"
				value={checkedCLI}
				wrap="off"
				style="resize: none;"
			/>
			<div class="h-12" on:click={() => copy(checkedCLI)}>
				<Button text="Copy" color="bg-purple-700" expand={true} />
			</div>
		</div>
	</div>
</div>
<!-- Hidden element to enable copy to clipboard -->
<div id="clipboard" />

<style>
	/* Scrollbar */
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
		background: #6d28d9;
	}

	/* Checkbox */
	.checkmark {
		height: 25px;
		width: 25px;
	}
</style>
