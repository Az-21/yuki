<script lang="ts" module>
  import type { HTMLAttributes } from "svelte/elements";
  import { tv, type VariantProps } from "tailwind-variants";

  export const svgIconVariants = tv({
    base: "shrink-0",
    variants: {
      size: {
        sm: "size-5",
        md: "size-6",
        lg: "size-7",
      },
    },
    defaultVariants: {
      size: "md",
    },
  });

  export type SvgIconSize = VariantProps<typeof svgIconVariants>["size"];

  export type SvgIconProps = Omit<HTMLAttributes<HTMLSpanElement>, "class"> & {
    /** Raw inline SVG markup, e.g. from `import icon from "…svg?raw"`. */
    icon: string;
    size?: SvgIconSize;
    /** Accessible name. Omit to mark the icon as decorative. */
    label?: string;
    class?: string;
  };
</script>

<script lang="ts">
  import { cn } from "#lib/utils.js";

  let { icon, size = "md", label, class: className, ...rest }: SvgIconProps = $props();
</script>

<span
  data-slot="svg-icon"
  class={cn(svgIconVariants({ size }), "inline-flex [&>svg]:block [&>svg]:size-full", className)}
  role={label ? "img" : undefined}
  aria-label={label}
  aria-hidden={label ? undefined : "true"}
  {...rest}
>
  {@html icon}
</span>
