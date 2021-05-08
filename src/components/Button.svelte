<script lang="ts">
	export let text: string;
	export let color: string = 'green-500';
</script>

<button class="px-4 py-2 text-md bg-{color} hover:bg-blue-500 rounded text-white shadow-lg">
	{text}
</button>
