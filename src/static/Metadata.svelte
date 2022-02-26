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

  export const wingetMetadata: wingetInterface[] = [
    {
      icon: `${cdn}v1620889734/yuki/telegram.png`,
      title: 'Telegram',
      subtitle:
        'Telegram is a simple, to-the-point chat app. Content posted on Telegram is hosted on a server making multidevice usage easier.',
      free: 0,
      open: 0,
      website: 'https://telegram.org/',
      cli: 'Telegram.TelegramDesktop'
    },
    {
      icon: `${cdn}v1620889736/yuki/discord.png`,
      title: 'Discord',
      subtitle:
        'Discord features channels (containers) which can be used to organize different topics. The most feature rich chat app.',
      free: 1,
      open: 2,
      website: 'https://discord.com/',
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
      website: 'https://www.spotify.com/',
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
      website: 'https://www.office.com/',
      cli: 'Microsoft.Office'
    },
    {
      icon: `${cdn}v1620889732/yuki/mstodo.png`,
      title: 'Microsoft Todo',
      subtitle: 'Microsoft Todo is a cross-platform todo list which keeps things clean and simple.',
      free: 0,
      open: 2,
      website: 'https://todo.microsoft.com/',
      cli: '9NBLGGH5R558'
    },
    {
      icon: `${cdn}v1620889736/yuki/bitwarden.png`,
      title: 'Bitwarden',
      subtitle:
        'Bitwarden is a cross-platform password manager. The easiest and safest way to store all of your passwords, cards, IDs, and secure notes.',
      free: 0,
      open: 0,
      website: 'https://bitwarden.com/',
      cli: 'Bitwarden.Bitwarden'
    },
    {
      icon: `${cdn}v1620889735/yuki/warp.png`,
      title: 'Cloudflare WARP',
      subtitle:
        "Easily switch to Cloudflare's 1.1.1.1 DNS for fast and reliable internet. App includes an optional feature called WARP which acts like a freemium VPN.",
      free: 0,
      open: 2,
      website: 'https://1.1.1.1/',
      cli: 'Cloudflare.Warp'
    },
    {
      icon: `${cdn}v1620889736/yuki/calibre.png`,
      title: 'Calibre',
      subtitle: 'Calibre is a fully-featured e-book management software.',
      free: 0,
      open: 0,
      website: 'https://calibre-ebook.com/',
      cli: 'calibre.calibre'
    },
    {
      icon: `${cdn}v1620889735/yuki/youtubedl.png`,
      title: 'Open Video Downloader',
      subtitle: 'Download audio/video using URL. Supports (almost) every popular website.',
      free: 0,
      open: 0,
      website: 'https://github.com/jely2002/youtube-dl-gui',
      cli: 'jely2002.youtube-dl-gui'
    },
    {
      icon: `${cdn}v1620889733/yuki/obs.png`,
      title: 'OBS',
      subtitle: 'Free and open source software for video recording and live streaming.',
      free: 0,
      open: 0,
      website: 'https://obsproject.com/',
      cli: 'OBSProject.OBSStudio'
    },
    {
      icon: `${cdn}v1620889733/yuki/powershell.png`,
      title: 'PowerShell 7',
      subtitle: 'Shell for Windows. Also see Cascadia Code and oh-my-posh to spice up PowerShell.',
      free: 0,
      open: 0,
      website: 'https://github.com/PowerShell/PowerShell',
      cli: 'Microsoft.PowerShell'
    },
    {
      icon: `${cdn}v1620889732/yuki/git.png`,
      title: 'git',
      subtitle:
        'Version control solution. Package includes git BASH, git GUI, and shell integrations.',
      free: 0,
      open: 0,
      website: 'https://gitforwindows.org/',
      cli: 'Git.Git'
    },
    {
      icon: `${cdn}v1620889732/yuki/githubdesktop.png`,
      title: 'GitHub Desktop',
      subtitle:
        "Focus on what matters instead of fighting with git. Whether you're new to git or a seasoned user, GitHub Desktop simplifies your development workflow.",
      free: 0,
      open: 0,
      website: 'https://desktop.github.com/',
      cli: 'GitHub.GitHubDesktop'
    },
    {
      icon: `${cdn}v1620889736/yuki/vscode.png`,
      title: 'VS Code',
      subtitle: 'The de-facto text-editor-IDE hybrid of devs all over world.',
      free: 0,
      open: 0,
      website: 'https://code.visualstudio.com/',
      cli: 'Microsoft.VisualStudioCode'
    },
    {
      icon: `${cdn}v1620889735/yuki/visualstudio.png`,
      title: 'Visual Studio 2022',
      subtitle:
        'Full-featured IDE to code, debug, test, and deploy to any platform. Great for C++, C#, Unity, .NET, Python, data science, and JS frameworks.',
      free: 0,
      open: 2,
      website: 'https://visualstudio.microsoft.com/vs/',
      cli: 'Microsoft.VisualStudio.2022.Community'
    },
    {
      icon: `${cdn}v1620889734/yuki/python.png`,
      title: 'Python',
      subtitle: 'Install the Python programming language (v3).',
      free: 0,
      open: 0,
      website: 'https://www.python.org/',
      cli: 'Python.Python.3'
    },
    {
      icon: `${cdn}v1620889733/yuki/node.png`,
      title: 'Node.JS',
      subtitle: 'Install the Node.JS runtime.',
      free: 0,
      open: 0,
      website: 'https://nodejs.org/',
      cli: 'OpenJS.NodeJS'
    }
  ];

  export const browserExtensionMetadata: browserExtensionInterface[] = [
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
      title: 'Bitwarden',
      info: 'Access your BitWarden vault right in your browser and autofill passwords.',
      edgeId: 'bitwarden-free-password/jbkfoedolllekgbhcbcoahefnbanhhlh',
      chromeId: 'bitwarden-free-password-m/nngceckbapebfimnlniiiahkandclblb',
      firefoxId: 'bitwarden-password-manager',
      website: 'bitwarden/browser'
    },
    {
      title: 'Return YouTube Dislikes',
      info: 'Generate an estimation of dislikes on a YouTube video using community and historic data.',
      edgeId: '',
      chromeId: 'return-youtube-dislike/gebbhagfogifgggkldgodflihgfeippi',
      firefoxId: 'return-youtube-dislikes',
      website: 'Anarios/return-youtube-dislike'
    },
    {
      title: 'SteamDB',
      info: 'Supercharge Steam (web-version) with useful info from SteamDB.',
      edgeId: 'steamdb/hjknpdomhlodgaebegjopkmfafjpbblg',
      chromeId: 'steamdb/kdbmhfkmnlmbkgbabkdealhhbfhlmmon',
      firefoxId: 'steam-database',
      website: 'SteamDatabase/BrowserExtension'
    }
  ];
</script>
