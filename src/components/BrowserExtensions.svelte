<script lang="ts">
  import Chrome from '$style/icons/Chrome.svelte';
  import Edge from '$style/icons/Edge.svelte';
  import Firefox from '$style/icons/Firefox.svelte';
  import GitHub from '$style/icons/GitHub.svelte';

  export let spacing: string;
</script>

<div
  class="{spacing} prose prose-invert w-full max-w-none rounded-lg bg-neutral-900 px-8 py-4 shadow-md">
  <!--  -->
  <h3>uBlock Origin</h3>
  <ul>
    <li>
      Links
      <Edge id="ublock-origin/odfafepnkmbhccpbejgmiehpchacaeak" />
      <Chrome id="ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm" />
      <Firefox id="ublock-origin" />
      <GitHub id="gorhill/uBlock" />
    </li>
    <li>Blocks ads. Highly customizable and extensible via community maintained filters.</li>
  </ul>
</div>
