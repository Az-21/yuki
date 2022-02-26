<script lang="ts">
  import AndroidAppCard from '$components/AndroidAppCard.svelte';
  import { sortByTitle } from '$static/Functions.svelte';
  import { androidAppMetadata } from '$static/Metadata.svelte';

  export let spacing: string;

  androidAppMetadata.sort(sortByTitle);
</script>

<div class="{spacing} grid gap-y-10 rounded-lg bg-neutral-900 px-8 py-4 shadow-md lg:grid-cols-2">
  {#each androidAppMetadata as app}
    <AndroidAppCard
      title={app.title}
      info={app.info}
      githubId={app.githubId}
      rootRequired={app.rootRequired} />
  {/each}
</div>
