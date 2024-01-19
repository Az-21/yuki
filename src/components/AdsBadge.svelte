<script lang="ts">
  export let revenue: number;
  const button: string = 'h-max rounded bg-neutral-800 p-2 text-xs font-black uppercase text-neutral-200';
</script>

{#if revenue === 0}
  <button disabled class={button}>
    <i class="fa-solid fa-heart text-green-500 pr-1" /> Ad Free
  </button>
{:else if revenue === 1}
  <button disabled class={button}>
    <i class="fa-solid fa-rectangle-ad text-indigo-500 pr-1" /> Ad Supported
  </button>
{:else}
  <button disabled class={button}>
    <i class="fa-solid fa-money-check-dollar text-red-500 pr-1" /> Paid App
  </button>
{/if}
