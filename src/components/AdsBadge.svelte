<script lang="ts">
  export let revenue: number;
</script>

{#if revenue === 0}
  <button
    disabled
    class="h-max rounded bg-green-500 p-2 text-xs font-black uppercase text-neutral-900">
    <i class="fa-solid fa-heart" /> Ad Free
  </button>
{:else if revenue === 1}
  <button
    disabled
    class="h-max rounded bg-indigo-500 p-2 text-xs font-black uppercase text-neutral-900">
    <i class="fa-solid fa-rectangle-ad" /> Ad Supported
  </button>
{:else}
  <button
    disabled
    class="h-max rounded bg-red-500 p-2 text-xs font-black uppercase text-neutral-900">
    <i class="fa-solid fa-money-check-dollar" /> Paid App
  </button>
{/if}
