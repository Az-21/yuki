<script lang="ts">
	export let horizontal: string = 'w-4/5 md:w-3/5 mx-auto';
	export let vSpacing: string = 'mt-12';
	export let text: string = '~~FIXME~~ add text param';
</script>

<div class="{horizontal} {vSpacing}">
	<p class="text-2xl font-semibold">
		{text}
	</p>
</div>
