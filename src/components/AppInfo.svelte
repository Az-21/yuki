<script lang="ts" context="module">
	// ----------------------------------------------------------------------------
	// -------------------------  JSON Objects  -----------------------------------
	// ----------------------------------------------------------------------------

	// icon, title, subtitle, free, open, website cli

	// 0: free, 1: freemium, 2: paid
	// 0: FOSS, 1: partially open, 2: propertiary

	// if not available on choco -> `cli = 'custom: <customresponsehere>'` || space deleted
	// can also leave `cli = ''` for a default response

	export const daily = [
		{
			icon: '',
			title: 'Telegram',
			subtitle:
				'Telegram is a simple, to-the-point chatting app. Content posted on Telegram is hosted on a server which takes out the headache of backup and restore. Telegram features dedicated clients for mobile and desktop which work independently of each other.',
			free: 0,
			open: 0,
			website: 'https://telegram.org/',
			cli: 'telegram'
		},
		{
			icon: '',
			title: 'Discord',
			subtitle:
				'Talk, chat, hang out, and stay close with your friends and communities. Discord features channels (containers) which can be used to  orgnaize different topics like subjects, todos, and more. Discord is the most feature-rich chat app.',
			free: 1,
			open: 2,
			website: 'https://discord.com/',
			cli: 'discord'
		},
		{
			icon: 'https://cdn.imgchest.com/files/myd5c3b6x4b.png',
			title: 'Microsoft PowerToys',
			subtitle:
				'Set of utilities for power users to tune and streamline their Windows 10 experience for greater productivity. Features color picker, fancy zones, image resizer, keystroke launcher, shortcut guide, and more.',
			free: 0,
			open: 0,
			website: 'https://github.com/microsoft/PowerToys',
			cli: 'powertoys'
		},
		{
			icon: '',
			title: 'ueli',
			subtitle:
				'Keystroke launcher for Windows. Just press Alt+Space and launch apps without opening Start. Also features calculator, website search, file search, OS commands, shortcuts, translations, and more. NOTE: Disable keystroke launcher of PowerToys.',
			free: 0,
			open: 0,
			website: 'https://github.com/oliverschwendener/ueli',
			cli: 'ueli'
		},
		{
			icon: '',
			title: 'MusicBee',
			subtitle:
				'MusicBee makes it easy to manage, find, and play music files on your computer. MusicBee also supports podcasts, web radio stations, and SoundCloud integration.',
			free: 0,
			open: 2,
			website: 'https://getmusicbee.com/',
			cli: 'musicbee'
		},
		{
			icon: '',
			title: 'Spotify',
			subtitle:
				'Stream music. Play songs, albums, user-curated albums, and discographies. Spotify uses machine learning to recommend music. Also features localized playlists and recommendations.',
			free: 1,
			open: 2,
			website: 'https://www.spotify.com/',
			cli: 'spotify'
		},
		{
			icon: '',
			title: 'K-Lite',
			subtitle:
				"The last media player solution you'll ever need. K-Lite Codec Pack is a collection of DirectShow filters, VFW/ACM codecs, and tools. This package includes Media Player Classic (MPC-HC).",
			free: 0,
			open: 0,
			website: 'https://codecguide.com/',
			cli: 'k-litecodecpackfull'
		},
		{
			icon: '',
			title: 'qBitTorrent',
			subtitle:
				"qBittorrent is a bittorrent client programmed in C++. qBittorrent is fast, stable, and provides unicode support. Features one-click throttle/unthrottle for when you're also watching YouTube on the side.",
			free: 0,
			open: 0,
			website: 'https://github.com/qbittorrent/qBittorrent',
			cli: 'qbittorrent'
		},
		{
			icon: '',
			title: 'Microsoft Edge',
			subtitle:
				'Edge is now built on Chromium foundation. Microsoft has shipped Edge with Windows specific optimizations making it lighter and faster than Chrome and Firefox. Built-in privacy guards and article reader. Plus it doubles up as a PDF viewer.',
			free: 0,
			open: 1,
			website: 'https://www.microsoft.com/en-us/edge',
			cli: 'microsoft-edge'
		},
		{
			icon: '',
			title: 'Mailspring',
			subtitle:
				'Mailspring is a desktop email client with modern features like unified inbox, snoozing, reminders, templates, offline search, and support for Gmail labels.',
			free: 1,
			open: 0,
			website: 'https://getmailspring.com/',
			cli: 'mailspring'
		}
	];

	export const productivity = [
		{
			icon: 'https://cdn.imgchest.com/files/3yrgc562v4z.png',
			title: 'Notion',
			subtitle:
				'Notion is an application that provides components such as notes, databases, kanban boards, wikis, calendars and reminders. Users can connect these components to create their own systems for knowledge management, note taking, data management, and project management.',
			free: 1,
			open: 2,
			website: 'https://www.notion.so/',
			cli: 'notion'
		},
		{
			icon: '',
			title: 'Overleaf',
			subtitle:
				'A web-based collaborative LaTeX editor. Overleaf takes out the hassle of downloading and managing LaTeX binaries. Create, edit, and compile LaTeX online, and then export as PDF. Everything is web based and your files are hosted on cloud.',
			free: 0,
			open: 0,
			website: 'https://www.overleaf.com/',
			cli: ''
		}
	];

	export const development = [
		{
			icon: '',
			title: 'Windows Terminal',
			subtitle:
				'Windows Terminal is a new, modern, feature-rich, productive terminal application for command-line users. It includes many of the features most frequently requested by the Windows command-line community including support for tabs, rich text, globalization, configurability, theming & styling, and more.',
			free: 0,
			open: 0,
			website: 'https://github.com/microsoft/terminal',
			cli: 'microsoft-windows-terminal'
		},
		{
			icon: '',
			title: 'PowerShell 7',
			subtitle:
				'Shell for Windows (now multi-platform), PowerShell is a cross-platform task automation solution made up of a command-line shell, a scripting language, and a configuration management framework. Also see Fira Code NerdFont and oh-my-posh to spice up PowerShell.',
			free: 0,
			open: 0,
			website: 'https://github.com/PowerShell/PowerShell',
			cli: 'powershell-core'
		},
		{
			icon: '',
			title: 'git',
			subtitle:
				'Version control solution. Package includes git BASH, git GUI, and shell integrations.',
			free: 0,
			open: 0,
			website: 'https://gitforwindows.org/',
			cli: 'git'
		},
		{
			icon: '',
			title: 'GitHub Desktop',
			subtitle:
				"Focus on what matters instead of fighting with git. Whether you're new to git or a seasoned user, GitHub Desktop simplifies your development workflow.",
			free: 0,
			open: 0,
			website: 'https://desktop.github.com/',
			cli: 'github-desktop'
		},
		{
			icon: '',
			title: 'VS Code',
			subtitle:
				'The de-facto text-editor-IDE hybrid of devs all over world. Lightweight and powerful, Code features native integration with git, debugging, and supports extensions. Extensions are available for themes, icons, intellisence, lint, snippets, and language support.',
			free: 0,
			open: 0,
			website: 'https://code.visualstudio.com/',
			cli: 'vscode'
		},
		{
			icon: '',
			title: 'Visual Studio (2019)',
			subtitle:
				'Full-featured IDE to code, debug, test, and deploy to any platform. Great for C++, C#, Unity, .NET, Python, data science, and JS frameworks. Visual Studio also has paid versions aimed at enterprise users, however the community version is completely free.',
			free: 0,
			open: 2,
			website: 'https://visualstudio.microsoft.com/vs/',
			cli: 'visualstudio2019community'
		},
		{
			icon: '',
			title: 'Python',
			subtitle:
				'Python is a programming language that lets you work more quickly and integrate your systems more effectively. There are hundreds of languages, but Python is virtually essential at this point. Psuedo-code is the code, and if you need more performance, you can easily convert logic to a performant language.',
			free: 0,
			open: 0,
			website: 'https://www.python.org/',
			cli: 'python'
		},
		{
			icon: '',
			title: 'Node + NPM',
			subtitle:
				"Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. Package includes Node Package Manager (npm) to import tools built for web development.",
			free: 0,
			open: 0,
			website: 'https://nodejs.org/',
			cli: 'nodejs'
		}
	];

	// ----------------------------------------------------------------------------
	// -------------------------   FUNCTIONS   ------------------------------------
	// ----------------------------------------------------------------------------

	// Generate choco cli command
	export function chocoCLI(cli: string): string {
		if (cli === '') return 'not available on choco 🙁';
		if (cli.slice(0, 7) === 'custom:') return cli.slice(8, cli.length);
		return `choco install ${cli} -y`;
	}

	// Generate a space separated list of all the `cli` in JSON objects
	export function fullAppList(JSONobject: any): string {
		let fullList: string = 'choco install';

		for (const appObject in JSONobject) {
			if (Object.prototype.hasOwnProperty.call(JSONobject, appObject)) {
				const element: string = JSONobject[appObject]['cli'];
				if (element.slice(0, 7) === 'custom:' || element === '') continue;
				fullList += ` ${element}`;
			}
		}

		fullList += ' -y';

		return fullList;
	}
</script>
