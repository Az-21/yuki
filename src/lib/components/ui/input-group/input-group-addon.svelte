<script lang="ts" module>
  import { tv, type VariantProps } from "tailwind-variants";
  export const inputGroupAddonVariants = tv({
    base: "text-muted-foreground **:data-[slot=kbd]:bg-muted-foreground/10 h-auto gap-2 py-2 text-sm font-medium group-data-[disabled=true]/input-group:opacity-50 **:data-[slot=kbd]:rounded-none **:data-[slot=kbd]:px-1.5 [&>svg:not([class*='size-'])]:size-3.5 flex cursor-text items-center justify-center select-none",
    variants: {
      align: {
        "inline-start": "order-first",
        "inline-end": "order-last",
        "block-start": "pt-3 group-has-[>input]/input-group:pt-3.5 [.border-b]:pb-3.5 order-first w-full justify-start",
        "block-end": "pb-3 group-has-[>input]/input-group:pb-3.5 [.border-t]:pt-3.5 order-last w-full justify-start",
      },
    },
    defaultVariants: {
      align: "inline-start",
    },
  });

  export type InputGroupAddonAlign = VariantProps<typeof inputGroupAddonVariants>["align"];
</script>

<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";

  import { cn, type WithElementRef } from "#lib/utils.js";

  let {
    ref = $bindable(null),
    class: className,
    children,
    align = "inline-start",
    ...restProps
  }: WithElementRef<HTMLAttributes<HTMLDivElement>> & {
    align?: InputGroupAddonAlign;
  } = $props();
</script>

<div
  bind:this={ref}
  role="group"
  data-slot="input-group-addon"
  data-align={align}
  class={cn(inputGroupAddonVariants({ align }), className)}
  onclick={(e) => {
    if ((e.target as HTMLElement).closest("button")) {
      return;
    }
    e.currentTarget.parentElement?.querySelector("input")?.focus();
  }}
  {...restProps}
>
  {@render children?.()}
</div>
