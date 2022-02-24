<script lang="ts">
	export let horizontal: string = 'w-4/5 md:w-3/5 mx-auto';
	export let vSpacing: string = 'mt-12';
</script>

<div class="{horizontal} {vSpacing} w-full">
	<div class="px-8 py-4 bg-neutral-900 rounded-lg shadow-md">
		<div class="prose prose-invert prose-a:text-blue-400 max-w-none mt-2">
			<h1 class=" text-emerald-400">Welcome to YUKI <i class="fa-solid fa-meteor" /></h1>
			<p>
				YUKI provides a collection of essential software for your PC and Chromium based browsers. <code
					>winget</code
				> package manager is highly recommended to install and update apps. Website links are also available
				if you prefer the old school way.
			</p>
			<h3>Install <code>winget</code></h3>
			<ol>
				<li>
					Install/update
					<a href="https://www.microsoft.com/en-us/p/app-installer/9nblggh4nns1">App Installer</a>
					<i class="opacity-50 fa-solid fa-xs fa-arrow-up-right-from-square" /> from Microsoft Store.
				</li>
				<li>
					Install/update
					<a href="https://www.microsoft.com/en-us/p/windows-terminal/9n0dx20hk701"
						>Windows Terminal</a
					> <i class="opacity-50 fa-solid fa-xs fa-arrow-up-right-from-square" /> from Microsoft Store.
				</li>
				<li>
					Run <code>Windows Terminal</code> as <strong>admin</strong>. This step is optional but
					highly recommended to skip the UAC prompts.
				</li>
				<li>Copy and run the commands from this website!</li>
			</ol>
		</div>
	</div>
</div>
