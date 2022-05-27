<script lang="ts">
  import Clipboard from '$components/Clipboard.svelte';
  import { toast } from '@zerodevx/svelte-toast';

  export let spacing: string;
  export let checkedCLI: string;
  export let checked: boolean;

  // Copy to clipboard
  function copy(cliCommand: string) {
    let name = cliCommand;
    const app = new Clipboard({
      target: document.getElementById('clipboard'),
      props: { name }
    });

    toast.push(
      `<i class="fa-regular fa-square-check text-emerald-500"></i> Success <br> Personalized winget command copied to clipboard`,
      { pausable: true }
    );
    app.$destroy();
  }
</script>

<div class="{spacing} w-full rounded-lg bg-neutral-900 px-8 py-4 shadow-md">
  <div class="place-content-between md:flex">
    <h2 class="text-2xl font-bold">Personalized List</h2>
    <div class="mt-2 flex items-center">
      <input class="h-4 w-4" type="checkbox" bind:checked />
      <p class="ml-2">Select all apps</p>
    </div>
  </div>

  <!-- Winget CLI -->
  <div class="flex items-center space-x-4 py-8">
    <textarea
      type="text"
      class="h-24 w-full overflow-x-auto rounded bg-transparent pt-10 text-center font-mono text-neutral-500 ring-2 ring-neutral-700"
      spellcheck="false"
      readonly
      value={checkedCLI}
      wrap="off"
      style="resize: none;" />
    <div on:click={() => copy(checkedCLI)}>
      <i class="fa-regular fa-copy fa-2xl text-white hover:text-emerald-400" />
    </div>
  </div>
</div>

<!-- Hidden element to enable copy to clipboard -->
<div id="clipboard" />
