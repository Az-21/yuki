<script lang="ts">
  import "./layout.css";
  import { ModeWatcher } from "mode-watcher";

  import favicon from "#lib/assets/favicon.svg";

  let { children } = $props();
</script>

<ModeWatcher defaultMode="dark" />

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<div class="mx-auto w-11/12">
  {@render children()}
</div>
