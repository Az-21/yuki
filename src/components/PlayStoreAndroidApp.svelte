<script lang="ts">
  import AdsBadge from '$components/AdsBadge.svelte';

  export let title: string;
  export let info: string;
  export let playStoreId: string;
  export let revenue: number;
  const prose: string = 'prose prose-invert';

  let url: string = `https://play.google.com/store/apps/details?id=${playStoreId}`;
</script>

<div class="bg-neutral-900 p-6 rounded-lg w-full">
  <div class={prose}>
    <h3 class="flex flex-row items-end place-content-between">
      <a href={url} class="flex flex-row no-underline">
        {title}
        <i class="pl-2 scale-75 fa-solid fa-sm fa-up-right-from-square text-white" />
      </a>
      <AdsBadge {revenue} />
    </h3>

    <div class="pt-4">{info}</div>
  </div>
</div>
