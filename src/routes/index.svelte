<script lang="ts">
	import Navbar from '../components/Navbar.svelte';
	import Hero from '../components/Hero.svelte';
	import Category from '../components/Category.svelte';
	import AppCard from '../components/AppCard.svelte';
	import { productivity } from '../components/AppInfo.svelte';
	import Footer from '../components/Footer.svelte';

	// Page dimenstions
	let horizontal: string = 'w-4/5 md:w-4/5 mx-auto';
	let vSpacing: string = 'mt-12';

	console.log(productivity[0].icon);
</script>

<!-- ------------------------------------------------------------ -->
<!--                          HTML                                -->
<!-- ------------------------------------------------------------ -->

<Navbar {horizontal} />
<Hero {horizontal} {vSpacing} />

<Category {horizontal} {vSpacing} text="Productivity" divideColor="green-500" />
<div class="{horizontal} {vSpacing} grid md:grid-cols-2 gap-4">
	{#each productivity as app}
		<AppCard
			title={app.title}
			subtitle={app.subtitle}
			free={app.free}
			open={app.open}
			website={app.website}
			cli={app.cli}
		/>
	{/each}
</div>

<Footer {horizontal} {vSpacing} />

<!-- ------------------------------------------------------------ -->
<!--                          CSS                                 -->
<!-- ------------------------------------------------------------ -->

<!--  -->
<style>
	:global(body) {
		background-color: #1f2937;
		color: #fff;
	}
</style>
