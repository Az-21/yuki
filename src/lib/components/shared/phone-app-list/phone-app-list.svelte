<script lang="ts" module>
  import type { PhoneApp, Store } from "#lib/db/index.ts";

  const storeMeta: Record<Store, { label: string }> = {
    app_store: { label: "App Store" },
    play_store: { label: "Play Store" },
    sideload: { label: "Sideload" },
  };

  const searchSelectors = [
    (app: PhoneApp) => app.name,
    (app: PhoneApp) => app.description,
    (app: PhoneApp) => app.tags,
  ];
</script>

<script lang="ts">
  import Globe from "@lucide/svelte/icons/globe";
  import { flip } from "svelte/animate";
  import { fade } from "svelte/transition";

  import { appStore, github, googlePlay } from "#icons";
  import { FilterSearch } from "#lib/components/shared/filter-search/index.ts";
  import { Icon, SvgIcon } from "#lib/components/shared/icon/index.ts";
  import { MonetizationBadge } from "#lib/components/shared/monetization-badge/index.ts";
  import { TagList } from "#lib/components/shared/tag-list/index.ts";
  import { Button } from "#lib/components/ui/button/index.ts";
  import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "#lib/components/ui/card/index.ts";
  import { TooltipProvider } from "#lib/components/ui/tooltip/index.ts";
  import { phoneAppListingUrl } from "#lib/db/index.ts";
  import { filterByText, motion, sortByName } from "#lib/utils/index.ts";

  import { storeIconKind } from "./store-icon";

  let { apps }: { apps: PhoneApp[] } = $props();

  let query = $state("");

  const filtered = $derived(sortByName(filterByText(apps, query, searchSelectors)));
</script>

<TooltipProvider>
  <div class="flex flex-col gap-4">
    <FilterSearch bind:value={query} placeholder="Search apps" label="Search apps" />

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
                  <MonetizationBadge monetization={app.monetization} />
                </CardAction>
              </CardHeader>
              <CardContent>
                <TagList tags={app.tags} />
              </CardContent>
              <CardFooter class="flex-wrap gap-4">
                {#each app.stores as store (store.store)}
                  {#if store.id !== null}
                    {@const meta = storeMeta[store.store]}
                    {@const kind = storeIconKind(store.store, store.id)}
                    <Button variant="outline" size="sm" href={phoneAppListingUrl(store.store, store.id)}>
                      {#if kind === "app_store"}
                        <SvgIcon icon={appStore} size="sm" label="App Store" class="text-blue-600 dark:text-blue-400" />
                      {:else if kind === "play_store"}
                        <SvgIcon
                          icon={googlePlay}
                          size="sm"
                          label="Play Store"
                          class="text-green-600 dark:text-green-400"
                        />
                      {:else if kind === "github"}
                        <SvgIcon icon={github} size="sm" label="GitHub" />
                      {:else}
                        <Icon icon={Globe} size="sm" />
                      {/if}
                      {meta.label}
                    </Button>
                  {/if}
                {/each}
              </CardFooter>
            </Card>
          </div>
        {/each}
      </div>
    {/if}
  </div>
</TooltipProvider>
