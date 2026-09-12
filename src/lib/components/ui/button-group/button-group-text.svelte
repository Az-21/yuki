<script lang="ts">
  import type { Snippet } from "svelte";
  import type { HTMLAttributes } from "svelte/elements";

  import { cn, type WithElementRef } from "#lib/utils.js";

  let {
    ref = $bindable(null),
    class: className,
    child,
    ...restProps
  }: WithElementRef<HTMLAttributes<HTMLDivElement>> & {
    child?: Snippet<[{ props: Record<string, unknown> }]>;
  } = $props();

  const mergedProps = $derived({
    ...restProps,
    class: cn(
      "gap-2 border border-transparent border-b-input bg-transparent px-2.5 text-xs font-semibold [&_svg:not([class*='size-'])]:size-3.5 group-has-[>[data-variant=outline]]/button-group:border-border uppercase flex items-center [&_svg]:pointer-events-none",
      className,
    ),
    "data-slot": "button-group-text",
  });
</script>

{#if child}
  {@render child({ props: mergedProps })}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render mergedProps.children?.()}
  </div>
{/if}
