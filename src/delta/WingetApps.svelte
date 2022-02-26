<script lang="ts">
  import PersonalizedCommand from '$components/PersonalizedCommand.svelte';
  import WingetCard from '$components/WingetCard.svelte';
  import {
    generateBooleanList,
    generatePersonalizedCommand,
    generateWingetCommand,
    sortByTitle
  } from '$static/Functions.svelte';
  import { wingetMetadata } from '$static/Metadata.svelte';

  export let spacing: string;

  let checkboxList: boolean[];
  let personalizedCommand: string;
  let selectAll: boolean = false;
  let wingetCount: number = wingetMetadata.length;

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

<div on:change={() => selectDeselectAll()}>
  <PersonalizedCommand {spacing} checkedCLI={personalizedCommand} bind:checked={selectAll} />
</div>

<div on:change={() => refreshCli()} class="{spacing} grid gap-4 md:grid-cols-3">
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
