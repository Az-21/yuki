<script lang="ts">
  import SectionHeader from '$components/SectionHeader.svelte';
  import AndroidApps from '$delta/AndroidApps.svelte';
  import BrowserExtensions from '$delta/BrowserExtensions.svelte';
  import Footer from '$delta/Footer.svelte';
  import Hero from '$delta/Hero.svelte';
  import Navbar from '$delta/Navbar.svelte';
  import WingetApps from '$delta/WingetApps.svelte';
  import { SvelteToast } from '@zerodevx/svelte-toast';

  let spacing: string = 'w-11/12 mx-auto mt-4';
</script>

<Navbar />
<Hero {spacing} />

<SectionHeader {spacing} icon="fa-solid fa-laptop-code" text="Winget Apps" />
<WingetApps {spacing} />

<SectionHeader {spacing} icon="fa-solid fa-shapes" text="Browser Extensions" />
<BrowserExtensions {spacing} />

<SectionHeader {spacing} icon="fa-brands fa-android" text="Android Apps" />
<AndroidApps {spacing} />

<Footer />

<!-- Svelte toast placeholder/entry point -->
<SvelteToast />

<!-- CSS -->
<style>
  :global(body) {
    background-color: #262626;
    color: #fff;
  }
</style>
