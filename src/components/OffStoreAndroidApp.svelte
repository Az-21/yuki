<script lang="ts">
  import Download from '$icons/Download.svelte';
  import GitHub from '$icons/GitHub.svelte';
  import RightArrow from '$icons/RightArrow.svelte';
  import RootBadge from './RootBadge.svelte';

  export let title: string;
  export let info: string;
  export let githubId: string;
  export let rootRequired: number;
  const prose: string = 'prose prose-invert max-w-lg';

  let url: string = `https://github.com/${githubId}/releases`;
</script>

<div class={prose}>
  <h3><RightArrow /> {title}</h3>
  <ul>
    <li class="space-x-4">
      <GitHub id={githubId} />
      {#if rootRequired !== 2}
        <Download {url} />
      {/if}
      <RootBadge {rootRequired} />
    </li>

    <li>
      {info}
    </li>
  </ul>
</div>
