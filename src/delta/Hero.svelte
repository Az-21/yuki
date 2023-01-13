<script lang="ts">
  export let spacing: string;

  let hidden: boolean = false;
  let hiddenIndicator: string = '[ - ]';

  function hideSection(): void {
    hidden = !hidden;
    if (hidden) hiddenIndicator = '[ + ]';
    else hiddenIndicator = '[ - ]';
  }
</script>

<div class="{spacing} prose prose-invert w-full max-w-none rounded-lg bg-neutral-900 px-8 py-4 shadow-md">
  <div class="place-content-between items-start md:flex">
    <h1 class=" text-emerald-400">Welcome to YUKI <i class="fa-solid fa-meteor" /></h1>
    <button on:click={() => hideSection()} class="text-xl font-bold">{hiddenIndicator}</button>
  </div>

  {#if !hidden}
    <div class="prose prose-invert w-full max-w-none prose-a:text-blue-400">
      <p>
        YUKI provides a collection of essential software for your PC and Chromium based browsers. <code>winget</code> package
        manager is highly recommended to install and update apps. Website links are also available if you prefer the old
        school way.
      </p>
      <h3>Install <code>winget</code></h3>
      <ol>
        <li>
          Install/update
          <a href="https://www.microsoft.com/en-us/p/app-installer/9nblggh4nns1">App Installer</a>
          <i class="fa-solid fa-xs fa-arrow-up-right-from-square opacity-50" /> from Microsoft Store.
        </li>
        <li>
          Install/update
          <a href="https://www.microsoft.com/en-us/p/windows-terminal/9n0dx20hk701">Windows Terminal</a>
          <i class="fa-solid fa-xs fa-arrow-up-right-from-square opacity-50" /> from Microsoft Store.
        </li>
        <li>
          Run <code>Windows Terminal</code> as <i class="fa-solid fa-shield text-yellow-500" />
          <strong>admin</strong>. This step is optional but highly recommended to skip the UAC prompts.
        </li>
        <li>Copy and run the commands from this website!</li>
      </ol>
      <h3>Update all apps</h3>
      <pre><code class="lang-ps"
          >winget upgrade <span>--all</span>
      </code></pre>
    </div>
  {/if}
</div>
