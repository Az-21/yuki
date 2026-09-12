<script lang="ts">
  import { Switch as SwitchPrimitive } from "bits-ui";

  import { cn, type WithoutChildrenOrChild } from "#lib/utils.js";

  let {
    ref = $bindable(null),
    class: className,
    checked = $bindable(false),
    size = "default",
    ...restProps
  }: WithoutChildrenOrChild<SwitchPrimitive.RootProps> & {
    size?: "sm" | "default";
  } = $props();
</script>

<SwitchPrimitive.Root
  bind:ref
  bind:checked
  data-slot="switch"
  data-size={size}
  class={cn(
    "data-checked:bg-primary data-unchecked:bg-input data-checked:border-primary data-unchecked:border-input/50 focus-visible:border-ring focus-visible:ring-ring/30 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 group-has-[:focus-visible]/field-label:data-unchecked:border-input/50 group-has-[:focus-visible]/field-label:data-checked:border-primary peer group/switch relative inline-flex shrink-0 items-center rounded-none border transition-all outline-none group-has-[:focus-visible]/field-label:ring-0 after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:ring-2 aria-invalid:ring-2 data-disabled:cursor-not-allowed data-disabled:opacity-50 data-[size=default]:h-4.5 data-[size=default]:w-8.25 data-[size=sm]:h-3.5 data-[size=sm]:w-6.25",
    className,
  )}
  {...restProps}
>
  <SwitchPrimitive.Thumb
    data-slot="switch-thumb"
    class={cn(
      "bg-background dark:data-unchecked:bg-foreground dark:data-checked:bg-primary-foreground pointer-events-none block ring-0 transition-transform group-data-[size=default]/switch:size-3.5 group-data-[size=sm]/switch:size-2.5 data-checked:translate-x-[calc(100%_+_2px)] data-unchecked:translate-x-0.25",
      "rtl:data-[state=checked]:translate-x-[calc(-100%)]",
    )}
  />
</SwitchPrimitive.Root>
