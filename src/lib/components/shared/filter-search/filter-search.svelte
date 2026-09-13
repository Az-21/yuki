<script lang="ts" module>
  export type FilterSearchProps = {
    value?: string;
    placeholder?: string;
    /** Accessible name for the input. Defaults to the placeholder. */
    label?: string;
    class?: string;
  };
</script>

<script lang="ts">
  import Search from "@lucide/svelte/icons/search";

  import { Icon } from "#lib/components/shared/icon/index.ts";
  import { InputGroup, InputGroupAddon, InputGroupInput } from "#lib/components/ui/input-group/index.ts";
  import { cn } from "#lib/utils.js";

  let {
    value = $bindable(""),
    placeholder = "Search",
    label = placeholder,
    class: className,
  }: FilterSearchProps = $props();
</script>

<InputGroup class={cn("ring-foreground/5 dark:ring-foreground/10 w-full ring-1", className)}>
  <InputGroupAddon>
    <Icon icon={Search} size="sm" />
  </InputGroupAddon>
  <InputGroupInput type="search" bind:value {placeholder} aria-label={label} />
</InputGroup>
