<script lang="ts">
  export let id: string;

  const url: string = 'https://microsoftedge.microsoft.com/addons/detail/';
  const icon: string = 'fa-brands fa-edge fa-xl text-emerald-400';
</script>

<a href="{url}{id}"><i class="{icon} hover:scale-150 hover:animate-pulse transition" /></a>
