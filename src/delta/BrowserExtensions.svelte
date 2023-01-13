<script lang="ts">
  import BrowserExtensionCard from '$components/BrowserExtensionCard.svelte';
  import { sortByTitle } from '$static/Functions.svelte';
  import { browserExtensionMetadata } from '$static/Metadata.svelte';

  export let spacing: string;

  browserExtensionMetadata.sort(sortByTitle);
</script>

<div class="{spacing} grid gap-y-10 rounded-lg bg-neutral-900 px-8 py-4 shadow-md lg:grid-cols-2">
  {#each browserExtensionMetadata as extension}
    <BrowserExtensionCard
      title={extension.title}
      info={extension.info}
      edgeId={extension.edgeId}
      chromeId={extension.chromeId}
      firefoxId={extension.firefoxId}
      website={extension.website}
    />
  {/each}
</div>
