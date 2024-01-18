<script lang="ts">
  import AdsBadge from '$components/AdsBadge.svelte';

  export let title: string;
  export let info: string;
  export let playStoreId: string;
  export let revenue: number;
  const prose: string = 'prose prose-invert max-w-lg';

  let url: string = `https://play.google.com/store/apps/details?id=${playStoreId}`;
</script>

<div class={prose}>
  <h3>
    <AdsBadge {revenue} />
    <a href={url} class="no-underline">
      {title}
      <i class="pl-1 scale-75 fa-solid fa-sm fa-up-right-from-square text-white" />
    </a>
  </h3>

  <div class="pt-1">
    {info}
  </div>
</div>
