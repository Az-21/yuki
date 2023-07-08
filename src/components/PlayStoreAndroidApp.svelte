<script lang="ts">
  import AdsBadge from '$components/AdsBadge.svelte';
  import RightArrow from '$icons/RightArrow.svelte';

  export let title: string;
  export let info: string;
  export let playStoreId: string;
  export let revenue: number;
  const prose: string = 'prose prose-invert max-w-lg';

  let url: string = `https://play.google.com/store/apps/details?id=${playStoreId}`;
</script>

<div class={prose}>
  <h3><RightArrow /> {title}</h3>
  <ul>
    <li class="space-x-4">
      <a href={url}>
        <i class="fa-brands fa-xl fa-google-play text-emerald-500 hover:scale-150 hover:animate-pulse transition" />
      </a>
      <AdsBadge {revenue} />
    </li>
    <li>
      {info}
    </li>
  </ul>
</div>
