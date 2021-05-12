<script lang="ts">
	export let text: string;
	export let color: string = 'bg-green-500';
	export let expand: boolean = false;

	let width: string;
	if (expand) width = 'w-full h-full';
</script>

<button class="{width} px-4 py-2 text-md {color} hover:bg-blue-500 rounded text-white shadow-lg">
	{text}
</button>
