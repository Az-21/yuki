<script lang="ts">
  import AdsBadge from '$components/AdsBadge.svelte';
  import RightArrow from '$icons/RightArrow.svelte';

  export let title: string;
  export let info: string;
  export let playStoreId: string;
  export let revenue: number;

  let url: string = `https://play.google.com/store/apps/details?id=${playStoreId}`;
</script>

<div class="bg-neutral-900 p-6 rounded-lg w-full text-white">
  <div class="flex pt-4 flex-row items-baseline justify-between">
    <a href={url} class="flex flex-row items-baseline no-underline hover:text-emerald-400">
      <RightArrow />
      <p class="text-xl font-bold">{title}</p>
      <i class="pl-2 scale-75 fa-solid fa-up-right-from-square text-white" />
    </a>
    <AdsBadge {revenue} />
  </div>

  <div class="pt-8">{info}</div>
</div>
