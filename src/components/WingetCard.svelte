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
      <i class="fa-regular fa-square-check text-emerald-500"></i> Copied!
      <br>
      ${title}'s winget command copied to clipboard
      `,
      { pausable: true }
    );
    app.$destroy();
  }
</script>

<div class="relative mx-auto w-full rounded-lg bg-neutral-900 p-6 text-white">
  <!-- Title -->
  <div class="flex justify-between">
    <div class="flex items-end space-x-4">
      <img class="h-10 w-10 rounded-md" src={icon} alt={title.toLowerCase()} />
      <p class="text-lg font-bold">
        {title}
      </p>
    </div>
    <input class="h-6 w-6 opacity-70" type="checkbox" bind:checked />
  </div>

  <!-- Details -->
  <div class="mt-2 flex items-center space-x-6 text-xs font-bold">
    <div class="flex items-baseline gap-1">
      {#if free === 0}
        <i class="fa-solid fa-sm fa-circle-dollar-to-slot text-emerald-400" />
        <p>Free</p>
      {:else if free === 1}
        <i class="fa-solid fa-sm fa-hand-holding-dollar text-blue-400" />
        <p>Freemium</p>
      {:else}
        <i class="fa-solid fa-sm fa-money-check-dollar text-red-400" />
        <p>Paid</p>
      {/if}
    </div>
    <div class="flex items-baseline gap-1">
      {#if open === 0}
        <i class="fa-solid fa-sm fa-code-branch text-emerald-400" />
        <p>Open Source</p>
      {:else if open === 1}
        <i class="fa-solid fa-sm fa-code-pull-request text-blue-400" />
        <p>Open Core</p>
      {:else}
        <i class="fa-solid fa-sm fa-eye-slash text-red-400" />
        <p>Proprietary</p>
      {/if}
    </div>
    <div class="flex items-baseline gap-1">
      <i class="fa-solid fa-sm fa-up-right-from-square text-white" />
      <a href={website} class="text-blue-500">Website</a>
    </div>
  </div>

  <!-- Subtitle -->
  <p class="mt-2 mb-16 text-sm pt-4">{subtitle}</p>

  <!-- winget CLI -->
  <div class="absolute inset-x-0 bottom-0 flex items-center space-x-4 px-4 py-4">
    <textarea
      class="h-14 w-full overflow-x-auto rounded bg-transparent py-5 text-center font-mono text-xs text-zinc-500 ring-2 ring-zinc-800"
      spellcheck="false"
      readonly
      value={cli}
      wrap="off"
      style="resize: none;"
    />
    <div on:click={() => copy(cli, title)}>
      <i class="fa-regular fa-copy fa-xl text-white hover:text-emerald-400" />
    </div>
  </div>

  <!-- Hidden element to enable copy to clipboard -->
  <div id="clipboard" />
</div>
