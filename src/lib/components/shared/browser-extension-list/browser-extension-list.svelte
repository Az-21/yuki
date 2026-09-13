<script lang="ts" module>
  import { chrome, edge, firefox } from "#icons";
  import type { Browser, BrowserExtension } from "#lib/db/index.ts";

  const storeMeta: Record<Browser, { label: string; icon: string; color: string }> = {
    edge: { label: "Edge", icon: edge, color: "text-emerald-600 dark:text-emerald-400" },
    firefox: { label: "Firefox", icon: firefox, color: "text-orange-500 dark:text-orange-400" },
    chrome: { label: "Chrome", icon: chrome, color: "text-blue-600 dark:text-blue-400" },
  };

  const searchSelectors = [
    (extension: BrowserExtension) => extension.name,
    (extension: BrowserExtension) => extension.description,
    (extension: BrowserExtension) => extension.tags,
  ];
</script>

<script lang="ts">
  import Globe from "@lucide/svelte/icons/globe";
  import Smartphone from "@lucide/svelte/icons/smartphone";
  import { flip } from "svelte/animate";
  import { fade } from "svelte/transition";

  import { github } from "#icons";
  import { FilterSearch } from "#lib/components/shared/filter-search/index.ts";
  import { Icon, SvgIcon } from "#lib/components/shared/icon/index.ts";
  import { MonetizationBadge } from "#lib/components/shared/monetization-badge/index.ts";
  import { TagList } from "#lib/components/shared/tag-list/index.ts";
  import { ButtonGroup } from "#lib/components/ui/button-group/index.ts";
  import { Button } from "#lib/components/ui/button/index.ts";
  import { Item, ItemActions, ItemContent, ItemDescription, ItemTitle } from "#lib/components/ui/item/index.ts";
  import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "#lib/components/ui/tooltip/index.ts";
  import { browserListingUrl } from "#lib/db/index.ts";
  import { filterByText, motion, sortByName, websiteKind } from "#lib/utils/index.ts";

  let { extensions }: { extensions: BrowserExtension[] } = $props();

  let query = $state("");

  const filtered = $derived(sortByName(filterByText(extensions, query, searchSelectors)));
</script>

<TooltipProvider>
  <div class="flex flex-col gap-2">
    <FilterSearch bind:value={query} placeholder="Search extensions" label="Search extensions" />

    {#if filtered.length === 0}
      <p
        class="text-muted-foreground text-sm"
        in:fade={{ duration: motion.duration.fast, easing: motion.easing.standard }}
        out:fade={{ duration: motion.duration.fast, easing: motion.easing.standard }}
      >
        No extensions match your filters.
      </p>
    {:else}
      <div class="grid items-start gap-4 md:grid-cols-2 xl:grid-cols-3">
        {#each filtered as extension (extension.name)}
          {@const website = extension.website}
          {@const site = websiteKind(website)}
          <div
            animate:flip={{ duration: motion.duration.normal, easing: motion.easing.standard }}
            out:fade={{ duration: motion.duration.fast, easing: motion.easing.standard }}
          >
            <Item variant="outline" class="flex-col items-stretch gap-4">
              <ItemContent class="flex-none">
                <div class="flex items-center gap-2">
                  <ItemTitle>{extension.name}</ItemTitle>
                  <MonetizationBadge monetization={extension.monetization} class="ml-auto" />
                </div>
                <ItemDescription>{extension.description}</ItemDescription>
                <TagList tags={extension.tags} />
              </ItemContent>
              <ItemActions class="flex-wrap gap-3">
                {#each extension.stores as store (store.browser)}
                  {@const meta = storeMeta[store.browser]}
                  {#if store.id !== null}
                    <ButtonGroup>
                      <Button variant="outline" size="sm" href={browserListingUrl(store.browser, store.id)}>
                        <SvgIcon icon={meta.icon} size="sm" class={meta.color} label={meta.label} />
                        {meta.label}
                      </Button>
                      {#if store.mobile}
                        <Tooltip>
                          <TooltipTrigger>
                            {#snippet child({ props })}
                              <Button
                                {...props}
                                variant="outline"
                                size="icon-sm"
                                aria-label={`Also available on the ${meta.label} phone app`}
                              >
                                <Icon icon={Smartphone} size="sm" />
                              </Button>
                            {/snippet}
                          </TooltipTrigger>
                          <TooltipContent>Also available on the {meta.label} phone app</TooltipContent>
                        </Tooltip>
                      {/if}
                    </ButtonGroup>
                  {/if}
                {/each}
                <Button variant="outline" size="sm" href={website}>
                  {#if site === "github"}
                    <SvgIcon icon={github} size="sm" label="GitHub" />
                    GitHub
                  {:else}
                    <Icon icon={Globe} size="sm" />
                    Website
                  {/if}
                </Button>
              </ItemActions>
            </Item>
          </div>
        {/each}
      </div>
    {/if}
  </div>
</TooltipProvider>
