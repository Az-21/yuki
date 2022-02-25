<script lang="ts">
  export let id: string;

  const url: string = 'https://addons.mozilla.org/en-US/firefox/addon/';
  const icon: string = 'fa-brands fa-firefox-browser fa-xl text-orange-400 pl-4';
</script>

<a href="{url}{id}"><i class={icon} /></a>
