<script lang="ts">
  import OffStoreAndroidApp from '$components/OffStoreAndroidApp.svelte';
  import SubSectionHeader from '$components/SubSectionHeader.svelte';
  import { sortByTitle } from '$static/Functions.svelte';
  import { offStoreAndroidAppMetadata } from '$static/Metadata.svelte';

  export let spacing: string;

  offStoreAndroidAppMetadata.sort(sortByTitle);
</script>

<div class="{spacing} rounded-lg bg-neutral-900 px-8 py-4 shadow-md">
  <div>
    <SubSectionHeader
      spacing="mb-4"
      text="Off Store Apps"
      icon="fa-brands fa-github-square text-white" />
  </div>
  <div class="grid gap-y-10 lg:grid-cols-2">
    {#each offStoreAndroidAppMetadata as app}
      <OffStoreAndroidApp
        title={app.title}
        info={app.info}
        githubId={app.githubId}
        rootRequired={app.rootRequired} />
    {/each}
  </div>
</div>
