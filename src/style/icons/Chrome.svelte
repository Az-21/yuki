<script lang="ts">
  export let id: string;

  const url: string = 'https://chrome.google.com/webstore/detail/';
  const icon: string = 'fa-brands fa-chrome fa-xl text-blue-400';
</script>

<a href="{url}{id}"><i class="{icon} hover:scale-150 hover:animate-pulse transition" /></a>
