<script lang="ts">
  import Moon from "@lucide/svelte/icons/moon";
  import Sun from "@lucide/svelte/icons/sun";
  import { toggleMode } from "mode-watcher";

  import { Button } from "#lib/components/ui/button/index.ts";

  let { class: className }: { class?: string } = $props();
</script>

<Button variant="outline" size="icon" class={className} onclick={toggleMode} aria-label="Toggle theme">
  <span class="grid place-items-center" aria-hidden="true">
    <span class="col-start-1 row-start-1 scale-100 rotate-0 transition-all! dark:scale-0 dark:-rotate-90">
      <Sun class="size-5" />
    </span>
    <span class="col-start-1 row-start-1 scale-0 rotate-90 transition-all! dark:scale-100 dark:rotate-0">
      <Moon class="size-5" />
    </span>
  </span>
</Button>
