<script lang="ts" module>
  export type SectionHeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
</script>

<script lang="ts">
  import { cn } from "#lib/utils.js";

  type SectionProps = {
    title: string;
    /** Optional supporting text shown under the title. */
    subtitle?: string;
    /** Heading level for the title. Defaults to 2 so a page's own h1 stays unique. */
    level?: SectionHeadingLevel;
    class?: string;
  };

  let { title, subtitle, level = 2, class: className }: SectionProps = $props();
</script>

<div data-slot="section" class={cn("flex flex-col gap-1", className)}>
  <svelte:element this={`h${level}`} class="font-heading text-2xl font-semibold">
    {title}
  </svelte:element>
  {#if subtitle}
    <p class="text-muted-foreground text-sm">{subtitle}</p>
  {/if}
</div>
