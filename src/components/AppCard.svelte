<script lang="ts">
  import { toast } from '@zerodevx/svelte-toast';
  import Clipboard from './Clipboard.svelte';

  export let icon: string;
  export let title: string;
  export let subtitle: string;
  export let free: number;
  export let open: number;
  export let website: string;
  export let cli: string;
  export let checked: boolean;

  // Copy to clipboard
  function copy(cliCommand: string, title: string) {
    let name = cliCommand;
    const app = new Clipboard({
      target: document.getElementById('clipboard'),
      props: { name }
    });
    toast.push(
      `	
			<i class="fa-regular fa-square-check text-emerald-500"></i> 
			${title}'s winget command copied to clipboard
			`,
      { pausable: true }
    );
    app.$destroy();
  }
</script>

<div class="relative mx-auto w-full rounded-lg bg-neutral-900 p-6 shadow-lg">
  <!-- Title -->
  <div class="flex justify-between">
    <div class="flex items-end space-x-4">
      <img class="h-10 w-10" src={icon} alt={title.toLowerCase()} />
      <p class="text-lg font-bold text-white">
        {title}
      </p>
    </div>
    <input class="h-6 w-6 opacity-70" type="checkbox" bind:checked />
  </div>

  <!-- Details -->
  <div class="mt-2 flex items-end space-x-2 text-xs">
    {#if free === 0}<p>💠 Free</p>
    {:else if free === 1}<p>🎁 Freemium</p>
    {:else}<p>💲 Paid</p>{/if}

    {#if open === 0}<p>💖 Open Source</p>
    {:else if open === 1}<p>🎀 Open Core</p>
    {:else}<p>📑 Proprietary</p>{/if}

    <a href={website} target="_blank" class="text-blue-500">🗗 Website</a>
  </div>

  <!-- Subtitle -->
  <p class="mt-2 mb-16 text-sm">{subtitle}</p>

  <!-- winget CLI -->
  <div class="absolute inset-x-0 bottom-0 flex items-center space-x-4 px-4 py-4">
    <textarea
      type="text"
      class="h-9 w-full overflow-x-auto rounded bg-transparent px-2 pt-3 text-center font-mono text-xs text-neutral-500 ring-2 ring-neutral-700"
      spellcheck="false"
      readonly
      value={cli}
      wrap="off"
      style="resize: none;" />
    <div on:click={() => copy(cli, title)}>
      <i class="fa-regular fa-copy fa-xl text-white hover:text-emerald-400" />
    </div>
  </div>

  <!-- Hidden element to enable copy to clipboard -->
  <div id="clipboard" />
</div>
