<script lang="ts" module>
  import Boxes from "@lucide/svelte/icons/boxes";

  import { apple, arch, windows } from "#icons";
  import type { IconComponent } from "#lib/components/shared/icon/index.ts";
  import type { DesktopApp, Source } from "#lib/db/index.ts";

  /** Brand marks ship as raw SVG strings while mise still uses a Lucide component, so each source tags which renderer to use. */
  type SourceIcon = { kind: "svg"; value: string } | { kind: "component"; value: IconComponent };

  const sourceMeta: Record<Source, { label: string; icon: SourceIcon; color: string }> = {
    winget: { label: "winget", icon: { kind: "svg", value: windows }, color: "text-blue-600 dark:text-blue-400" },
    brew: { label: "Homebrew", icon: { kind: "svg", value: apple }, color: "text-foreground" },
    yay: { label: "yay", icon: { kind: "svg", value: arch }, color: "text-blue-600 dark:text-blue-400" },
    mise: { label: "mise", icon: { kind: "component", value: Boxes }, color: "text-green-600 dark:text-green-400" },
  };

  const searchSelectors = [
    (app: DesktopApp) => app.name,
    (app: DesktopApp) => app.description,
    (app: DesktopApp) => app.tags,
  ];
</script>

<script lang="ts">
  import TriangleAlert from "@lucide/svelte/icons/triangle-alert";
  import { flip } from "svelte/animate";
  import { fade } from "svelte/transition";

  import { CopyButton } from "#lib/components/shared/copy-button/index.ts";
  import { FilterSearch } from "#lib/components/shared/filter-search/index.ts";
  import { Icon, SvgIcon } from "#lib/components/shared/icon/index.ts";
  import { MonetizationBadge } from "#lib/components/shared/monetization-badge/index.ts";
  import { TagList } from "#lib/components/shared/tag-list/index.ts";
  import { Alert, AlertDescription } from "#lib/components/ui/alert/index.ts";
  import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "#lib/components/ui/card/index.ts";
  import { Checkbox } from "#lib/components/ui/checkbox/index.ts";
  import { InputGroup, InputGroupAddon, InputGroupInput } from "#lib/components/ui/input-group/index.ts";
  import { TooltipProvider } from "#lib/components/ui/tooltip/index.ts";
  import {
    combinedSourceCommands,
    installableStores,
    installCommand,
    sourceOrder,
    unavailableWarnings,
  } from "#lib/db/index.ts";
  import { filterByText, motion, sortByName } from "#lib/utils/index.ts";

  let { apps }: { apps: DesktopApp[] } = $props();

  let query = $state("");
  let selected = $state<Record<string, boolean>>({});

  const filtered = $derived(sortByName(filterByText(apps, query, searchSelectors)));
  const selectedApps = $derived(apps.filter((app) => selected[app.name] ?? false));
  const combinedCommands = $derived(combinedSourceCommands(selectedApps));
  const warnings = $derived(unavailableWarnings(selectedApps));

  /** One entry per source in stable order, with an empty command when nothing is selected or a source has no package. Rendering all of them keeps the aggregate a fixed height so ticking a checkbox fills a row instead of adding one. */
  const aggregateCommands = $derived(
    sourceOrder.map((source) => ({
      source,
      command: combinedCommands.find((entry) => entry.source === source)?.command ?? "",
    })),
  );

  function toggle(name: string, checked: boolean) {
    selected = { ...selected, [name]: checked };
  }
</script>

{#snippet commandRow(source: Source, command: string)}
  {@const meta = sourceMeta[source]}
  {@const empty = command.length === 0}
  <InputGroup>
    <InputGroupAddon>
      {#if meta.icon.kind === "svg"}
        <SvgIcon icon={meta.icon.value} size="sm" class={meta.color} />
      {:else}
        <Icon icon={meta.icon.value} size="sm" class={meta.color} />
      {/if}
    </InputGroupAddon>
    <InputGroupInput value={command} disabled={empty} placeholder={empty ? "$ > _" : undefined} />
    {#if !empty}
      <InputGroupAddon align="inline-end">
        <CopyButton value={command} label={`Copy ${meta.label} install command`} />
      </InputGroupAddon>
    {/if}
  </InputGroup>
{/snippet}

{#snippet combinedBlock()}
  <Card>
    <CardHeader>
      <CardTitle>Combined install commands</CardTitle>
    </CardHeader>
    <CardContent class="flex flex-col gap-4">
      {#each aggregateCommands as { source, command } (source)}
        {@render commandRow(source, command)}
      {/each}
      {#if selectedApps.length === 0}
        <p class="text-muted-foreground text-sm">
          Select one or more apps below to generate a combined install command.
        </p>
      {:else if combinedCommands.length === 0}
        <p class="text-muted-foreground text-sm">The selected apps have no install commands.</p>
      {/if}
      {#if warnings.length > 0}
        <Alert>
          <Icon icon={TriangleAlert} size="sm" />
          <AlertDescription>
            <ul class="flex flex-col gap-1">
              {#each warnings as warning (warning)}
                <li>{warning}</li>
              {/each}
            </ul>
          </AlertDescription>
        </Alert>
      {/if}
    </CardContent>
  </Card>
{/snippet}

<TooltipProvider>
  <div class="flex flex-col gap-4">
    <FilterSearch bind:value={query} placeholder="Search desktop apps" label="Search desktop apps" />

    {@render combinedBlock()}

    {#if filtered.length === 0}
      <p
        class="text-muted-foreground text-sm"
        in:fade={{ duration: motion.duration.fast, easing: motion.easing.standard }}
        out:fade={{ duration: motion.duration.fast, easing: motion.easing.standard }}
      >
        No apps match your filters.
      </p>
    {:else}
      <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {#each filtered as app (app.name)}
          <div
            class="h-full"
            animate:flip={{ duration: motion.duration.normal, easing: motion.easing.standard }}
            out:fade={{ duration: motion.duration.fast, easing: motion.easing.standard }}
          >
            <Card class="h-full">
              <CardHeader>
                <CardTitle>{app.name}</CardTitle>
                <CardDescription>{app.description}</CardDescription>
                <CardAction>
                  <div class="flex items-center gap-4">
                    <MonetizationBadge monetization={app.monetization} />
                    <Checkbox
                      checked={selected[app.name] ?? false}
                      onCheckedChange={(checked) => toggle(app.name, checked === true)}
                      aria-label={`Include ${app.name} in the combined install command`}
                    />
                  </div>
                </CardAction>
              </CardHeader>
              <CardContent class="flex flex-col gap-4">
                <TagList tags={app.tags} />
                {#each installableStores(app) as store (store.source)}
                  {@const command = installCommand(store.source, store.id, store.cask)}
                  {@render commandRow(store.source, command)}
                {/each}
              </CardContent>
            </Card>
          </div>
        {/each}
      </div>
    {/if}
  </div>
</TooltipProvider>
