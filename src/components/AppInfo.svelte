<script lang="ts" context="module">
	import { stringify } from 'postcss';

	// ----------------------------------------------------------------------------
	// -------------------------  JSON Objects  -----------------------------------
	// ----------------------------------------------------------------------------

	// icon, title, subtitle, free, open, website cli

	// 0: free, 1: freemium, 2: paid
	// 0: FOSS, 1: partially open, 2: proprietary

	// if not available on winget -> `cli = 'custom: <customresponsehere>'` || space deleted
	// can also leave `cli = ''` for a default response

	let cdn: string = 'https://res.cloudinary.com/az21/image/upload/';

	export const wingetJson = [
		{
			icon: `${cdn}v1620889734/yuki/telegram_qq0ihg.png`,
			title: 'Telegram',
			subtitle:
				'Telegram is a simple, to-the-point chat app. Content posted on Telegram is hosted on a server which takes out the headache of backup and restore. Telegram features dedicated clients for mobile and desktop which work independently of each other.',
			free: 0,
			open: 0,
			website: 'https://telegram.org/',
			cli: 'Telegram.TelegramDesktop'
		},
		{
			icon: `${cdn}v1620889736/yuki/discord_g8dbih.png`,
			title: 'Discord',
			subtitle:
				'Talk, chat, hang out, and stay close with your friends and communities. Discord features channels (containers) which can be used to  orgnaize different topics like subjects, todos, and more. Discord is the most feature-rich chat app.',
			free: 1,
			open: 2,
			website: 'https://discord.com/',
			cli: 'Discord.Discord'
		},
		{
			icon: `${cdn}v1620889734/yuki/powertoys_o5vyix.png`,
			title: 'Microsoft PowerToys',
			subtitle:
				'Set of utilities for power users to tune and streamline their Windows 10 experience for greater productivity. Features color picker, fancy zones, image resizer, keystroke launcher, shortcut guide, and more.',
			free: 0,
			open: 0,
			website: 'https://github.com/microsoft/PowerToys',
			cli: 'Microsoft.PowerToys'
		},
		{
			icon: `${cdn}v1620889734/yuki/spotify_a2uido.png`,
			title: 'Spotify',
			subtitle:
				'Stream music. Play songs, albums, user-curated albums, and discographies. Spotify uses machine learning to recommend music. Also features localized playlists and recommendations.',
			free: 1,
			open: 2,
			website: 'https://www.spotify.com/',
			cli: 'Spotify.Spotify'
		},
		{
			icon: `${cdn}v1620889734/yuki/qbittorret_nzaq8m.png`,
			title: 'qBitTorrent Enhanced',
			subtitle:
				"qBittorrent is a bittorrent client programmed in C++. qBittorrent is fast, stable, and provides unicode support. Features one-click throttle/unthrottle for when you're also watching YouTube on the side. The enhanced version is a fork with some extra features.",
			free: 0,
			open: 0,
			website: 'https://github.com/c0re100/qBittorrent-Enhanced-Edition',
			cli: 'c0re100.qBittorrent-Enhanced-Edition'
		},
		{
			icon: `${cdn}v1620889736/yuki/edge_hjiov7.png`,
			title: 'Microsoft Edge Dev',
			subtitle:
				'Edge is now built on Chromium foundation. Microsoft has shipped Edge with Windows specific optimizations making it lighter and faster than Chrome and Firefox. Built-in privacy guards and article reader. Plus it doubles up as a PDF viewer.',
			free: 0,
			open: 1,
			website: 'https://www.microsoft.com/en-us/edge',
			cli: 'Microsoft.Edge.Dev'
		},
		{
			icon: `${cdn}v1620889733/yuki/office_auw3dm.png`,
			title: 'Microsoft Office',
			subtitle:
				'Microsoft now offers web-based Word, Excel, Powerpoint, and OneNote for free. Collaborate online by sharing the document. Sync with OneDrive and access your documents on clients for Windows, Mac, Android, and iOS. The desktop version with more products and features is paid.',
			free: 1,
			open: 2,
			website: 'https://www.office.com/',
			cli: 'Microsoft.Office'
		},
		{
			icon: `${cdn}v1620889732/yuki/mstodo_uzjfv3.png`,
			title: 'Microsoft Todo',
			subtitle:
				'Microsoft Todo is a very focused todo list which keeps things clean and simple. Create todos, group them, assign them, share them, add reminders, add due date, and keep them in sync with your phone and desktop. Also features shared lists to collaborate on tasks.',
			free: 0,
			open: 0,
			website: 'https://todo.microsoft.com/',
			cli: '9NBLGGH5R558'
		},
		{
			icon: `${cdn}v1620889736/yuki/bitwarden_on4rj6.png`,
			title: 'Bitwarden',
			subtitle:
				'Bitwarden is the easiest and safest way to store all of your logins and passwords while conveniently keeping them synced between all of your devices. Data is sealed with AES-256 bit encryption, salted hashing, and PBKDF2 SHA-256. Bitwarden browser extension is highly recommended. Bitwarden is completely free for individuals for any number of devices.',
			free: 0,
			open: 0,
			website: 'https://bitwarden.com/',
			cli: 'Bitwarden.Bitwarden'
		},
		{
			icon: `${cdn}v1620889735/yuki/warp_farubw.png`,
			title: 'Cloudflare WARP',
			subtitle:
				"Easily switch to Cloudflare's 1.1.1.1 DNS for fast and reliable internet. App includes an optional feature called WARP which acts like a freemium VPN.",
			free: 0,
			open: 2,
			website: 'https://1.1.1.1/',
			cli: 'Cloudflare.Warp'
		},
		{
			icon: `${cdn}v1620889736/yuki/calibre_whzoow.png`,
			title: 'Calibre',
			subtitle:
				'Calibre is a fully-featured e-book management software. Convert e-books from one format to another, sync with e-book readers, add/edit metadata of books from internet, fetch newspapers, and read e-books on desktop using the built-in e-book reader.',
			free: 0,
			open: 0,
			website: 'https://calibre-ebook.com/',
			cli: 'calibre.calibre'
		},
		{
			icon: `${cdn}v1620889735/yuki/youtubedl_zagpcc.png`,
			title: 'Open Video Downloader',
			subtitle:
				'GUI for youtube-dl. Provides a easy to use interface with all the useful options like audio and video quality. Despite the name, youtube-dl is capable of downloading videos from virtually all popular websites. This app auto-installs youtube-dl and its dependancies.',
			free: 0,
			open: 0,
			website: 'https://github.com/jely2002/youtube-dl-guihttps://youtube-dl.org/',
			cli: 'jely2002.youtube-dl-gui'
		},
		{
			icon: `${cdn}v1620889733/yuki/obs_mfqshc.png`,
			title: 'OBS',
			subtitle:
				'Free and open source software for video recording and live streaming. Supports HEVC recording for smaller output filesize at no loss of quality. HEVC format guarantees recording will be recoverable in case of power loss or crash (corrupted file).',
			free: 0,
			open: 0,
			website: 'https://obsproject.com/',
			cli: 'OBSProject.OBSStudio'
		},
		{
			icon: `${cdn}v1620889733/yuki/powershell_arqeni.png`,
			title: 'PowerShell 7',
			subtitle:
				'Shell for Windows (now multi-platform), PowerShell is a cross-platform task automation solution made up of a command-line shell, a scripting language, and a configuration management framework. Also see Fira Code NerdFont and oh-my-posh to spice up PowerShell.',
			free: 0,
			open: 0,
			website: 'https://github.com/PowerShell/PowerShell',
			cli: 'Microsoft.PowerShell'
		},
		{
			icon: `${cdn}v1620889732/yuki/git_autuae.png`,
			title: 'git',
			subtitle:
				'Version control solution. Package includes git BASH, git GUI, and shell integrations.',
			free: 0,
			open: 0,
			website: 'https://gitforwindows.org/',
			cli: 'Git.Git'
		},
		{
			icon: `${cdn}v1620889732/yuki/githubdesktop_iue10a.png`,
			title: 'GitHub Desktop',
			subtitle:
				"Focus on what matters instead of fighting with git. Whether you're new to git or a seasoned user, GitHub Desktop simplifies your development workflow.",
			free: 0,
			open: 0,
			website: 'https://desktop.github.com/',
			cli: 'GitHub.GitHubDesktop'
		},
		{
			icon: `${cdn}v1620889736/yuki/code_elceah.png`,
			title: 'VS Code',
			subtitle:
				'The de-facto text-editor-IDE hybrid of devs all over world. Lightweight and powerful, Code features native integration with git, debugging, and supports extensions. Extensions are available for themes, icons, intellisense, lint, snippets, and language support.',
			free: 0,
			open: 0,
			website: 'https://code.visualstudio.com/',
			cli: 'Microsoft.VisualStudioCode'
		},
		{
			icon: `${cdn}v1620889735/yuki/visualstudio_swdmuc.png`,
			title: 'Visual Studio (2022)',
			subtitle:
				'Full-featured IDE to code, debug, test, and deploy to any platform. Great for C++, C#, Unity, .NET, Python, data science, and JS frameworks. Visual Studio also has paid versions aimed at enterprise users, however the community version is completely free.',
			free: 0,
			open: 2,
			website: 'https://visualstudio.microsoft.com/vs/',
			cli: 'Microsoft.VisualStudio.2022.Community'
		},
		{
			icon: `${cdn}v1620889734/yuki/python_pzpsbt.png`,
			title: 'Python',
			subtitle:
				'Python is a programming language that lets you work more quickly and integrate your systems more effectively. There are hundreds of languages, but Python is virtually essential at this point. Pseudo-code is the code, and if you need more performance, you can easily convert logic to a performant language.',
			free: 0,
			open: 0,
			website: 'https://www.python.org/',
			cli: 'Python.Python.3'
		},
		{
			icon: `${cdn}v1620889733/yuki/node_hmdys7.png`,
			title: 'Node + NPM',
			subtitle:
				"Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. Package includes Node Package Manager (npm) to import tools built for web development.",
			free: 0,
			open: 0,
			website: 'https://nodejs.org/',
			cli: 'OpenJS.NodeJS'
		}
	];

	// ----------------------------------------------------------------------------
	// -------------------------   FUNCTIONS   ------------------------------------
	// ----------------------------------------------------------------------------

	// Generate winget cli command
	export function wingetCommand(cli: string): string {
		if (cli === '') return 'not available on winget 🙁';
		if (cli.slice(0, 7) === 'custom:') return cli.slice(8, cli.length);
		return `winget install -e --id ${cli}`;
	}

	// Generate a space separated list of all the `cli` in JSON objects
	export function fullAppList(JSONobject: any): string {
		let fullList: string = '';

		for (const appObject in JSONobject) {
			if (Object.prototype.hasOwnProperty.call(JSONobject, appObject)) {
				const element: string = JSONobject[appObject]['cli'];
				if (element.slice(0, 7) === 'custom:' || element === '') continue;
				fullList += `${wingetCommand(element)}; `;
			}
		}

		return fullList;
	}
</script>
