<script lang="ts" module>
  import Ad from "@lucide/svelte/icons/ad";
  import CircleDollarSign from "@lucide/svelte/icons/circle-dollar-sign";
  import Gem from "@lucide/svelte/icons/gem";
  import Gift from "@lucide/svelte/icons/gift";
  import Heart from "@lucide/svelte/icons/heart";

  import type { IconComponent } from "#lib/components/shared/icon/index.ts";
  import type { Monetization } from "#lib/db/index.ts";

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
</script>

<script lang="ts">
  import { Icon } from "#lib/components/shared/icon/index.ts";
  import { Badge } from "#lib/components/ui/badge/index.ts";
  import { Tooltip, TooltipContent, TooltipTrigger } from "#lib/components/ui/tooltip/index.ts";

  let { monetization, class: className }: { monetization: Monetization; class?: string } = $props();

  const meta = $derived(monetizationMeta[monetization]);
</script>

<Tooltip>
  <TooltipTrigger>
    {#snippet child({ props })}
      <Badge {...props} variant="secondary" class={className}>
        <Icon icon={meta.icon} size="sm" class={meta.color} />
        {meta.label}
      </Badge>
    {/snippet}
  </TooltipTrigger>
  <TooltipContent>{meta.tooltip}</TooltipContent>
</Tooltip>
