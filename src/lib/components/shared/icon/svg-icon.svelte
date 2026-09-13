<script lang="ts" module>
  import type { HTMLAttributes } from "svelte/elements";

  import type { IconSize } from "./variants";

  export type SvgIconProps = Omit<HTMLAttributes<HTMLSpanElement>, "class"> & {
    /** Raw inline SVG markup, e.g. from `import icon from "…svg?raw"`. */
    icon: string;
    size?: IconSize;
    /** Accessible name. Omit to mark the icon as decorative. */
    label?: string;
    class?: string;
  };
</script>

<script lang="ts">
  import { cn } from "#lib/utils.js";

  import { iconVariants } from "./variants";

  let { icon, size = "md", label, class: className, ...rest }: SvgIconProps = $props();
</script>

<span
  {...rest}
  data-slot="svg-icon"
  class={cn(
    iconVariants({ size }),
    "inline-flex items-center justify-center [&>svg]:block [&>svg]:size-full!",
    className,
  )}
  role={label ? "img" : undefined}
  aria-label={label}
  aria-hidden={label ? undefined : "true"}
>
  {@html icon}
</span>
