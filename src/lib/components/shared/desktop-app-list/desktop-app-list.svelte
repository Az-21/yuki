<script lang="ts" module>
  import AppWindow from "@lucide/svelte/icons/app-window";
  import Apple from "@lucide/svelte/icons/apple";
  import Boxes from "@lucide/svelte/icons/boxes";
  import Terminal from "@lucide/svelte/icons/terminal";

  import type { IconComponent } from "#lib/components/shared/icon/index.ts";
  import type { DesktopApp, Source } from "#lib/db/index.ts";

  const sourceMeta: Record<Source, { label: string; icon: IconComponent; color: string }> = {
    winget: { label: "winget", icon: AppWindow, color: "text-blue-600 dark:text-blue-400" },
    brew: { label: "Homebrew", icon: Apple, color: "text-rose-600 dark:text-rose-400" },
    yay: { label: "yay", icon: Terminal, color: "text-cyan-600 dark:text-cyan-400" },
    mise: { label: "mise", icon: Boxes, color: "text-purple-600 dark:text-purple-400" },
  };

  const searchSelectors = [
    (app: DesktopApp) => app.name,
    (app: DesktopApp) => app.description,
    (app: DesktopApp) => app.tags,
  ];
</script>

<script lang="ts">
  import { flip } from "svelte/animate";
  import { fade } from "svelte/transition";

  import { CopyButton } from "#lib/components/shared/copy-button/index.ts";
  import { FilterSearch } from "#lib/components/shared/filter-search/index.ts";
  import { Icon } from "#lib/components/shared/icon/index.ts";
  import { MonetizationBadge } from "#lib/components/shared/monetization-badge/index.ts";
  import { TagList } from "#lib/components/shared/tag-list/index.ts";
  import { Checkbox } from "#lib/components/ui/checkbox/index.ts";
  import { InputGroup, InputGroupAddon, InputGroupInput } from "#lib/components/ui/input-group/index.ts";
  import { Item, ItemContent, ItemDescription, ItemTitle } from "#lib/components/ui/item/index.ts";
  import { TooltipProvider } from "#lib/components/ui/tooltip/index.ts";
  import { combinedSourceCommands, installableStores, installCommand, unavailableWarnings } from "#lib/db/index.ts";
  import { filterByText } from "#lib/filter.ts";
  import { motion } from "#lib/motion.ts";
  import { sortByName } from "#lib/sort.ts";

  let { apps }: { apps: DesktopApp[] } = $props();

  let query = $state("");
  let selected = $state<Record<string, boolean>>({});

  const filtered = $derived(sortByName(filterByText(apps, query, searchSelectors)));
  const selectedApps = $derived(apps.filter((app) => selected[app.name] ?? false));
  const combinedCommands = $derived(combinedSourceCommands(selectedApps));
  const warnings = $derived(unavailableWarnings(selectedApps));

  function toggle(name: string, checked: boolean) {
    selected = { ...selected, [name]: checked };
  }
</script>

{#snippet commandRow(source: Source, command: string)}
  {@const meta = sourceMeta[source]}
  <InputGroup>
    <InputGroupAddon>
      <Icon icon={meta.icon} size="sm" class={meta.color} />
    </InputGroupAddon>
    <InputGroupInput value={command} />
    <InputGroupAddon align="inline-end">
      <CopyButton value={command} label={`Copy ${meta.label} install command`} />
    </InputGroupAddon>
  </InputGroup>
{/snippet}

{#snippet combinedBlock()}
  <div class="flex flex-col gap-2">
    {#if combinedCommands.length > 0}
      {#each combinedCommands as { source, command } (source)}
        {@render commandRow(source, command)}
      {/each}
    {:else}
      <p class="text-muted-foreground text-sm">The selected apps have no install commands.</p>
    {/if}
    {#if warnings.length > 0}
      <ul class="text-destructive flex flex-col gap-1 text-sm">
        {#each warnings as warning (warning)}
          <li>{warning}</li>
        {/each}
      </ul>
    {/if}
  </div>
{/snippet}

<TooltipProvider>
  <div class="flex flex-col gap-4">
    <FilterSearch bind:value={query} placeholder="Search desktop apps" label="Search desktop apps" />

    {#if selectedApps.length > 0}
      {@render combinedBlock()}
    {/if}

    {#if filtered.length === 0}
      <p
        class="text-muted-foreground text-sm"
        in:fade={{ duration: motion.duration.fast, easing: motion.easing.standard }}
        out:fade={{ duration: motion.duration.fast, easing: motion.easing.standard }}
      >
        No apps match your filters.
      </p>
    {:else}
      <div class="grid items-start gap-4 md:grid-cols-2 xl:grid-cols-3">
        {#each filtered as app (app.name)}
          <div
            animate:flip={{ duration: motion.duration.normal, easing: motion.easing.standard }}
            out:fade={{ duration: motion.duration.fast, easing: motion.easing.standard }}
          >
            <Item variant="outline" class="flex-col items-stretch gap-4">
              <ItemContent class="flex-none">
                <div class="flex items-center gap-2">
                  <ItemTitle>{app.name}</ItemTitle>
                  <MonetizationBadge monetization={app.monetization} class="ml-auto" />
                  <Checkbox
                    checked={selected[app.name] ?? false}
                    onCheckedChange={(checked) => toggle(app.name, checked === true)}
                    aria-label={`Include ${app.name} in the combined install command`}
                  />
                </div>
                <ItemDescription>{app.description}</ItemDescription>
                <TagList tags={app.tags} />
              </ItemContent>
              <div class="flex flex-col gap-2">
                {#each installableStores(app) as store (store.source)}
                  {@const command = installCommand(store.source, store.id, store.cask)}
                  {@render commandRow(store.source, command)}
                {/each}
              </div>
            </Item>
          </div>
        {/each}
      </div>
    {/if}

    {#if selectedApps.length > 0}
      {@render combinedBlock()}
    {/if}
  </div>
</TooltipProvider>
