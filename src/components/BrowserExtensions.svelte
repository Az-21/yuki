<script lang="ts">
  import Chrome from '$style/icons/Chrome.svelte';
  import Edge from '$style/icons/Edge.svelte';
  import Firefox from '$style/icons/Firefox.svelte';
  import GitHub from '$style/icons/GitHub.svelte';
  import Globe from '$style/icons/Globe.svelte';
  import RightArrow from '$style/icons/RightArrow.svelte';

  export let spacing: string;
  const prose: string = 'prose prose-invert max-w-lg';
</script>

<div class="{spacing} grid gap-y-10 rounded-lg bg-neutral-900 px-8 py-4 shadow-md lg:grid-cols-2">
  <div class={prose}>
    <h3><RightArrow /> uBlock Origin</h3>
    <ul>
      <li>
        <Edge id="ublock-origin/odfafepnkmbhccpbejgmiehpchacaeak" />
        <Chrome id="ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm" />
        <Firefox id="ublock-origin" />
        <GitHub id="gorhill/uBlock" />
      </li>
      <li
        >Blocks ads, trackers, and more. Highly customizable and extensible via community maintained
        filters.</li>
    </ul>
  </div>

  <div class={prose}>
    <h3><RightArrow /> Dark Reader</h3>
    <ul>
      <li>
        <Edge id="dark-reader/ifoakfbpdcdoeenechcleahebpibofpc" />
        <Chrome id="dark-reader/eimadpbcbfnmbkopoojfekhnkhdbieeh" />
        <Firefox id="darkreader" />
        <GitHub id="darkreader/darkreader" />
      </li>
      <li>Dark mode everywhere. Comes with site-specific optimizations.</li>
    </ul>
  </div>

  <div class={prose}>
    <h3><RightArrow /> SponsorBlock</h3>
    <ul>
      <li>
        <Edge id="sponsorblock-for-youtube-/mbmgnelfcpoecdepckhlhegpcehmpmji" />
        <Chrome id="sponsorblock-for-youtube/mnjggcdmjocbbbhaepdhchncahnbgone" />
        <Firefox id="sponsorblock" />
        <GitHub id="ajayyy/SponsorBlock" />
      </li>
      <li
        >Skip in-video ads, intros, outros, and annoying engagement reminders from YouTube.
        Community driven metadata.</li>
    </ul>
  </div>

  <div class={prose}>
    <h3><RightArrow /> Keepa - Amazon Price Tracker</h3>
    <ul>
      <li>
        <Edge id="keepa-amazon-price-trac/ejefaeioamebhekmfaclajddbpnnobje" />
        <Chrome id="keepa-amazon-price-tracke/neebplgakaahbhdphmkckjjcegoiijjo" />
        <Firefox id="keepa" />
        <Globe url="https://keepa.com" />
      </li>
      <li>Get the historic price data embedded within the Amazon's product listing page.</li>
    </ul>
  </div>

  <div class={prose}>
    <h3><RightArrow /> Reddit Enhancement Suite</h3>
    <ul>
      <li>
        <Edge id="reddit-enhancement-suite/jlhgedjpndhblehblebhncfmkkpngiep" />
        <Chrome id="reddit-enhancement-suite/kbmfpngjjgdllneeigpgjifpgocmfgmb" />
        <Firefox id="reddit-enhancement-suite" />
        <GitHub id="honestbleeps/Reddit-Enhancement-Suite" />
      </li>
      <li>Tons and tons of quality of life features for old reddit.</li>
    </ul>
  </div>

  <div class={prose}>
    <h3><RightArrow /> Bitwarden</h3>
    <ul>
      <li>
        <Edge id="bitwarden-free-password/jbkfoedolllekgbhcbcoahefnbanhhlh" />
        <Chrome id="bitwarden-free-password-m/nngceckbapebfimnlniiiahkandclblb" />
        <Firefox id="bitwarden-password-manager" />
        <GitHub id="bitwarden/browser" />
      </li>
      <li>Access your BitWarden vault right in your browser and autofill passwords.</li>
    </ul>
  </div>

  <div class={prose}>
    <h3><RightArrow /> Return YouTube Dislikes</h3>
    <ul>
      <li>
        <Edge id="" />
        <Chrome id="return-youtube-dislike/gebbhagfogifgggkldgodflihgfeippi" />
        <Firefox id="return-youtube-dislikes" />
        <GitHub id="Anarios/return-youtube-dislike" />
      </li>
      <li
        >Generate an estimation of dislikes on a video using community contribution and historic
        data.</li>
    </ul>
  </div>

  <div class={prose}>
    <h3><RightArrow /> SteamDB</h3>
    <ul>
      <li>
        <Edge id="steamdb/hjknpdomhlodgaebegjopkmfafjpbblg" />
        <Chrome id="steamdb/kdbmhfkmnlmbkgbabkdealhhbfhlmmon" />
        <Firefox id="steam-database" />
        <GitHub id="SteamDatabase/BrowserExtension" />
      </li>
      <li>Supercharge Steam (web-version) with useful info from SteamDB.</li>
    </ul>
  </div>
</div>
