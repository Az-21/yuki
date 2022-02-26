<script lang="ts">
  /* -------------------------------------------------------------------------- */
  /*                                   Imports                                  */
  /* -------------------------------------------------------------------------- */
  import SectionHeader from '$components/SectionHeader.svelte';
  import WingetCard from '$components/WingetCard.svelte';
  import BrowserExtensions from '$delta/BrowserExtensions.svelte';
  import Footer from '$delta/Footer.svelte';
  import Hero from '$delta/Hero.svelte';
  import Navbar from '$delta/Navbar.svelte';
  import PersonalizedCommand from '$delta/PersonalizedCommand.svelte';
  import {
    generateBooleanList,
    generatePersonalizedCommand,
    generateWingetCommand,
    sortByTitle
  } from '$static/Functions.svelte';
  import { wingetMetadata } from '$static/Metadata.svelte';
  import { SvelteToast } from '@zerodevx/svelte-toast';

  /* -------------------------------------------------------------------------- */
  /*                          Initializers and Settings                         */
  /* -------------------------------------------------------------------------- */
  let checkboxList: boolean[];
  let personalizedCommand: string;
  let selectAll: boolean = false;
  let wingetCount: number = wingetMetadata.length;
  let spacing: string = 'w-11/12 mx-auto mt-4';

  wingetMetadata.sort(sortByTitle);
  selectDeselectAll();

  // Update the personalized winget command
  function refreshCli(): void {
    personalizedCommand = generatePersonalizedCommand(checkboxList, wingetMetadata);
  }

  // Select/deselect all the winget app cards
  function selectDeselectAll(): void {
    checkboxList = generateBooleanList(selectAll, wingetCount);
    refreshCli();
  }
</script>

<!-- -------------------------------------------------------------------------- -->
<!--                                HTML and CSS                                -->
<!-- -------------------------------------------------------------------------- -->

<Navbar />
<Hero {spacing} />

<div on:change={() => selectDeselectAll()}>
  <PersonalizedCommand {spacing} checkedCLI={personalizedCommand} bind:checked={selectAll} />
</div>

<SectionHeader {spacing} icon="fa-solid fa-laptop-code" text="Winget Apps" />
<div on:change={() => refreshCli()} class="{spacing} mb-12 grid gap-4 md:grid-cols-3">
  {#each wingetMetadata as app, index}
    <WingetCard
      icon={app.icon}
      title={app.title}
      subtitle={app.subtitle}
      free={app.free}
      open={app.open}
      website={app.website}
      cli={generateWingetCommand(app.cli)}
      bind:checked={checkboxList[index]} />
  {/each}
</div>

<SectionHeader {spacing} icon="fa-solid fa-shapes" text="Browser Extensions" />
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
