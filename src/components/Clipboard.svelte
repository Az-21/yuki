<script lang="ts">
	import { onMount } from 'svelte';
	export let name: string;
	let textarea: HTMLTextAreaElement;
	onMount(() => {
		textarea.select();
		document.execCommand('copy');
	});
</script>

<textarea bind:value={name} bind:this={textarea} />
