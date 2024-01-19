<script lang="ts" context="module">
  let cdn: string = 'https://res.cloudinary.com/az21/image/upload/';

  export interface wingetInterface {
    icon: string;
    title: string;
    subtitle: string;
    free: number; // [0..2] free | freemium | paid
    open: number; // [0..2] open | partial  | closed
    website: string;
    cli: string;
  }

  export interface browserExtensionInterface {
    title: string;
    info: string;
    chromeId: string;
    edgeId: string;
    firefoxId: string;
    firefoxAndroid: number; // 0 -> No | 1-> Yes
    website: string;
  }

  export interface playStoreAndroidAppInterface {
    title: string;
    info: string;
    playStoreId: string;
    revenue: number; // [0..2] ad-free | ad-supported | paid
  }

  export interface offStoreAndroidAppInterface {
    title: string;
    info: string;
    githubId: string;
    rootRequired: number; // [0..2] no | for extra features | yes
  }

  export const wingetMetadata: wingetInterface[] = [
    {
      icon: `${cdn}v1620889736/yuki/discord.png`,
      title: 'Discord',
      subtitle:
        'Discord features channels (containers) which can be used to organize different topics. The most feature rich chat app.',
      free: 1,
      open: 2,
      website: 'https://discord.com',
      cli: 'Discord.Discord'
    },
    {
      icon: `${cdn}v1620889734/yuki/powertoys.png`,
      title: 'Microsoft PowerToys',
      subtitle: 'Collection of extremely useful utilities for Windows 10+.',
      free: 0,
      open: 0,
      website: 'https://github.com/microsoft/PowerToys',
      cli: 'Microsoft.PowerToys'
    },
    {
      icon: `${cdn}v1620889734/yuki/spotify.png`,
      title: 'Spotify',
      subtitle: 'Stream music, create playlists, join friends.',
      free: 1,
      open: 2,
      website: 'https://www.spotify.com',
      cli: 'Spotify.Spotify'
    },
    {
      icon: `${cdn}v1620889734/yuki/qbittorret.png`,
      title: 'qBitTorrent Enhanced',
      subtitle:
        'qBittorrent is a bittorrent client programmed in C++. The enhanced version is a fork with some extra features.',
      free: 0,
      open: 0,
      website: 'https://github.com/c0re100/qBittorrent-Enhanced-Edition',
      cli: 'c0re100.qBittorrent-Enhanced-Edition'
    },
    {
      icon: `${cdn}v1620889736/yuki/edge.png`,
      title: 'Microsoft Edge Beta',
      subtitle:
        'The cutting edge Edge from Microsoft. Subjectively, the best browser out there in terms of features and performance.',
      free: 0,
      open: 1,
      website: 'https://www.microsoft.com/en-us/edge',
      cli: 'Microsoft.Edge.Beta'
    },
    {
      icon: `${cdn}v1620889735/yuki/warp.png`,
      title: 'Cloudflare WARP',
      subtitle:
        "Easily switch to Cloudflare's 1.1.1.1 DNS for fast and reliable internet. App includes an optional feature called WARP which acts like a freemium VPN.",
      free: 0,
      open: 2,
      website: 'https://1.1.1.1',
      cli: 'Cloudflare.Warp'
    },
    {
      icon: `${cdn}v1620889733/yuki/obs.png`,
      title: 'OBS',
      subtitle: 'Free and open source software for video recording and live streaming.',
      free: 0,
      open: 0,
      website: 'https://obsproject.com',
      cli: 'OBSProject.OBSStudio'
    },
    {
      icon: `${cdn}v1620889733/yuki/powershell.png`,
      title: 'PowerShell 7',
      subtitle: "Shell for Windows. Not sure why it's not shipped out of the box with Windows 10+.",
      free: 0,
      open: 0,
      website: 'https://github.com/PowerShell/PowerShell',
      cli: 'Microsoft.PowerShell'
    },
    {
      icon: `${cdn}v1620889732/yuki/git.png`,
      title: 'git',
      subtitle: 'Version control solution. Package includes git BASH, git GUI, and shell integrations.',
      free: 0,
      open: 0,
      website: 'https://gitforwindows.org',
      cli: 'Git.Git'
    },
    {
      icon: `${cdn}v1620889732/yuki/githubdesktop.png`,
      title: 'GitHub Desktop',
      subtitle:
        "Focus on what matters instead of fighting with git. Whether you're new to git or a seasoned user, GitHub Desktop simplifies your development workflow.",
      free: 0,
      open: 0,
      website: 'https://desktop.github.com',
      cli: 'GitHub.GitHubDesktop'
    },
    {
      icon: `${cdn}v1620889736/yuki/vscode.png`,
      title: 'VS Code',
      subtitle: 'The de-facto text-editor-IDE hybrid of devs all over world.',
      free: 0,
      open: 0,
      website: 'https://code.visualstudio.com',
      cli: 'Microsoft.VisualStudioCode'
    },
    {
      icon: `${cdn}v1620889735/yuki/visualstudio.png`,
      title: 'Visual Studio 2022',
      subtitle:
        'Full-featured IDE to code, debug, test, and deploy to any platform. Great for C++, C#, Unity, .NET, Python, data science, and JS frameworks.',
      free: 0,
      open: 2,
      website: 'https://visualstudio.microsoft.com/vs',
      cli: 'Microsoft.VisualStudio.2022.Community'
    },
    {
      icon: `${cdn}v1620889734/yuki/python.png`,
      title: 'Python',
      subtitle: 'Install the Python programming language (v3).',
      free: 0,
      open: 0,
      website: 'https://www.python.org',
      cli: 'Python.Python.3'
    },
    {
      icon: `${cdn}v1620889733/yuki/node.png`,
      title: 'Node.JS',
      subtitle: 'Install the Node.JS runtime.',
      free: 0,
      open: 0,
      website: 'https://nodejs.org',
      cli: 'OpenJS.NodeJS'
    },
    {
      icon: `${cdn}v1675668196/yuki/figma.png`,
      title: 'Figma',
      subtitle: 'Graphic design tool.',
      free: 0,
      open: 2,
      website: 'https://www.figma.com',
      cli: 'Figma.Figma'
    },
    {
      icon: `${cdn}v1675668342/yuki/devtoys.png`,
      title: 'DevToys',
      subtitle: 'An ever growing set of utilities for developers.',
      free: 0,
      open: 0,
      website: 'https://github.com/veler/DevToys',
      cli: '9PGCV4V3BK4W'
    },
    {
      icon: `${cdn}v1675668596/yuki/obsidian.png`,
      title: 'Obsidian',
      subtitle: 'Markdown based notes / journal / notebook.',
      free: 0,
      open: 2,
      website: 'https://obsidian.md',
      cli: 'Obsidian.Obsidian'
    },
    {
      icon: `${cdn}v1675668671/yuki/mpvdotnet.png`,
      title: 'mpv.net',
      subtitle: 'mpv (media player) fork with some Windows specific features.',
      free: 0,
      open: 0,
      website: 'https://github.com/stax76/mpv.net',
      cli: 'mpv.net'
    },
    {
      icon: `${cdn}v1675668853/yuki/ticktick.png`,
      title: 'TickTick',
      subtitle: 'Plan your tasks. Set subtasks. Add reminders. Create #groups and more.',
      free: 0,
      open: 2,
      website: 'https://ticktick.com',
      cli: 'Appest.TickTick'
    },
    {
      icon: `${cdn}v1675669101/yuki/7zip.png`,
      title: '7zip',
      subtitle: 'Fast, efficient, and clean file archiver and extractor.',
      free: 0,
      open: 0,
      website: 'https://www.7-zip.org/',
      cli: '7zip.7zip'
    },
    {
      icon: `${cdn}v1675669173/yuki/steam.png`,
      title: 'Steam',
      subtitle: 'The biggest, most feature rich PC game store.',
      free: 0,
      open: 2,
      website: 'https://store.steampowered.com/',
      cli: 'Valve.Steam'
    },
    {
      icon: `${cdn}v1675669355/yuki/neovim.png`,
      title: 'neovim',
      subtitle: 'Hyperextensible Vim-based text editor.',
      free: 0,
      open: 0,
      website: 'https://neovim.io/',
      cli: 'Neovim.Neovim'
    },
    {
      icon: `${cdn}v1675669703/yuki/nvidia.png`,
      title: 'Nvidia GeForce Experience',
      subtitle: 'Manage and update your Nvidia graphics card drivers.',
      free: 0,
      open: 2,
      website: 'https://www.nvidia.com/en-us/geforce/geforce-experience/',
      cli: 'Nvidia.GeForceExperience'
    },
    {
      icon: `${cdn}v1675669834/yuki/spark.png`,
      title: 'Spark Mail',
      subtitle: 'A multiplatform email client to organize and manage multiple email accounts',
      free: 1,
      open: 1,
      website: 'https://sparkmailapp.com',
      cli: 'Readdle.Spark'
    },
    {
      icon: `${cdn}v1675669946/yuki/ffmpeg.png`,
      title: 'FFmpeg',
      subtitle: 'A CLI tool to record, convert, and stream audio and video. Restart PC after install.',
      free: 0,
      open: 0,
      website: 'https://ffmpeg.org',
      cli: 'Gyan.FFmpeg'
    },
    {
      icon: `${cdn}v1675670004/yuki/yt-dlp.png`,
      title: 'yt-dlp',
      subtitle:
        'A CLI tool to download audio and video from YouTube and other video hosting websites. Restart PC after install.',
      free: 0,
      open: 0,
      website: 'https://github.com/yt-dlp/yt-dlp',
      cli: 'yt-dlp.yt-dlp'
    },
    {
      icon: `${cdn}v1675790588/yuki/metatogger.png`,
      title: 'Metatogger',
      subtitle: 'A simple, clean, and feature-rich audio file metadata editor.',
      free: 0,
      open: 2,
      website: 'https://www.luminescence-software.org/en/metatogger/download',
      cli: 'SylvainRougeaux.Metatogger'
    }
  ];

  export const browserExtensionMetadata: browserExtensionInterface[] = [
    {
      title: 'Bitwarden',
      info: 'Access your BitWarden vault right in your browser and autofill passwords.',
      edgeId: 'bitwarden-free-password/jbkfoedolllekgbhcbcoahefnbanhhlh',
      chromeId: 'bitwarden-free-password-m/nngceckbapebfimnlniiiahkandclblb',
      firefoxId: 'bitwarden-password-manager',
      firefoxAndroid: 1,
      website: 'bitwarden/browser'
    },
    {
      title: 'uBlock Origin',
      info: 'Blocks ads, trackers, and more. Highly customizable and extensible via community maintained filters.',
      edgeId: 'ublock-origin/dfafepnkmbhccpbejgmiehpchacaeak',
      chromeId: 'ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm',
      firefoxId: 'ublock-origin',
      firefoxAndroid: 1,
      website: 'gorhill/uBlock'
    },
    {
      title: 'Dark Reader',
      info: 'Dark mode everywhere. Comes with site-specific optimizations.',
      edgeId: 'dark-reader/ifoakfbpdcdoeenechcleahebpibofpc',
      chromeId: 'dark-reader/eimadpbcbfnmbkopoojfekhnkhdbieeh',
      firefoxId: 'darkreader',
      firefoxAndroid: 1,
      website: 'darkreader/darkreader'
    },
    {
      title: 'SponsorBlock',
      info: 'Skip in-video ads, intros, outros, and annoying engagement reminders in YouTube videos.',
      edgeId: 'sponsorblock-for-youtube-/mbmgnelfcpoecdepckhlhegpcehmpmji',
      chromeId: 'sponsorblock-for-youtube/mnjggcdmjocbbbhaepdhchncahnbgone',
      firefoxId: 'sponsorblock',
      firefoxAndroid: 1,
      website: 'ajayyy/SponsorBlock'
    },
    {
      title: 'Keepa',
      info: "Get the historic price data embedded within the Amazon's product listing page.",
      edgeId: 'keepa-amazon-price-trac/ejefaeioamebhekmfaclajddbpnnobje',
      chromeId: 'keepa-amazon-price-tracke/neebplgakaahbhdphmkckjjcegoiijjo',
      firefoxId: 'keepa',
      firefoxAndroid: 1,
      website: 'https://keepa.com'
    },
    {
      title: 'ClearURLs',
      info: "Removes '&' metadata chain from URLs to make them cleaner and prevent tracking.",
      edgeId: 'clearurls/mdkdmaickkfdekbjdoojfalpbkgaddei',
      chromeId: 'clearurls/lckanjgmijmafbedllaakclkaicjfmnk',
      firefoxId: 'clearurls',
      firefoxAndroid: 1,
      website: 'ClearURLs/Addon'
    },
    {
      title: 'Bookmark Sidebar',
      info: 'Hover at edge of browser to reveal your bookmarks.',
      edgeId: 'bookmark-sidebar/lmjefbghkfeppnpofmbfmhgodpclipbl',
      chromeId: 'bookmark-sidebar/jdbnofccmhefkmjbkkdkfiicjkgofkdh',
      firefoxId: '',
      firefoxAndroid: 0,
      website: 'Kiuryy/Bookmark_Sidebar'
    },
    {
      title: '2FAS Browser Companion',
      info: 'Request two-factor OTP from your phone. Requires 2FAS Authenticator on phone.',
      edgeId: '2fas-two-factor-authent/dpaelbjipneennmjbjmgkdlbajncmbmj',
      chromeId: '2fas-two-factor-authentic/dbfoemgnkgieejfkaddieamagdfepnff',
      firefoxId: '2fas-two-factor-authentication',
      firefoxAndroid: 0,
      website: 'twofas/2fas-browser-extension'
    },
    {
      title: 'LanguageTool',
      info: 'Fix typos, grammar, and style issues in 25+ languages. Engine used is open-source and can be (optionally) self-hosted.',
      edgeId: 'grammar-checker-paraphr/hfjadhjooeceemgojogkhlppanjkbobc',
      chromeId: 'grammar-checker-paraphras/oldceeleldhonbafppcapldpdifcinji',
      firefoxId: 'languagetool',
      firefoxAndroid: 0,
      website: 'https://languagetool.org'
    }
  ];

  export const playStoreAndroidAppMetadata: playStoreAndroidAppInterface[] = [
    {
      title: 'Microsoft Todo',
      info: 'Simple task manager app with shared lists support.',
      playStoreId: 'com.microsoft.todos',
      revenue: 0
    },
    {
      title: 'Poweramp Music Player',
      info: 'Most feature rich music player on Android with a sleek interface.',
      playStoreId: 'com.maxmpz.audioplayer',
      revenue: 2
    },
    {
      title: 'Adobe Scan',
      info: 'Scan documents on the go. No annoying watermarks. Keeps a copy on Adobe Cloud.',
      playStoreId: 'com.adobe.scan.android',
      revenue: 0
    },
    {
      title: '2FA Authenticator',
      info: 'Manage 2FA codes. Keep your tokens backed up using built-in Google Drive integration.',
      playStoreId: 'com.twofasapp',
      revenue: 0
    },
    {
      title: 'Bitwarden Password Manager',
      info: 'Access your BitWarden vault on your phone and autofill passwords.',
      playStoreId: 'com.x8bit.bitwarden',
      revenue: 0
    },
    {
      title: 'LibreTorrent',
      info: 'Simple and clean open source bittorrent client.',
      playStoreId: 'org.proninyaroslav.libretorrent',
      revenue: 0
    },
    {
      title: 'mpv-android',
      info: 'No nonsense video player based on libmpv. Lacks library management features.',
      playStoreId: 'is.xyz.mpv',
      revenue: 0
    },
    {
      title: 'Firefox Beta',
      info: 'Clean design, privacy focused, and supports extensions.',
      playStoreId: 'org.mozilla.firefox_beta',
      revenue: 0
    },
    {
      title: 'GitHub',
      info: 'Use GitHub on the go.',
      playStoreId: 'com.github.android',
      revenue: 0
    },
    {
      title: 'FX File Manager',
      info: 'Clean and functional file manager. Network features (FTP) requires paid version.',
      playStoreId: 'nextapp.fx',
      revenue: 0
    },
    {
      title: 'Snapseed',
      info: 'Photo editing app with all the manual control you need.',
      playStoreId: 'com.niksoftware.snapseed',
      revenue: 0
    },
    {
      title: 'Nova Launcher Prime',
      info: 'Most feature rich and customizable launcher for Android.',
      playStoreId: 'com.teslacoilsw.launcher.prime',
      revenue: 2
    },
    {
      title: 'TickTick',
      info: 'Granular task manager app.',
      playStoreId: 'com.ticktick.task',
      revenue: 0
    },
    {
      title: 'Microsoft Office',
      info: 'The complete Office solution in one app.',
      playStoreId: 'com.microsoft.office.officehubrow',
      revenue: 1
    },
    {
      title: 'Solid Explorer File Manager',
      info: 'File manager with free network features (FTP).',
      playStoreId: 'pl.solidexplorer2',
      revenue: 1
    },
    {
      title: 'Overdrop - Weather & Radar',
      info: 'Elegant weather app.',
      playStoreId: 'widget.dd.com.overdrop.free',
      revenue: 1
    },
    {
      title: 'Obsidian',
      info: 'Markdown based notes / journal / notebook.',
      playStoreId: 'md.obsidian',
      revenue: 0
    },
    {
      title: 'Spark Mail',
      info: 'A multiplatform email client to organize and manage multiple email accounts. Free tier is ad-free.',
      playStoreId: 'com.readdle.spark',
      revenue: 0
    },
    {
      title: 'MX Player Pro',
      info: 'The best media player on Android by a mile. Zero lag scrubbing and handles stylized subtitles.',
      playStoreId: 'com.mxtech.videoplayer.pro',
      revenue: 2
    },
    {
      title: 'Moon+ Reader Pro',
      info: 'Feature rich e-book reader with beautiful themes (which also work on PDFs) and smooth scrolling.',
      playStoreId: 'com.flyersoft.moonreaderp',
      revenue: 2
    },
    {
      title: 'Noti Progress Bar',
      info: 'Add horizontal or circular progress bar overlays on screen. Visualize progress of downloads, videos, timers, and more.',
      playStoreId: 'com.gustavoas.noti',
      revenue: 2
    },
    {
      title: 'AniHyou',
      info: 'Open-source AniList client to discover and manage anime.',
      playStoreId: 'com.axiel7.anihyou',
      revenue: 0
    }
  ];

  export const offStoreAndroidAppMetadata: offStoreAndroidAppInterface[] = [
    {
      title: 'Mihon',
      info: "Manga reader with all the sources and tracking options you need. Fork of ledgendary Tachiyomi (RIP). Search 'keiyoushi/extensions' to add manga sources.",
      githubId: 'mihonapp/mihon',
      rootRequired: 0
    },
    {
      title: 'ReVanced Manager',
      info: 'Patch apps like YouTube, Spotify, Twitch, Reddit to remove ads and add additional features.',
      githubId: 'revanced/revanced-manager',
      rootRequired: 1
    },
    {
      title: 'Seal',
      info: 'Download audio/video from YouTube (and other popular websites supported by yt-dlp).',
      githubId: 'JunkFood02/Seal',
      rootRequired: 0
    },
    {
      title: 'YouTube ReVanced Extended',
      info: 'Fork of ReVanced with SponsorBlock and Return YouTube Dislikes built-in. Also supports YouTube Music.',
      githubId: 'NoName-exe/revanced-extended',
      rootRequired: 1
    }
  ];
</script>
