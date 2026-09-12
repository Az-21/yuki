<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";

  import { cn, type WithElementRef } from "#lib/utils.js";

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...props
  }: WithElementRef<HTMLAttributes<HTMLDivElement>> = $props();
</script>

<div
  bind:this={ref}
  data-slot="input-group"
  role="group"
  class={cn(
    "group/input-group border-b-input has-[[data-slot=input-group-control]:focus-visible]:border-b-ring has-[[data-slot][aria-invalid=true]]:border-b-destructive dark:has-[[data-slot][aria-invalid=true]]:border-b-destructive/50 relative flex h-10 w-full min-w-0 items-center rounded-none border border-transparent bg-transparent transition-[color,border-color] outline-none in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-data-[align=block-end]:rounded-none has-data-[align=block-start]:rounded-none has-[textarea]:rounded-none has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>textarea]:h-auto has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=block-start]]:[&>input]:pb-3",
    className,
  )}
  {...props}
>
  {@render children?.()}
</div>
