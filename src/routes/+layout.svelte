<script lang="ts">
  import "./layout.css";
  import { ModeWatcher } from "mode-watcher";

  import favicon from "#lib/assets/favicon.svg";
  import { Navbar } from "#lib/components/shared/navbar/index.ts";

  let { children } = $props();
</script>

<ModeWatcher defaultMode="dark" />

<svelte:head>
  <title>Yuki</title>
  <link rel="icon" href={favicon} />
</svelte:head>

<div class="mx-auto w-11/12">
  <Navbar />
  {@render children()}
</div>
