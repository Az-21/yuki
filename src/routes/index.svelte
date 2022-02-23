<script lang="ts">
	import Navbar from '../components/Navbar.svelte';
	import Hero from '../components/Hero.svelte';
	import CheckedCLI from '../components/CheckedCLI.svelte';
	import Category from '../components/Category.svelte';
	import AppCard from '../components/AppCard.svelte';
	import {
		daily,
		productivity,
		utility,
		creative,
		development,
		wingetCommand,
		fullAppList
	} from '../components/AppInfo.svelte';
	import DownloadAll from '../components/DownloadAll.svelte';
	import Footer from '../components/Footer.svelte';

	// Page dimensions
	let horizontal: string = 'w-4/5 sm:w-4/5 md:w-4/5 mx-auto';
	let vSpacing: string = 'mt-12';
	let vSpacingMini: string = 'mt-4';

	// Checkbox status
	let checkboxDaily: boolean[] = new Array(daily.length).fill(false);
	let checkboxProductivity: boolean[] = new Array(productivity.length).fill(false);
	let checkboxUtility: boolean[] = new Array(utility.length).fill(false);
	let checkboxCreative: boolean[] = new Array(creative.length).fill(false);
	let checkboxDevelopment: boolean[] = new Array(development.length).fill(false);

	// Checked CLI
	let customCLI: string = '';
	function generateCustomCLI(): void {
		customCLI = '';

		// Daily apps
		for (let index = 0; index < checkboxDaily.length; index++) {
			if (
				checkboxDaily[index] &&
				daily[index]['cli'].slice(0, 7) !== 'custom:' &&
				daily[index]['cli'] !== ''
			) {
				customCLI += `${wingetCommand(daily[index]['cli'])}; `;
			}
		}
		// Productivity apps
		for (let index = 0; index < checkboxProductivity.length; index++) {
			if (
				checkboxProductivity[index] &&
				productivity[index]['cli'].slice(0, 7) !== 'custom:' &&
				productivity[index]['cli'] !== ''
			) {
				customCLI += ` ${wingetCommand(productivity[index]['cli'])}`;
			}
		}
		// Utility apps
		for (let index = 0; index < checkboxUtility.length; index++) {
			if (
				checkboxUtility[index] &&
				utility[index]['cli'].slice(0, 7) !== 'custom:' &&
				utility[index]['cli'] !== ''
			) {
				customCLI += ` ${wingetCommand(utility[index]['cli'])}`;
			}
		}
		// Creative apps
		for (let index = 0; index < checkboxCreative.length; index++) {
			if (
				checkboxCreative[index] &&
				creative[index]['cli'].slice(0, 7) !== 'custom:' &&
				creative[index]['cli'] !== ''
			) {
				customCLI += ` ${wingetCommand(creative[index]['cli'])}`;
			}
		}
		// Development apps
		for (let index = 0; index < checkboxDevelopment.length; index++) {
			if (
				checkboxDevelopment[index] &&
				development[index]['cli'].slice(0, 7) !== 'custom:' &&
				development[index]['cli'] !== ''
			) {
				customCLI += ` ${wingetCommand(development[index]['cli'])}`;
			}
		}

		// Empty selection handler
		if (customCLI === '') customCLI = '🚀 select some apps to generate your custom choco command';
	}

	generateCustomCLI();
</script>

<!-- ------------------------------------------------------------ -->
<!--                          HTML                                -->
<!-- ------------------------------------------------------------ -->

<Navbar {horizontal} />
<Hero {horizontal} {vSpacing} />

<!-- ----------- Generate CLI for Checked ---------- -->
<CheckedCLI {horizontal} {vSpacing} checkedCLI={customCLI} />

<!-- ----------------- Daily Apps ------------------ -->
<Category {horizontal} vSpacing="" text="Daily" />
<div
	on:change={() => generateCustomCLI()}
	class="{horizontal} {vSpacingMini} grid md:grid-cols-2 gap-4"
>
	{#each daily as app, index}
		<AppCard
			icon={app.icon}
			title={app.title}
			subtitle={app.subtitle}
			free={app.free}
			open={app.open}
			website={app.website}
			cli={wingetCommand(app.cli)}
			bind:checked={checkboxDaily[index]}
		/>
	{/each}
</div>
<DownloadAll {horizontal} vSpacing={vSpacingMini} category="daily" cli={fullAppList(daily)} />

<!-- -------------- Productivity Apps -------------- -->
<Category {horizontal} {vSpacing} text="Productivity" />
<div
	on:change={() => generateCustomCLI()}
	class="{horizontal} {vSpacingMini} grid md:grid-cols-2 gap-4"
>
	{#each productivity as app, index}
		<AppCard
			icon={app.icon}
			title={app.title}
			subtitle={app.subtitle}
			free={app.free}
			open={app.open}
			website={app.website}
			cli={wingetCommand(app.cli)}
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
<div
	on:change={() => generateCustomCLI()}
	class="{horizontal} {vSpacingMini} grid md:grid-cols-2 gap-4"
>
	{#each utility as app, index}
		<AppCard
			icon={app.icon}
			title={app.title}
			subtitle={app.subtitle}
			free={app.free}
			open={app.open}
			website={app.website}
			cli={wingetCommand(app.cli)}
			bind:checked={checkboxUtility[index]}
		/>
	{/each}
</div>
<DownloadAll {horizontal} vSpacing={vSpacingMini} category="utility" cli={fullAppList(utility)} />

<!-- ---------------- Creative Apps -------------- -->
<Category {horizontal} {vSpacing} text="Creative" />
<div
	on:change={() => generateCustomCLI()}
	class="{horizontal} {vSpacingMini} grid md:grid-cols-2 gap-4"
>
	{#each creative as app, index}
		<AppCard
			icon={app.icon}
			title={app.title}
			subtitle={app.subtitle}
			free={app.free}
			open={app.open}
			website={app.website}
			cli={wingetCommand(app.cli)}
			bind:checked={checkboxCreative[index]}
		/>
	{/each}
</div>
<DownloadAll {horizontal} vSpacing={vSpacingMini} category="creative" cli={fullAppList(creative)} />

<!-- --------------- Development Apps -------------- -->
<Category {horizontal} {vSpacing} text="Development" />
<div
	on:change={() => generateCustomCLI()}
	class="{horizontal} {vSpacingMini} grid md:grid-cols-2 gap-4"
>
	{#each development as app, index}
		<AppCard
			icon={app.icon}
			title={app.title}
			subtitle={app.subtitle}
			free={app.free}
			open={app.open}
			website={app.website}
			cli={wingetCommand(app.cli)}
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
		background-color: #262626;
		color: #fff;
	}
</style>
