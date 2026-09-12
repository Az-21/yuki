<script lang="ts">
  import type { ComponentProps } from "svelte";

  import { Input } from "#lib/components/ui/input/index.js";
  import { cn } from "#lib/utils.js";

  let {
    ref = $bindable(null),
    value = $bindable(),
    class: className,
    ...props
  }: ComponentProps<typeof Input> = $props();
</script>

<Input
  bind:ref
  data-slot="input-group-control"
  class={cn(
    "flex-1 border-0 bg-transparent ring-0 group-has-[>[data-align=inline-end]]/input-group:pr-2 group-has-[>[data-align=inline-start]]/input-group:pl-2 focus-visible:ring-0 aria-invalid:ring-0 dark:bg-transparent",
    className,
  )}
  bind:value
  {...props}
/>
