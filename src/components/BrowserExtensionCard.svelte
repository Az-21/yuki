<script lang="ts">
  import Chrome from '$icons/Chrome.svelte';
  import Edge from '$icons/Edge.svelte';
  import Firefox from '$icons/Firefox.svelte';
  import GitHub from '$icons/GitHub.svelte';
  import Globe from '$icons/Globe.svelte';
  import RightArrow from '$icons/RightArrow.svelte';

  export let title: string;
  export let info: string;
  export let chromeId: string;
  export let edgeId: string;
  export let firefoxId: string;
  export let website: string;

  const prose: string = 'prose prose-invert max-w-lg';
</script>

<div class={prose}>
  <h3><RightArrow /> {title}</h3>
  <ul>
    <li>
      <Edge id={edgeId} />
      <Chrome id={chromeId} />
      <Firefox id={firefoxId} />
      {#if website.slice(0, 4) === 'http'}
        <Globe url={website} />
      {:else}
        <GitHub id={website} />
      {/if}
    </li>
    <li>{info}</li>
  </ul>
</div>
