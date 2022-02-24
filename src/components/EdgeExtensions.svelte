<script lang="ts">
	export let horizontal: string = 'w-4/5 md:w-3/5 mx-auto';
	export let vSpacing: string = 'mt-12';

	const edge: string = 'https://microsoftedge.microsoft.com/addons/detail';
	const chrome: string = 'https://chrome.google.com/webstore/detail';
	const firefox: string = 'https://addons.mozilla.org/en-US/firefox/addon';
	const github: string = 'https://github.com';
</script>

<div class="{horizontal} {vSpacing} w-full">
	<div class="px-8 py-4 bg-neutral-900 rounded-lg shadow-md">
		<div class="prose prose-invert max-w-none mt-2">
			<h3>uBlock Origin</h3>
			<ul>
				<li>
					Links
					<a href="{edge}/ublock-origin/odfafepnkmbhccpbejgmiehpchacaeak" target="_blank"
						><i class="fa-brands fa-edge fa-xl text-emerald-400 pl-4" /></a
					>
					<a href="{chrome}/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm" target="_blank"
						><i class="fa-brands fa-chrome fa-xl text-blue-400 pl-4" /></a
					>
					<a href="{firefox}/ublock-origin/" target="_blank"
						><i class="fa-brands fa-firefox-browser fa-xl text-orange-400 pl-4" /></a
					>
					<a href="{github}/gorhill/uBlock" target="_blank"
						><i class="fa-brands fa-github fa-xl text-white pl-4" /></a
					>
				</li>
				<li>Blocks ads. Highly customizable and extensible via community maintained filters.</li>
			</ul>
		</div>
	</div>
</div>
