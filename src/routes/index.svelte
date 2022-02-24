<script lang="ts">
	import Navbar from '../components/Navbar.svelte';
	import Hero from '../components/Hero.svelte';
	import CheckedCLI from '../components/CheckedCLI.svelte';
	import Category from '../components/Category.svelte';
	import AppCard from '../components/AppCard.svelte';
	import { wingetJson, wingetCommand, fullAppList } from '../components/AppInfo.svelte';
	import Footer from '../components/Footer.svelte';

	// Page dimensions
	let horizontal: string = 'w-11/12 mx-auto';
	let vSpacing: string = 'mt-4';
	let vSpacingMini: string = 'mt-4';

	// Checkbox status
	let checkboxWinget: boolean[] = new Array(wingetJson.length).fill(false);

	// Checked CLI
	let customCLI: string = '';
	function generateCustomCLI(): void {
		customCLI = '';

		// Apps available on winget
		for (let index = 0; index < checkboxWinget.length; index++) {
			if (
				checkboxWinget[index] &&
				wingetJson[index]['cli'].slice(0, 7) !== 'custom:' &&
				wingetJson[index]['cli'] !== ''
			) {
				customCLI += `${wingetCommand(wingetJson[index]['cli'])}; `;
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

<!-- ----------------- Winget Apps ------------------ -->
<Category {horizontal} vSpacing="" text="Apps Available on Winget" />
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
			bind:checked={checkboxWinget[index]}
		/>
	{/each}
</div>

<!-- Footer section -->
<Footer {horizontal} {vSpacing} />

<!-- CSS -->
<style>
	:global(body) {
		background-color: #262626;
		color: #fff;
	}
</style>
