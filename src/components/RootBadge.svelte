<script lang="ts">
  export let rootRequired: number;
</script>

{#if rootRequired === 1}
  <button disabled class="h-max rounded bg-neutral-800 p-2 text-xs font-black uppercase text-neutral-200">
    Root+
  </button>
{/if}
{#if rootRequired === 2}
  <button disabled class="h-max rounded bg-red-500 p-2 text-xs font-black uppercase text-neutral-900">
    Root <i class="fa-solid fa-caret-right px-1" /> Required
  </button>
{/if}
