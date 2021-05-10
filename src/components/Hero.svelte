<script lang="ts">
	import Button from './Button.svelte';

	export let horizontal: string = 'w-4/5 md:w-3/5 mx-auto';
	export let vSpacing: string = 'mt-12';
</script>

<div class="{horizontal} {vSpacing} w-full">
	<div class="px-8 py-4 bg-gray-900 rounded-lg shadow-md">
		<p class="text-md font-light text-gray-100">Hi There 👋</p>

		<div class="mt-2">
			<p class="text-2xl font-bold text-white">Welcome to YUKI</p>
			<p class="mt-2 text-gray-200">
				YUKI provides a collection of essential software for your PC.
			</p>
			<p class="mt-2 text-gray-200">
				Chocolatey package manager is recommended to install and update apps. Website links are also
				available.
			</p>
			<p class="mt-2 text-gray-200">
				You can get all apps within a category using the CLI command provided at the end of each
				category.
			</p>
			<p class="mt-2 text-gray-200">
				🟢 available on choco. 🔵 web-based. 🔴 not available on choco.
			</p>
		</div>
		<div class="mt-8 flex justify-around">
			<a href="https://github.com/Az-21/yuki#-install-chocolatey" target="_blank">
				<Button text="🌠 Install Chocolatey" color="bg-indigo-500" />
			</a>
			<a href="https://chocolatey.org/" target="_blank">
				<Button text="🌌 Chocolatey Website" color="bg-indigo-500" />
			</a>
		</div>
	</div>
</div>
