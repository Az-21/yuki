<script lang="ts" module>
  import { type VariantProps, tv } from "tailwind-variants";

  export const badgeVariants = tv({
    base: "gap-1.5 rounded-none border-0 bg-transparent px-0 py-0 text-[0.625rem] font-semibold uppercase tracking-widest transition-colors has-data-[icon=inline-end]:pr-0 has-data-[icon=inline-start]:pl-0 [&>svg]:size-3! group/badge inline-flex w-fit shrink-0 items-center justify-center overflow-hidden whitespace-nowrap focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none",
    variants: {
      variant: {
        default: "text-foreground [a]:hover:text-foreground/70",
        secondary: "text-muted-foreground [a]:hover:text-foreground",
        destructive:
          "text-destructive [a]:hover:text-destructive/70 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",
        outline: "text-foreground [a]:hover:text-foreground/70",
        ghost: "text-muted-foreground hover:text-foreground",
        link: "text-foreground underline-offset-4 hover:underline",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  });

  export type BadgeVariant = VariantProps<typeof badgeVariants>["variant"];
</script>

<script lang="ts">
  import type { HTMLAnchorAttributes } from "svelte/elements";

  import { cn, type WithElementRef } from "#lib/utils.js";

  let {
    ref = $bindable(null),
    href,
    class: className,
    variant = "default",
    children,
    ...restProps
  }: WithElementRef<HTMLAnchorAttributes> & {
    variant?: BadgeVariant;
  } = $props();
</script>

<svelte:element
  this={href ? "a" : "span"}
  bind:this={ref}
  data-slot="badge"
  {href}
  class={cn(badgeVariants({ variant }), className)}
  {...restProps}
>
  {@render children?.()}
</svelte:element>
