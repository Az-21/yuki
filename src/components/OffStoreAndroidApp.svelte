<script lang="ts">
  import Download from '$icons/Download.svelte';
  import GitHub from '$icons/GitHub.svelte';
  import RightArrow from '$icons/RightArrow.svelte';
  import RootBadge from './RootBadge.svelte';

  export let title: string;
  export let info: string;
  export let githubId: string;
  export let rootRequired: number;

  let url: string = `https://github.com/${githubId}/releases`;
</script>

<div class="bg-neutral-900 p-6 rounded-lg w-full text-white">
  <div class="flex flex-row py-4 justify-between">
    <div class="text-xl font-bold"><RightArrow /> {title}</div>
    <RootBadge {rootRequired} />
  </div>
  <div class="flex flex-row space-x-6">
    <GitHub id={githubId} />
    {#if rootRequired !== 2}
      <Download {url} />
    {/if}
  </div>

  <p class="pt-8">{info}</p>
</div>
