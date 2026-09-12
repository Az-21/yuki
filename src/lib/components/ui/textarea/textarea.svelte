<script lang="ts">
  import type { HTMLTextareaAttributes } from "svelte/elements";

  import { cn, type WithElementRef, type WithoutChildren } from "#lib/utils.js";

  let {
    ref = $bindable(null),
    value = $bindable(),
    class: className,
    "data-slot": dataSlot = "textarea",
    ...restProps
  }: WithoutChildren<WithElementRef<HTMLTextareaAttributes>> = $props();
</script>

<textarea
  bind:this={ref}
  data-slot={dataSlot}
  class={cn(
    "border-b-input focus-visible:border-b-ring aria-invalid:border-b-destructive dark:aria-invalid:border-b-destructive/50 placeholder:text-muted-foreground flex field-sizing-content min-h-16 w-full resize-none rounded-none border border-transparent bg-transparent px-0 py-3 text-base transition-[color,border-color] outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
    className,
  )}
  bind:value
  {...restProps}></textarea>
