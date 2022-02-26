<script lang="ts">
  export let url: string;
  const icon: string = 'fa-solid fa-download fa-xl text-emerald-500';
</script>

<a href={url}><i class={icon} /></a>
