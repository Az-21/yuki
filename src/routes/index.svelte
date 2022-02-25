<script lang="ts">
  import AppCard from '$components/AppCard.svelte';
  import BrowserExtensions from '$components/BrowserExtensions.svelte';
  import Category from '$components/Category.svelte';
  import CheckedCLI from '$components/CheckedCLI.svelte';
  import Footer from '$components/Footer.svelte';
  import Hero from '$components/Hero.svelte';
  import Navbar from '$components/Navbar.svelte';
  import {
    generateBooleanList,
    generateWingetCommand,
    sortByTitle
  } from '$static/Functions.svelte';
  import { wingetMetadata } from '$static/Metadata.svelte';
  import { SvelteToast } from '@zerodevx/svelte-toast';

  // Variables
  let spacing: string = 'w-11/12 mx-auto mt-4';
  let selectAll: boolean = false;
  let wingetAppCount: number = wingetMetadata.length;
  let wingetAppsCheckbox: boolean[];
  let customCLI: string = '';

  // Initialize
  wingetMetadata.sort(sortByTitle);
  generateWingetCheckboxes();
  generatePersonalizedCommand();

  /* ------------------------------ UI Functions ------------------------------ */
  function generateWingetCheckboxes(): void {
    wingetAppsCheckbox = generateBooleanList(selectAll, wingetAppCount);
    generatePersonalizedCommand();
  }

  function generatePersonalizedCommand(): void {
    customCLI = ''; // reset previous custom CLI

    // Apps available on winget
    for (let index = 0; index < wingetAppsCheckbox.length; index++) {
      let isWinget: boolean =
        wingetAppsCheckbox[index] &&
        wingetMetadata[index]['cli'].slice(0, 7) !== 'custom:' &&
        wingetMetadata[index]['cli'] !== '';

      if (isWinget) customCLI += `${generateWingetCommand(wingetMetadata[index]['cli'])}; `;
    }

    // Empty selection handler
    if (customCLI === '') customCLI = '🚀 select some apps to generate your custom winget command';
  }
</script>

<Navbar />
<Hero {spacing} />

<div on:change={() => generateWingetCheckboxes()}>
  <CheckedCLI {spacing} checkedCLI={customCLI} bind:checked={selectAll} />
</div>

<Category {spacing} text="🟢 Available on Winget" />
<div on:change={() => generatePersonalizedCommand()} class="{spacing} grid gap-4 md:grid-cols-3">
  {#each wingetMetadata as app, index}
    <AppCard
      icon={app.icon}
      title={app.title}
      subtitle={app.subtitle}
      free={app.free}
      open={app.open}
      website={app.website}
      cli={generateWingetCommand(app.cli)}
      bind:checked={wingetAppsCheckbox[index]} />
  {/each}
</div>

<Category {spacing} text="🧩 Browser Extensions" />
<BrowserExtensions {spacing} />

<Footer />

<!-- Svelte toast placeholder/entry point -->
<SvelteToast />

<!-- CSS -->
<style>
  :global(body) {
    background-color: #262626;
    color: #fff;
  }
</style>
