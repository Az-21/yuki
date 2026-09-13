<script lang="ts" module>
  export type CopyButtonProps = {
    value: string;
    /** Accessible name for the button. Defaults to "Copy". */
    label?: string;
    class?: string;
  };
</script>

<script lang="ts">
  import Check from "@lucide/svelte/icons/check";
  import Copy from "@lucide/svelte/icons/copy";
  import { onDestroy } from "svelte";
  import { scale } from "svelte/transition";

  import { Icon } from "#lib/components/shared/icon/index.ts";
  import { Button } from "#lib/components/ui/button/index.ts";
  import { motion } from "#lib/utils/index.ts";

  let { value, label = "Copy", class: className }: CopyButtonProps = $props();

  let copied = $state(false);
  let reset: ReturnType<typeof setTimeout> | undefined;

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      return;
    }
    copied = true;
    clearTimeout(reset);
    reset = setTimeout(() => (copied = false), 1500);
  }

  onDestroy(() => clearTimeout(reset));
</script>

<Button variant="ghost" size="icon-sm" class={className} aria-label={copied ? "Copied" : label} onclick={copy}>
  {#if copied}
    <span in:scale={{ duration: motion.duration.fast, easing: motion.easing.standard, start: 0.4 }}>
      <Icon icon={Check} size="sm" class="text-green-600 dark:text-green-400" />
    </span>
  {:else}
    <span in:scale={{ duration: motion.duration.fast, easing: motion.easing.standard, start: 0.4 }}>
      <Icon icon={Copy} size="sm" />
    </span>
  {/if}
</Button>
