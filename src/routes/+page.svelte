<script lang="ts">
  import { BrowserExtensionList } from "#lib/components/shared/browser-extension-list/index.ts";
  import { PhoneAppList } from "#lib/components/shared/phone-app-list/index.ts";
  import { Section } from "#lib/components/shared/section/index.ts";
  import { browserExtensions, phoneApps } from "#lib/db/index.ts";
</script>

<main class="flex flex-col gap-2 py-10">
  <Section title="Browser Extensions" level={2} />
  <BrowserExtensionList extensions={browserExtensions} />
  <Section title="Phone Apps" level={2} />
  <PhoneAppList apps={phoneApps} />
</main>
