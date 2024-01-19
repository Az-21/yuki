<script lang="ts">
  export let firefoxId: string;
  export let firefoxAndroid: number;

  const url: string = 'https://addons.mozilla.org/en-US/firefox/addon/';
</script>

{#if firefoxAndroid === 1}
  <a href="{url}{firefoxId}">
    <button class="h-max rounded bg-neutral-800 p-2 text-xs font-black uppercase text-neutral-200">
      Available on Firefox for
      <i class="scale-150 px-2 fa-brands fa-android text-green-500" />
    </button>
  </a>
{/if}
