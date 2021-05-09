<script lang="ts">
	export let horizontal: string = 'w-4/5 md:w-3/5 mx-auto';
	export let vSpacing: string = 'mt-12';
	export let divideColor: string = 'green-500';
	export let text: string = '~~FIXME~~ add text param';
</script>

<div class="{horizontal} {vSpacing} divide-y-4 divide-{divideColor}">
	<p class="text-3xl font-semibold">❄ {text} Apps</p>
	<p />
</div>
