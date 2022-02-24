<script lang="ts">
	import Navbar from '../components/Navbar.svelte';
	import Hero from '../components/Hero.svelte';
	import CheckedCLI from '../components/CheckedCLI.svelte';
	import Category from '../components/Category.svelte';
	import AppCard from '../components/AppCard.svelte';
	import EdgeExtensions from '../components/EdgeExtensions.svelte';
	import { wingetJson, wingetCommand } from '../components/AppInfo.svelte';
	import Footer from '../components/Footer.svelte';
	import { SvelteToast } from '@zerodevx/svelte-toast';

	// Page dimensions
	let horizontal: string = 'w-11/12 mx-auto';
	let vSpacing: string = 'mt-4';
	let vSpacingMini: string = 'mt-4';

	// Sort apps by title
	function sortByTitle(x, y) {
		return x.title == y.title ? 0 : x.title.toLowerCase() > y.title.toLowerCase() ? 1 : -1;
	}
	wingetJson.sort(sortByTitle);

	// Checkbox status
	let wingetAppCount: number = wingetJson.length;
	let isSelectAll: boolean = false;
	let wingetAppsCheckbox: boolean[] = new Array(wingetAppCount).fill(false);

	function invertSelectAll(): void {
		// WARN: isSelectAll.valueOf doesn't work for some reason
		if (isSelectAll) wingetAppsCheckbox = new Array(wingetAppCount).fill(true);
		else wingetAppsCheckbox = new Array(wingetAppCount).fill(false);

		generateCustomCLI();
	}

	// Checked CLI
	let customCLI: string = '';
	function generateCustomCLI(): void {
		customCLI = '';

		// Apps available on winget
		for (let index = 0; index < wingetAppsCheckbox.length; index++) {
			if (
				wingetAppsCheckbox[index] &&
				wingetJson[index]['cli'].slice(0, 7) !== 'custom:' &&
				wingetJson[index]['cli'] !== ''
			) {
				customCLI += `${wingetCommand(wingetJson[index]['cli'])}; `;
			}
		}

		// Empty selection handler
		if (customCLI === '') customCLI = '🚀 select some apps to generate your custom winget command';
	}

	generateCustomCLI();
</script>

<!-- ------------------------------------------------------------ -->
<!--                          HTML                                -->
<!-- ------------------------------------------------------------ -->

<Navbar {horizontal} />
<Hero {horizontal} {vSpacing} />

<!-- ----------- Generate CLI for Checked ---------- -->
<div on:change={() => invertSelectAll()}>
	<CheckedCLI {horizontal} {vSpacing} checkedCLI={customCLI} bind:checked={isSelectAll} />
</div>

<!-- ----------------- Winget Apps ------------------ -->
<Category {horizontal} {vSpacing} text="🟢 Available on Winget" />
<div
	on:change={() => generateCustomCLI()}
	class="{horizontal} {vSpacingMini} grid md:grid-cols-3 gap-4"
>
	{#each wingetJson as app, index}
		<AppCard
			icon={app.icon}
			title={app.title}
			subtitle={app.subtitle}
			free={app.free}
			open={app.open}
			website={app.website}
			cli={wingetCommand(app.cli)}
			bind:checked={wingetAppsCheckbox[index]}
		/>
	{/each}
</div>

<!-- ----------------- Edge Extensions ------------------ -->
<Category {horizontal} {vSpacing} text="👽 Browser Extensions" />
<EdgeExtensions {horizontal} {vSpacing} />

<!-- Footer section -->
<Footer {horizontal} {vSpacing} />

<!-- Svelte toast placeholder/entry point -->
<SvelteToast />

<!-- CSS -->
<style>
	:global(body) {
		background-color: #262626;
		color: #fff;
	}
</style>
