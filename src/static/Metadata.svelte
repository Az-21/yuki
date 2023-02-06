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
      title: 'Microsoft Edge Dev',
      subtitle:
        'The cutting edge Edge from Microsoft. Subjectively, the best browser out there in terms of features and performance.',
      free: 0,
      open: 1,
      website: 'https://www.microsoft.com/en-us/edge',
      cli: 'Microsoft.Edge.Dev'
    },
    {
      icon: `${cdn}v1620889733/yuki/office.png`,
      title: 'Microsoft Office',
      subtitle:
        'The original office suite. Free version features Office Online: a simplified version of Office with online collaboration.',
      free: 1,
      open: 2,
      website: 'https://www.office.com',
      cli: 'Microsoft.Office'
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
      icon: `${cdn}v1646026813/yuki/placeholder.png`,
      title: 'Figma',
      subtitle: 'Graphic design tool.',
      free: 0,
      open: 2,
      website: 'https://www.figma.com',
      cli: 'Figma.Figma'
    },
    {
      icon: `${cdn}v1646026813/yuki/placeholder.png`,
      title: 'DevToys',
      subtitle: 'An ever growing set of utilities for developers.',
      free: 0,
      open: 0,
      website: 'https://github.com/veler/DevToys',
      cli: '9PGCV4V3BK4W'
    },
    {
      icon: `${cdn}v1646026813/yuki/placeholder.png`,
      title: 'Obsidian',
      subtitle: 'Markdown based notes / journal / notebook.',
      free: 0,
      open: 2,
      website: 'https://obsidian.md',
      cli: 'Obsidian.Obsidian'
    },
    {
      icon: `${cdn}v1646026813/yuki/placeholder.png`,
      title: 'mpv.net',
      subtitle: 'mpv (media player) fork with some Windows specific features.',
      free: 0,
      open: 0,
      website: 'https://github.com/stax76/mpv.net',
      cli: '9N64SQZTB3LM'
    },
    {
      icon: `${cdn}v1646026813/yuki/placeholder.png`,
      title: 'TickTick',
      subtitle: 'Plan your tasks. Set subtasks. Add reminders. Create #groups and more.',
      free: 0,
      open: 2,
      website: 'https://ticktick.com',
      cli: 'Appest.TickTick'
    },
    {
      icon: `${cdn}v1646026813/yuki/placeholder.png`,
      title: '7zip',
      subtitle: 'Fast, efficient, and clean file archiver and extractor.',
      free: 0,
      open: 0,
      website: 'https://www.7-zip.org/',
      cli: '7zip.7zip'
    },
    {
      icon: `${cdn}v1646026813/yuki/placeholder.png`,
      title: 'Steam',
      subtitle: 'The biggest, most feature rich PC game store.',
      free: 0,
      open: 2,
      website: 'https://store.steampowered.com/',
      cli: 'Valve.Steam'
    },
    {
      icon: `${cdn}v1646026813/yuki/placeholder.png`,
      title: 'neovim',
      subtitle: 'Hyperextensible Vim-based text editor.',
      free: 0,
      open: 0,
      website: 'https://neovim.io/',
      cli: 'Neovim.Neovim'
    },
    {
      icon: `${cdn}v1646026813/yuki/placeholder.png`,
      title: 'Dropbox',
      subtitle: 'Great supplement to OneDrive as a secondary/shared drive.',
      free: 1,
      open: 2,
      website: 'https://www.dropbox.com/',
      cli: 'Dropbox.Dropbox'
    },
    {
      icon: `${cdn}v1646026813/yuki/placeholder.png`,
      title: 'AutoHotkey',
      subtitle:
        'Run custom utility scripts to remap keyboard and mouse, create new hotkeys, and automate your workflow.',
      free: 0,
      open: 0,
      website: 'https://www.autohotkey.com/',
      cli: 'Lexikos.AutoHotkey'
    },
    {
      icon: `${cdn}v1646026813/yuki/placeholder.png`,
      title: 'Nvidia GeForce Experience',
      subtitle: 'Manage and update your Nvidia graphics card drivers.',
      free: 0,
      open: 2,
      website: 'https://www.nvidia.com/en-us/geforce/geforce-experience/',
      cli: 'Nvidia.GeForceExperience'
    },
    {
      icon: `${cdn}v1646026813/yuki/placeholder.png`,
      title: 'Spark Mail',
      subtitle: 'A multiplatform email client to organize and manage multiple email accounts',
      free: 1,
      open: 1,
      website: 'https://sparkmailapp.com',
      cli: 'Readdle.Spark'
    },
    {
      icon: `${cdn}v1646026813/yuki/placeholder.png`,
      title: 'FFmpeg',
      subtitle: 'A CLI tool to record, convert, and stream audio and video.',
      free: 0,
      open: 0,
      website: 'https://ffmpeg.org',
      cli: 'Gyan.FFmpeg'
    }
  ];

  export const browserExtensionMetadata: browserExtensionInterface[] = [
    {
      title: 'Bitwarden',
      info: 'Access your BitWarden vault right in your browser and autofill passwords.',
      edgeId: 'bitwarden-free-password/jbkfoedolllekgbhcbcoahefnbanhhlh',
      chromeId: 'bitwarden-free-password-m/nngceckbapebfimnlniiiahkandclblb',
      firefoxId: 'bitwarden-password-manager',
      website: 'bitwarden/browser'
    },
    {
      title: 'uBlock Origin',
      info: 'Blocks ads, trackers, and more. Highly customizable and extensible via community maintained filters.',
      edgeId: 'ublock-origin/dfafepnkmbhccpbejgmiehpchacaeak',
      chromeId: 'ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm',
      firefoxId: 'ublock-origin',
      website: 'gorhill/uBlock'
    },
    {
      title: 'Dark Reader',
      info: 'Dark mode everywhere. Comes with site-specific optimizations.',
      edgeId: 'dark-reader/ifoakfbpdcdoeenechcleahebpibofpc',
      chromeId: 'dark-reader/eimadpbcbfnmbkopoojfekhnkhdbieeh',
      firefoxId: 'darkreader',
      website: 'darkreader/darkreader'
    },
    {
      title: 'SponsorBlock',
      info: 'Skip in-video ads, intros, outros, and annoying engagement reminders in YouTube videos.',
      edgeId: 'sponsorblock-for-youtube-/mbmgnelfcpoecdepckhlhegpcehmpmji',
      chromeId: 'sponsorblock-for-youtube/mnjggcdmjocbbbhaepdhchncahnbgone',
      firefoxId: 'sponsorblock',
      website: 'ajayyy/SponsorBlock'
    },
    {
      title: 'Keepa - Amazon Price Tracker',
      info: "Get the historic price data embedded within the Amazon's product listing page.",
      edgeId: 'keepa-amazon-price-trac/ejefaeioamebhekmfaclajddbpnnobje',
      chromeId: 'keepa-amazon-price-tracke/neebplgakaahbhdphmkckjjcegoiijjo',
      firefoxId: 'keepa',
      website: 'https://keepa.com'
    },
    {
      title: 'Reddit Enhancement Suite',
      info: 'Tons and tons of quality of life features for old reddit.',
      edgeId: 'reddit-enhancement-suite/jlhgedjpndhblehblebhncfmkkpngiep',
      chromeId: 'reddit-enhancement-suite/kbmfpngjjgdllneeigpgjifpgocmfgmb',
      firefoxId: 'reddit-enhancement-suite',
      website: 'honestbleeps/Reddit-Enhancement-Suite'
    },
    {
      title: 'SteamDB',
      info: 'Supercharge Steam (web-version) with useful info from SteamDB.',
      edgeId: 'steamdb/hjknpdomhlodgaebegjopkmfafjpbblg',
      chromeId: 'steamdb/kdbmhfkmnlmbkgbabkdealhhbfhlmmon',
      firefoxId: 'steam-database',
      website: 'SteamDatabase/BrowserExtension'
    },
    {
      title: 'ClearURLs',
      info: "Removes '&' metadata chain from URLs to make them cleaner and prevent tracking.",
      edgeId: 'clearurls/mdkdmaickkfdekbjdoojfalpbkgaddei',
      chromeId: 'clearurls/lckanjgmijmafbedllaakclkaicjfmnk',
      firefoxId: 'clearurls',
      website: 'ClearURLs/Addon'
    },
    {
      title: "I don't care about cookies",
      info: 'Removes annoying cookie warnings from (almost) all websites.',
      edgeId: 'i-dont-care-about-cookie/oholpbloipjbbhlhohaebmieiiieioal',
      chromeId: 'i-dont-care-about-cookies/fihnjjcciajhdojfnbdddfaoknhalnja',
      firefoxId: 'i-dont-care-about-cookies',
      website: 'https://www.i-dont-care-about-cookies.eu'
    },
    {
      title: 'Bookmark Sidebar',
      info: 'Hover at edge of browser to reveal your bookmarks.',
      edgeId: 'bookmark-sidebar/lmjefbghkfeppnpofmbfmhgodpclipbl',
      chromeId: 'bookmark-sidebar/jdbnofccmhefkmjbkkdkfiicjkgofkdh',
      firefoxId: '',
      website: 'Kiuryy/Bookmark_Sidebar'
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
      title: 'Sync for Reddit',
      info: 'Beautiful and customizable reddit client built from ground up with Material 3.',
      playStoreId: 'com.laurencedawson.reddit_sync',
      revenue: 1
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
      revenue: 0
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
      title: 'Telegram',
      info: 'Highly customizable, no nonsense messaging app. App is server-based, making multidevice usage easier.',
      playStoreId: 'org.telegram.messenger',
      revenue: 0
    },
    {
      title: 'Spark Mail',
      info: 'A multiplatform email client to organize and manage multiple email accounts. Free tier is ad-free.',
      playStoreId: 'com.readdle.spark',
      revenue: 0
    },
    {
      title: 'Joey for Reddit',
      info: 'A hypercustomizable reddit client which supports horizontal swiping between posts.',
      playStoreId: 'o.o.joey',
      revenue: 1
    },
    {
      title: 'FotMob',
      info: 'Live score, lineups, timeline, and calendar for football matches.',
      playStoreId: 'com.mobilefootie.wc2010',
      revenue: 1
    }
  ];

  export const offStoreAndroidAppMetadata: offStoreAndroidAppInterface[] = [
    {
      title: 'Tachiyomi',
      info: 'Manga reader with all the sources and tracking options you need.',
      githubId: 'tachiyomiorg/tachiyomi',
      rootRequired: 0
    },
    {
      title: 'YouTube ReVanced',
      info: 'YouTube with ad-block, sponsor block, and many quality of life features.',
      githubId: 'revanced/revanced-manager',
      rootRequired: 1
    },
    {
      title: 'Energized',
      info: 'Collection of host files to globally block in-app ads, trackers, and more.',
      githubId: 'EnergizedProtection/block',
      rootRequired: 2
    }
  ];
</script>
