<script lang="ts">
  export let id: string;

  const url: string = 'https://addons.mozilla.org/en-US/firefox/addon/';
  const icon: string = 'fa-brands fa-firefox-browser fa-xl text-orange-400';
</script>

<a href="{url}{id}"><i class="{icon} hover:scale-150 hover:animate-pulse transition" /></a>
