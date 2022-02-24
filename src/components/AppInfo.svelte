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

	export const winget = [
		{
			icon: `${cdn}v1620889734/yuki/telegram_qq0ihg.png`,
			title: 'Telegram',
			subtitle:
				'Telegram is a simple, to-the-point chat app. Content posted on Telegram is hosted on a server which takes out the headache of backup and restore. Telegram features dedicated clients for mobile and desktop which work independently of each other.',
			free: 0,
			open: 0,
			website: 'https://telegram.org/',
			cli: 'telegram'
		},
		{
			icon: `${cdn}v1620889736/yuki/discord_g8dbih.png`,
			title: 'Discord',
			subtitle:
				'Talk, chat, hang out, and stay close with your friends and communities. Discord features channels (containers) which can be used to  orgnaize different topics like subjects, todos, and more. Discord is the most feature-rich chat app.',
			free: 1,
			open: 2,
			website: 'https://discord.com/',
			cli: 'discord'
		},
		{
			icon: `${cdn}v1620889734/yuki/powertoys_o5vyix.png`,
			title: 'Microsoft PowerToys',
			subtitle:
				'Set of utilities for power users to tune and streamline their Windows 10 experience for greater productivity. Features color picker, fancy zones, image resizer, keystroke launcher, shortcut guide, and more.',
			free: 0,
			open: 0,
			website: 'https://github.com/microsoft/PowerToys',
			cli: 'powertoys'
		},
		{
			icon: `${cdn}v1620889735/yuki/ueli_ykosxq.png`,
			title: 'ueli',
			subtitle:
				'Keystroke launcher for Windows. Press Alt+Space and launch apps without opening Start. Also features calculator, website search, file search, OS commands, shortcuts, translations, and more. NOTE: Disable keystroke launcher of PowerToys.',
			free: 0,
			open: 0,
			website: 'https://github.com/oliverschwendener/ueli',
			cli: 'ueli'
		},
		{
			icon: `${cdn}v1620889733/yuki/musicbee_xblnnj.png`,
			title: 'MusicBee',
			subtitle:
				'MusicBee makes it easy to manage, find, and play music files on your computer. MusicBee also supports podcasts, web radio stations, and SoundCloud integration.',
			free: 0,
			open: 2,
			website: 'https://getmusicbee.com/',
			cli: 'musicbee'
		},
		{
			icon: `${cdn}v1620889734/yuki/spotify_a2uido.png`,
			title: 'Spotify',
			subtitle:
				'Stream music. Play songs, albums, user-curated albums, and discographies. Spotify uses machine learning to recommend music. Also features localized playlists and recommendations.',
			free: 1,
			open: 2,
			website: 'https://www.spotify.com/',
			cli: 'spotify'
		},
		{
			icon: `${cdn}v1620889732/yuki/klite_vpze87.png`,
			title: 'K-Lite Family',
			subtitle:
				"The last media player solution you'll ever need. K-Lite Codec Pack is a collection of DirectShow filters, VFW/ACM codecs, and tools. This package includes Media Player Classic (MPC-HC).",
			free: 0,
			open: 0,
			website: 'https://codecguide.com/',
			cli: 'k-litecodecpackfull'
		},
		{
			icon: `${cdn}v1620889734/yuki/qbittorret_nzaq8m.png`,
			title: 'qBitTorrent',
			subtitle:
				"qBittorrent is a bittorrent client programmed in C++. qBittorrent is fast, stable, and provides unicode support. Features one-click throttle/unthrottle for when you're also watching YouTube on the side.",
			free: 0,
			open: 0,
			website: 'https://github.com/qbittorrent/qBittorrent',
			cli: 'qbittorrent'
		},
		{
			icon: `${cdn}v1620889736/yuki/edge_hjiov7.png`,
			title: 'Microsoft Edge',
			subtitle:
				'Edge is now built on Chromium foundation. Microsoft has shipped Edge with Windows specific optimizations making it lighter and faster than Chrome and Firefox. Built-in privacy guards and article reader. Plus it doubles up as a PDF viewer.',
			free: 0,
			open: 1,
			website: 'https://www.microsoft.com/en-us/edge',
			cli: 'microsoft-edge'
		},
		{
			icon: `${cdn}v1620889732/yuki/mailspring_kltxma.png`,
			title: 'Mailspring',
			subtitle:
				'Mailspring is a desktop email client with modern features like unified inbox, snoozing, reminders, templates, offline search, and support for Gmail labels.',
			free: 1,
			open: 0,
			website: 'https://getmailspring.com/',
			cli: 'mailspring'
		},
		{
			icon: `${cdn}v1620889733/yuki/notion_ecp5nx.png`,
			title: 'Notion',
			subtitle:
				'Notion is an application that provides components such as notes, databases, kanban boards, wikis, calendars and reminders. Users can connect these components to create their own systems for knowledge management, note taking, data management, and project management.',
			free: 1,
			open: 2,
			website: 'https://www.notion.so/',
			cli: 'notion'
		},
		{
			icon: `${cdn}v1620889733/yuki/overleaf_gksaab.png`,
			title: 'Overleaf',
			subtitle:
				'A web-based collaborative LaTeX editor. Overleaf takes out the hassle of downloading and managing LaTeX binaries. Create, edit, and compile LaTeX online, and then export as PDF. Everything is web based and your files are hosted on cloud.',
			free: 0,
			open: 0,
			website: 'https://www.overleaf.com/',
			cli: 'custom: https://www.overleaf.com/'
		},
		{
			icon: `${cdn}v1620889733/yuki/office_auw3dm.png`,
			title: 'Microsoft Office',
			subtitle:
				'Microsoft now offers web-based Word, Excel, Powerpoint, and OneNote for free. Collaborate online by sharing the document. Sync with OneDrive and access your documents on clients for Windows, Mac, Android, and iOS. The desktop version with more products and features is paid.',
			free: 1,
			open: 2,
			website: 'https://www.office.com/',
			cli: 'custom: https://www.office.com/'
		},
		{
			icon: `${cdn}v1620889732/yuki/libre_vpymb6.png`,
			title: 'Libre Office',
			subtitle:
				'Libre is a free and open source alternative of Microsoft Office. If you need a free offline editing client, Libre Office provides a feature rich toolset.',
			free: 0,
			open: 0,
			website: 'https://www.libreoffice.org/',
			cli: 'libreoffice-fresh'
		},
		{
			icon: `${cdn}v1620889732/yuki/mstodo_uzjfv3.png`,
			title: 'Microsoft Todo',
			subtitle:
				'Microsoft Todo is a very focused todo list which keeps things clean and simple. Create todos, group them, assign them, share them, add reminders, add due date, and keep them in sync with your phone and desktop. Also features shared lists to collaborate on tasks.',
			free: 0,
			open: 0,
			website: 'https://todo.microsoft.com/',
			cli: 'custom: Available on Microsoft Store'
		},
		{
			icon: `${cdn}v1620889735/yuki/typora_cjmszt.png`,
			title: 'Typora',
			subtitle:
				"Typora offers live markdown and lightweight LaTeX to help you create beautiful notes quickly. Features built-in organizer, export options, and dark theme. If you feel you're always fighting with MS Word, try Typora. NOTE: Typora will become a paid software once it comes out of beta.",
			free: 0,
			open: 2,
			website: 'https://typora.io/',
			cli: 'typora'
		},
		{
			icon: `${cdn}v1620889736/yuki/bitwarden_on4rj6.png`,
			title: 'Bitwarden',
			subtitle:
				'Bitwarden is the easiest and safest way to store all of your logins and passwords while conveniently keeping them synced between all of your devices. Data is sealed with AES-256 bit encryption, salted hashing, and PBKDF2 SHA-256. Bitwarden browser extension is highly recommended. Bitwarden is completely free for individuals for any number of devices.',
			free: 0,
			open: 0,
			website: 'https://bitwarden.com/',
			cli: 'bitwarden'
		},
		{
			icon: `${cdn}v1620889735/yuki/warp_farubw.png`,
			title: '1.1.1.1',
			subtitle:
				"Easily switch to Cloudflare's 1.1.1.1 DNS for fast and reliable internet. App includes an optional feature called WARP which acts like a freemium VPN.",
			free: 0,
			open: 2,
			website: 'https://1.1.1.1/',
			cli: 'warp'
		},
		{
			icon: `${cdn}v1620889736/yuki/calibre_whzoow.png`,
			title: 'Calibre',
			subtitle:
				'Calibre is a fully-featured e-book management software. Convert e-books from one format to another, sync with e-book readers, add/edit metadata of books from internet, fetch newspapers, and read e-books on desktop using the built-in e-book reader.',
			free: 0,
			open: 0,
			website: 'https://calibre-ebook.com/',
			cli: 'calibre'
		},
		{
			icon: `${cdn}v1620889735/yuki/youtubedl_zagpcc.png`,
			title: 'youtube-dl',
			subtitle:
				'youtube-dl is a command-line program to download videos from YouTube (and other audio/video websites). Run `youtube-dl URL` to download video at best quality.',
			free: 0,
			open: 0,
			website: 'https://youtube-dl.org/',
			cli: 'youtube-dl'
		},
		{
			icon: `${cdn}v1620889733/yuki/peazip_n2uqnx.png`,
			title: 'PeaZip',
			subtitle:
				'Extract, create and convert multiple archives at once, create self-extracting archives, split/join, encrypted password manager, strong encryption with two factor authentication, secure deletion, find duplicate files, and calculate hashes. PeaZip supports 150+ archive formats including ZIP, RAR, and 7Z. NOTE: Use 7zip if you want a better compression ratio. PeaZip is better for general use.',
			free: 0,
			open: 0,
			website: 'https://peazip.github.io/',
			cli: 'peazip'
		},
		{
			icon: `${cdn}v1620889733/yuki/obs_mfqshc.png`,
			title: 'OBS',
			subtitle:
				'Free and open source software for video recording and live streaming. Supports HEVC recording for smaller output filesize at no loss of quality. HEVC format guarantees recording will be recoverable in case of power loss or crash (corrupted file).',
			free: 0,
			open: 0,
			website: 'https://obsproject.com/',
			cli: 'obs-studio'
		},
		{
			icon: `${cdn}v1620889732/yuki/greenshot_lhheog.png`,
			title: 'Greenshot',
			subtitle:
				"Lightweight screenshot software tool featuring four snapshot modes: selected region, scrolling, window, and fullscreen. Built-in annotate, highlight, and obfuscate tools ensure this will be the only screenshot app you'll ever need.",
			free: 0,
			open: 0,
			website: 'https://getgreenshot.org/',
			cli: 'greenshot'
		},
		{
			icon: `${cdn}v1620889731/yuki/flux_ergk5e.png`,
			title: 'f.lux',
			subtitle:
				'Reduce eye-strian caused by blue light from screen. While every modern OS now comes with a blue light tool, they fall behind on features. f.lux gives you full control over schedule and temperature.',
			free: 0,
			open: 2,
			website: 'https://justgetflux.com/',
			cli: 'f.lux'
		},
		{
			icon: `${cdn}v1620889734/yuki/scrcpy_krjjhn.png`,
			title: 'scrcpy',
			subtitle: 'Mirror and control your Android device on desktop.',
			free: 0,
			open: 0,
			website: 'https://github.com/Genymobile/scrcpy',
			cli: 'scrcpy'
		},
		{
			icon: `${cdn}v1620889733/yuki/photoshop_nxg7iq.png`,
			title: 'Photoshop',
			subtitle: 'The complete raster graphics solution.',
			free: 2,
			open: 2,
			website: 'https://www.adobe.com/products/photoshop.html',
			cli: 'custom: Available on Adobe Creative Cloud'
		},
		{
			icon: `${cdn}v1620889733/yuki/paint_uxsa6d.png`,
			title: 'Paint.NET',
			subtitle:
				"Free alternative of Photoshop with good layout and reasonable toolset for common photo-editing needs. GIMP is another alternative, but it's UI is hopelessly cluttered.",
			free: 0,
			open: 2,
			website: 'https://www.getpaint.net/',
			cli: 'paint.net'
		},
		{
			icon: `${cdn}v1620889736/yuki/clip_tauppa.png`,
			title: 'Clip Studio Paint',
			subtitle: 'The complete digital drawing solution aimed at manga and comic prodcution.',
			free: 2,
			open: 2,
			website: 'https://www.clipstudio.net/en/',
			cli: 'custom: Available on Clip Studio'
		},
		{
			icon: `${cdn}v1620889732/yuki/krita_kiemt0.png`,
			title: 'Krita',
			subtitle: 'The complete digital painting solution.',
			free: 0,
			open: 0,
			website: 'https://krita.org/en/',
			cli: 'krita'
		},
		{
			icon: `${cdn}v1620889732/yuki/illustrator_lgsb07.png`,
			title: 'Illustrator',
			subtitle: 'The complete vector graphics solution.',
			free: 2,
			open: 2,
			website: 'https://www.adobe.com/products/illustrator.html',
			cli: 'custom: Available on Adobe Creative Cloud'
		},
		{
			icon: `${cdn}v1620889732/yuki/inkscape_oovtpj.png`,
			title: 'Inkscape',
			subtitle:
				"The complete vector graphics solution which stands level with Adobe's paid offering.",
			free: 0,
			open: 0,
			website: 'https://inkscape.org/',
			cli: 'inkscape'
		},
		{
			icon: `${cdn}v1620889734/yuki/premiere_bkgxm9.png`,
			title: 'Premiere Pro',
			subtitle: 'The complete video editing solution.',
			free: 2,
			open: 2,
			website: 'https://www.adobe.com/products/premiere.html',
			cli: 'custom: Available on Adobe Creative Cloud'
		},
		{
			icon: `${cdn}v1620889734/yuki/resolve_eezcce.png`,
			title: 'DaVinci Resolve',
			subtitle:
				"The complete video editing solution which stands level with Adobe's paid offering. Offers better color grading tools.",
			free: 1,
			open: 2,
			website: 'https://www.blackmagicdesign.com/products/davinciresolve/',
			cli: 'custom: Available on Blackmagic Design'
		},
		{
			icon: `${cdn}v1620889731/yuki/ffmpeg_j83rwk.png`,
			title: 'FFmpeg',
			subtitle:
				'The complete, cross-platform solution to record, convert, and stream audio and video. Check out HandBrake for FFmpeg GUI.',
			free: 0,
			open: 0,
			website: 'https://www.ffmpeg.org/',
			cli: 'ffmpeg'
		},
		{
			icon: `${cdn}v1620889704/yuki/audacity_tpacae.png`,
			title: 'Audacity',
			subtitle: 'The complete audio editing solution.',
			free: 0,
			open: 0,
			website: 'https://www.audacityteam.org/',
			cli: 'audacity'
		},
		{
			icon: `${cdn}v1620889735/yuki/terminal_bbi95l.png`,
			title: 'Windows Terminal',
			subtitle:
				'Windows Terminal is a new, modern, feature-rich, productive terminal application for command-line users. It includes many of the features most frequently requested by the Windows command-line community including support for tabs, rich text, globalization, configurability, theming & styling, and more.',
			free: 0,
			open: 0,
			website: 'https://github.com/microsoft/terminal',
			cli: 'microsoft-windows-terminal'
		},
		{
			icon: `${cdn}v1620889733/yuki/powershell_arqeni.png`,
			title: 'PowerShell 7',
			subtitle:
				'Shell for Windows (now multi-platform), PowerShell is a cross-platform task automation solution made up of a command-line shell, a scripting language, and a configuration management framework. Also see Fira Code NerdFont and oh-my-posh to spice up PowerShell.',
			free: 0,
			open: 0,
			website: 'https://github.com/PowerShell/PowerShell',
			cli: 'powershell-core'
		},
		{
			icon: `${cdn}v1620889732/yuki/git_autuae.png`,
			title: 'git',
			subtitle:
				'Version control solution. Package includes git BASH, git GUI, and shell integrations.',
			free: 0,
			open: 0,
			website: 'https://gitforwindows.org/',
			cli: 'git'
		},
		{
			icon: `${cdn}v1620889732/yuki/githubdesktop_iue10a.png`,
			title: 'GitHub Desktop',
			subtitle:
				"Focus on what matters instead of fighting with git. Whether you're new to git or a seasoned user, GitHub Desktop simplifies your development workflow.",
			free: 0,
			open: 0,
			website: 'https://desktop.github.com/',
			cli: 'github-desktop'
		},
		{
			icon: `${cdn}v1620889736/yuki/code_elceah.png`,
			title: 'VS Code',
			subtitle:
				'The de-facto text-editor-IDE hybrid of devs all over world. Lightweight and powerful, Code features native integration with git, debugging, and supports extensions. Extensions are available for themes, icons, intellisense, lint, snippets, and language support.',
			free: 0,
			open: 0,
			website: 'https://code.visualstudio.com/',
			cli: 'vscode'
		},
		{
			icon: `${cdn}v1620889735/yuki/visualstudio_swdmuc.png`,
			title: 'Visual Studio (2019)',
			subtitle:
				'Full-featured IDE to code, debug, test, and deploy to any platform. Great for C++, C#, Unity, .NET, Python, data science, and JS frameworks. Visual Studio also has paid versions aimed at enterprise users, however the community version is completely free.',
			free: 0,
			open: 2,
			website: 'https://visualstudio.microsoft.com/vs/',
			cli: 'visualstudio2019community'
		},
		{
			icon: `${cdn}v1620889734/yuki/python_pzpsbt.png`,
			title: 'Python',
			subtitle:
				'Python is a programming language that lets you work more quickly and integrate your systems more effectively. There are hundreds of languages, but Python is virtually essential at this point. Pseudo-code is the code, and if you need more performance, you can easily convert logic to a performant language.',
			free: 0,
			open: 0,
			website: 'https://www.python.org/',
			cli: 'python'
		},
		{
			icon: `${cdn}v1620889733/yuki/node_hmdys7.png`,
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
