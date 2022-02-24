<script lang="ts">
	export let text: string;
	export let color: string = 'bg-emerald-600';
	export let expand: boolean = false;

	let width: string;
	if (expand) width = 'w-full h-full';
</script>

<button class="{width} px-4 py-2 text-md {color} hover:bg-sky-600 rounded text-white">
	{text}
</button>
