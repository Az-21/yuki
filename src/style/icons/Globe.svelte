<script lang="ts">
  export let url: string;

  const icon: string = 'fa-solid fa-globe fa-xl text-white';
</script>

<a href={url}><i class="{icon} hover:scale-150 hover:animate-pulse transition" /></a>
