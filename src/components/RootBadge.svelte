<script lang="ts">
  export let rootRequired: number;
</script>

{#if rootRequired === 0}
  <button
    disabled
    class="h-max rounded bg-green-500 p-2 text-xs font-black uppercase text-neutral-900">
    Root <i class="fa-solid fa-caret-right px-2" /> Not Required
  </button>
{:else if rootRequired === 1}
  <button
    disabled
    class="h-max rounded bg-blue-500 p-2 text-xs font-black uppercase text-neutral-900">
    Root <i class="fa-solid fa-caret-right px-2" /> Optional
  </button>
{:else}
  <button
    disabled
    class="h-max rounded bg-red-500 p-2 text-xs font-black uppercase text-neutral-900">
    Root <i class="fa-solid fa-caret-right px-2" /> Required
  </button>
{/if}
