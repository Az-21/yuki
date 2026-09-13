<script lang="ts">
  import Snowflake from "@lucide/svelte/icons/snowflake";

  import { github } from "#icons";
  import { Icon, SvgIcon } from "#lib/components/shared/icon/index.ts";
  import { ModeToggle } from "#lib/components/shared/mode-toggle/index.ts";
  import { Button } from "#lib/components/ui/button/index.ts";
  import { cn } from "#lib/utils.js";

  const repositoryUrl = "https://github.com/Az-21/yuki";

  let { class: className }: { class?: string } = $props();
</script>

<header data-slot="navbar" class={cn("flex items-center justify-between gap-4 border-b py-4", className)}>
  <a href="/" class="font-heading flex items-center gap-2 text-xl font-semibold">
    <Icon icon={Snowflake} size="md" />
    Yuki
  </a>
  <div class="flex items-center gap-2">
    <ModeToggle />
    <Button variant="outline" size="icon" href={repositoryUrl} aria-label="GitHub repository">
      <SvgIcon icon={github} size="sm" />
    </Button>
  </div>
</header>
