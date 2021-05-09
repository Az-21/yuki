<script lang="ts">
	import Navbar from '../components/Navbar.svelte';
	import Hero from '../components/Hero.svelte';
	import Category from '../components/Category.svelte';
	import AppCard from '../components/AppCard.svelte';
	import { productivity, daily, chocoCLI, fullAppList } from '../components/AppInfo.svelte';
	import DownloadAll from '../components/DownloadAll.svelte';
	import Footer from '../components/Footer.svelte';

	// Page dimenstions
	let horizontal: string = ' md:w-4/5 mx-auto';
	let vSpacing: string = 'mt-12';
</script>

<!-- ------------------------------------------------------------ -->
<!--                          HTML                                -->
<!-- ------------------------------------------------------------ -->

<Navbar {horizontal} />
<Hero {horizontal} {vSpacing} />

<!-- ----------------- Daily Apps ------------------ -->
<Category {horizontal} {vSpacing} text="Daily" divideColor="green-500" />
<div class="{horizontal} {vSpacing} grid md:grid-cols-2 gap-4">
	{#each daily as app}
		<AppCard
			icon={app.icon}
			title={app.title}
			subtitle={app.subtitle}
			free={app.free}
			open={app.open}
			website={app.website}
			cli={chocoCLI(app.cli)}
		/>
	{/each}
</div>
<DownloadAll {horizontal} {vSpacing} category="daily" cli={fullAppList(daily)} />

<!-- -------------- Productivity Apps -------------- -->
<Category {horizontal} {vSpacing} text="Productivity" divideColor="green-500" />
<div class="{horizontal} {vSpacing} grid md:grid-cols-2 gap-4">
	{#each productivity as app}
		<AppCard
			icon={app.icon}
			title={app.title}
			subtitle={app.subtitle}
			free={app.free}
			open={app.open}
			website={app.website}
			cli={chocoCLI(app.cli)}
		/>
	{/each}
</div>
<DownloadAll {horizontal} {vSpacing} category="productivity" cli={fullAppList(productivity)} />

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
