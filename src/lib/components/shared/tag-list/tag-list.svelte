<script lang="ts" module>
  import type { Tag } from "#lib/db/index.ts";

  export type TagListProps = {
    tags: readonly Tag[];
    class?: string;
  };
</script>

<script lang="ts">
  import { Badge } from "#lib/components/ui/badge/index.ts";
  import { cn } from "#lib/utils.js";

  let { tags, class: className }: TagListProps = $props();
</script>

{#if tags.length > 0}
  <ul class={cn("flex flex-wrap gap-x-3 gap-y-1", className)}>
    {#each tags as tag (tag)}
      <li>
        <Badge variant="outline" class="rounded-full">{tag}</Badge>
      </li>
    {/each}
  </ul>
{/if}
