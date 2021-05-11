<script lang="ts">
	import Navbar from '../components/Navbar.svelte';
	import Hero from '../components/Hero.svelte';
	import Category from '../components/Category.svelte';
	import AppCard from '../components/AppCard.svelte';
	import {
		daily,
		productivity,
		utility,
		creative,
		development,
		chocoCLI,
		fullAppList
	} from '../components/AppInfo.svelte';
	import DownloadAll from '../components/DownloadAll.svelte';
	import Footer from '../components/Footer.svelte';

	// Page dimensions
	let horizontal: string = 'w-4/5 sm:w-4/5 md:w-4/5 mx-auto';
	let vSpacing: string = 'mt-12';
	let vSpacingMini: string = 'mt-4';

	// Checkbox status
	var checkboxDaily = new Array(daily.length).fill(true);
	var checkboxProductivity = new Array(productivity.length).fill(false);
	var checkboxUtility = new Array(utility.length).fill(false);
	var checkboxCreative = new Array(creative.length).fill(false);
	var checkboxDevelopment = new Array(development.length).fill(false);
</script>

<!-- ------------------------------------------------------------ -->
<!--                          HTML                                -->
<!-- ------------------------------------------------------------ -->

<Navbar {horizontal} />
<Hero {horizontal} {vSpacing} />

<!-- ----------------- Daily Apps ------------------ -->
<Category {horizontal} vSpacing="" text="Daily" />
<div class="{horizontal} {vSpacingMini} grid md:grid-cols-2 gap-4">
	{#each daily as app, index}
		<AppCard
			icon={app.icon}
			title={app.title}
			subtitle={app.subtitle}
			free={app.free}
			open={app.open}
			website={app.website}
			cli={chocoCLI(app.cli)}
			bind:checked={checkboxDaily[index]}
		/>
	{/each}
</div>
<DownloadAll {horizontal} vSpacing={vSpacingMini} category="daily" cli={fullAppList(daily)} />

<!-- -------------- Productivity Apps -------------- -->
<Category {horizontal} {vSpacing} text="Productivity" />
<div class="{horizontal} {vSpacingMini} grid md:grid-cols-2 gap-4">
	{#each productivity as app, index}
		<AppCard
			icon={app.icon}
			title={app.title}
			subtitle={app.subtitle}
			free={app.free}
			open={app.open}
			website={app.website}
			cli={chocoCLI(app.cli)}
			bind:checked={checkboxProductivity[index]}
		/>
	{/each}
</div>
<DownloadAll
	{horizontal}
	vSpacing={vSpacingMini}
	category="productivity"
	cli={fullAppList(productivity)}
/>

<!-- ------------------ Tool Apps -------------- -->
<Category {horizontal} {vSpacing} text="Utility" />
<div class="{horizontal} {vSpacingMini} grid md:grid-cols-2 gap-4">
	{#each utility as app, index}
		<AppCard
			icon={app.icon}
			title={app.title}
			subtitle={app.subtitle}
			free={app.free}
			open={app.open}
			website={app.website}
			cli={chocoCLI(app.cli)}
			bind:checked={checkboxUtility[index]}
		/>
	{/each}
</div>
<DownloadAll {horizontal} vSpacing={vSpacingMini} category="utility" cli={fullAppList(utility)} />

<!-- ---------------- Creative Apps -------------- -->
<Category {horizontal} {vSpacing} text="Creative" />
<div class="{horizontal} {vSpacingMini} grid md:grid-cols-2 gap-4">
	{#each creative as app, index}
		<AppCard
			icon={app.icon}
			title={app.title}
			subtitle={app.subtitle}
			free={app.free}
			open={app.open}
			website={app.website}
			cli={chocoCLI(app.cli)}
			bind:checked={checkboxCreative[index]}
		/>
	{/each}
</div>
<DownloadAll {horizontal} vSpacing={vSpacingMini} category="creative" cli={fullAppList(creative)} />

<!-- --------------- Development Apps -------------- -->
<Category {horizontal} {vSpacing} text="Development" />
<div class="{horizontal} {vSpacingMini} grid md:grid-cols-2 gap-4">
	{#each development as app, index}
		<AppCard
			icon={app.icon}
			title={app.title}
			subtitle={app.subtitle}
			free={app.free}
			open={app.open}
			website={app.website}
			cli={chocoCLI(app.cli)}
			bind:checked={checkboxDevelopment[index]}
		/>
	{/each}
</div>
<DownloadAll
	{horizontal}
	vSpacing={vSpacingMini}
	category="development"
	cli={fullAppList(development)}
/>

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
