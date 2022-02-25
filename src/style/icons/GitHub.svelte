<script lang="ts">
  export let id: string;

  const url: string = 'https://github.com/';
  const icon: string = 'fa-brands fa-github fa-xl text-white pl-4';
</script>

<a href="{url}{id}"><i class={icon} /></a>
