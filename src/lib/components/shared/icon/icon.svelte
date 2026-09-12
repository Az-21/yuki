<script lang="ts" module>
  import type { Component } from "svelte";
  import type { SVGAttributes } from "svelte/elements";
  import { tv, type VariantProps } from "tailwind-variants";

  export const lucideIconVariants = tv({
    base: "shrink-0",
    variants: {
      size: {
        sm: "size-4",
        md: "size-5",
        lg: "size-6",
      },
    },
    defaultVariants: {
      size: "md",
    },
  });

  export type IconSize = VariantProps<typeof lucideIconVariants>["size"];

  export type IconComponent = Component<{ class?: string } & Record<string, unknown>>;

  export type IconProps = Omit<SVGAttributes<SVGSVGElement>, "class"> & {
    icon: IconComponent;
    size?: IconSize;
    /** Accessible name. Omit to mark the icon as decorative. */
    label?: string;
    class?: string;
  };
</script>

<script lang="ts">
  import { cn } from "#lib/utils.js";

  let { icon: Icon, size = "md", label, class: className, ...rest }: IconProps = $props();
</script>

<Icon
  data-slot="icon"
  class={cn(lucideIconVariants({ size }), className)}
  role={label ? "img" : undefined}
  aria-label={label}
  aria-hidden={label ? undefined : "true"}
  {...rest}
/>
