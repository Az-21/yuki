<script lang="ts" module>
  import type { Component } from "svelte";
  import type { SVGAttributes } from "svelte/elements";

  import type { IconSize } from "./variants";

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

  import { iconVariants } from "./variants";

  let { icon: Icon, size = "md", label, class: className, ...rest }: IconProps = $props();
</script>

<Icon
  {...rest}
  data-slot="icon"
  class={cn(iconVariants({ size }), className)}
  role={label ? "img" : undefined}
  aria-label={label}
  aria-hidden={label ? undefined : "true"}
/>
