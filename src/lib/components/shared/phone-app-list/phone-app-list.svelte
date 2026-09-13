<script lang="ts" module>
  import Ad from "@lucide/svelte/icons/ad";
  import CircleDollarSign from "@lucide/svelte/icons/circle-dollar-sign";
  import Gem from "@lucide/svelte/icons/gem";
  import Gift from "@lucide/svelte/icons/gift";
  import Heart from "@lucide/svelte/icons/heart";

  import type { IconComponent } from "#lib/components/shared/icon/index.ts";
  import type { Monetization, PhoneApp, Store } from "#lib/db/index.ts";

  const storeMeta: Record<Store, { label: string }> = {
    app_store: { label: "App Store" },
    play_store: { label: "Play Store" },
    sideload: { label: "Sideload" },
  };

  const monetizationMeta: Record<Monetization, { label: string; tooltip: string; icon: IconComponent; color: string }> =
    {
      free: {
        label: "Free",
        tooltip: "No ads, no purchases",
        icon: Heart,
        color: "text-green-600 dark:text-green-400",
      },
      ad_supported: {
        label: "Ad Supported",
        tooltip: "Free, supported by ads",
        icon: Ad,
        color: "text-purple-600 dark:text-purple-400",
      },
      freemium_plus: {
        label: "Freemium Plus",
        tooltip: "Mostly feature complete with great usage limits",
        icon: Gift,
        color: "text-blue-600 dark:text-blue-400",
      },
      freemium_minus: {
        label: "Freemium Minus",
        tooltip: "Core features are gated or have low usage limits",
        icon: Gem,
        color: "text-orange-600 dark:text-orange-400",
      },
      paid: {
        label: "Paid",
        tooltip: "Requires a purchase",
        icon: CircleDollarSign,
        color: "text-red-600 dark:text-red-400",
      },
    };

  const searchSelectors = [(app: PhoneApp) => app.name, (app: PhoneApp) => app.description];
</script>

<script lang="ts">
  import Globe from "@lucide/svelte/icons/globe";
  import { flip } from "svelte/animate";
  import { fade } from "svelte/transition";

  import { appStore, github, googlePlay } from "#icons";
  import { FilterSearch } from "#lib/components/shared/filter-search/index.ts";
  import { Icon, SvgIcon } from "#lib/components/shared/icon/index.ts";
  import { Badge } from "#lib/components/ui/badge/index.ts";
  import { Button } from "#lib/components/ui/button/index.ts";
  import { Item, ItemActions, ItemContent, ItemDescription, ItemTitle } from "#lib/components/ui/item/index.ts";
  import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "#lib/components/ui/tooltip/index.ts";
  import { phoneAppListingUrl } from "#lib/db/index.ts";
  import { filterByText } from "#lib/filter.ts";
  import { motion } from "#lib/motion.ts";

  import { storeIconKind } from "./store-icon";

  let { apps }: { apps: PhoneApp[] } = $props();

  let query = $state("");

  const filtered = $derived(filterByText(apps, query, searchSelectors));
</script>

<TooltipProvider>
  <div class="flex flex-col gap-2">
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
      <div class="grid items-start gap-4 md:grid-cols-2 xl:grid-cols-3">
        {#each filtered as app (app.name)}
          {@const monetization = monetizationMeta[app.monetization]}
          <div
            animate:flip={{ duration: motion.duration.normal, easing: motion.easing.standard }}
            out:fade={{ duration: motion.duration.fast, easing: motion.easing.standard }}
          >
            <Item variant="outline" class="flex-col items-stretch gap-4">
              <ItemContent class="flex-none">
                <div class="flex items-center gap-2">
                  <ItemTitle>{app.name}</ItemTitle>
                  <Tooltip>
                    <TooltipTrigger>
                      {#snippet child({ props })}
                        <Badge {...props} variant="secondary" class="ml-auto">
                          <Icon icon={monetization.icon} size="sm" class={monetization.color} />
                          {monetization.label}
                        </Badge>
                      {/snippet}
                    </TooltipTrigger>
                    <TooltipContent>{monetization.tooltip}</TooltipContent>
                  </Tooltip>
                </div>
                <ItemDescription>{app.description}</ItemDescription>
              </ItemContent>
              <ItemActions class="flex-wrap gap-3">
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
              </ItemActions>
            </Item>
          </div>
        {/each}
      </div>
    {/if}
  </div>
</TooltipProvider>
