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

  export const wingetMetadata: wingetInterface[] = [
    {
      icon: `${cdn}v1620889734/yuki/telegram_qq0ihg.png`,
      title: 'Telegram',
      subtitle:
        'Telegram is a simple, to-the-point chat app. Content posted on Telegram is hosted on a server making multidevice usage easier.',
      free: 0,
      open: 0,
      website: 'https://telegram.org/',
      cli: 'Telegram.TelegramDesktop'
    },
    {
      icon: `${cdn}v1620889736/yuki/discord_g8dbih.png`,
      title: 'Discord',
      subtitle:
        'Discord features channels (containers) which can be used to organize different topics. The most feature rich chat app.',
      free: 1,
      open: 2,
      website: 'https://discord.com/',
      cli: 'Discord.Discord'
    },
    {
      icon: `${cdn}v1620889734/yuki/powertoys_o5vyix.png`,
      title: 'Microsoft PowerToys',
      subtitle: 'Collection of extremely useful utilities for Windows 10+.',
      free: 0,
      open: 0,
      website: 'https://github.com/microsoft/PowerToys',
      cli: 'Microsoft.PowerToys'
    },
    {
      icon: `${cdn}v1620889734/yuki/spotify_a2uido.png`,
      title: 'Spotify',
      subtitle: 'Stream music, create playlists, join friends.',
      free: 1,
      open: 2,
      website: 'https://www.spotify.com/',
      cli: 'Spotify.Spotify'
    },
    {
      icon: `${cdn}v1620889734/yuki/qbittorret_nzaq8m.png`,
      title: 'qBitTorrent Enhanced',
      subtitle:
        'qBittorrent is a bittorrent client programmed in C++. The enhanced version is a fork with some extra features.',
      free: 0,
      open: 0,
      website: 'https://github.com/c0re100/qBittorrent-Enhanced-Edition',
      cli: 'c0re100.qBittorrent-Enhanced-Edition'
    },
    {
      icon: `${cdn}v1620889736/yuki/edge_hjiov7.png`,
      title: 'Microsoft Edge Dev',
      subtitle:
        'The cutting edge Edge from Microsoft. Subjectively, the best browser out there in terms of features and performance.',
      free: 0,
      open: 1,
      website: 'https://www.microsoft.com/en-us/edge',
      cli: 'Microsoft.Edge.Dev'
    },
    {
      icon: `${cdn}v1620889733/yuki/office_auw3dm.png`,
      title: 'Microsoft Office',
      subtitle:
        'The original office suite. Free version features Office Online: a simplified version of Office with online collaboration.',
      free: 1,
      open: 2,
      website: 'https://www.office.com/',
      cli: 'Microsoft.Office'
    },
    {
      icon: `${cdn}v1620889732/yuki/mstodo_uzjfv3.png`,
      title: 'Microsoft Todo',
      subtitle: 'Microsoft Todo is a cross-platform todo list which keeps things clean and simple.',
      free: 0,
      open: 0,
      website: 'https://todo.microsoft.com/',
      cli: '9NBLGGH5R558'
    },
    {
      icon: `${cdn}v1620889736/yuki/bitwarden_on4rj6.png`,
      title: 'Bitwarden',
      subtitle:
        'Bitwarden is a cross-platform password manager. The easiest and safest way to store all of your passwords, cards, IDs, and secure notes.',
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
      subtitle: 'Calibre is a fully-featured e-book management software.',
      free: 0,
      open: 0,
      website: 'https://calibre-ebook.com/',
      cli: 'calibre.calibre'
    },
    {
      icon: `${cdn}v1620889735/yuki/youtubedl_zagpcc.png`,
      title: 'Open Video Downloader',
      subtitle: 'Download audio/video using URL. Supports (almost) every popular website.',
      free: 0,
      open: 0,
      website: 'https://github.com/jely2002/youtube-dl-gui',
      cli: 'jely2002.youtube-dl-gui'
    },
    {
      icon: `${cdn}v1620889733/yuki/obs_mfqshc.png`,
      title: 'OBS',
      subtitle: 'Free and open source software for video recording and live streaming.',
      free: 0,
      open: 0,
      website: 'https://obsproject.com/',
      cli: 'OBSProject.OBSStudio'
    },
    {
      icon: `${cdn}v1620889733/yuki/powershell_arqeni.png`,
      title: 'PowerShell 7',
      subtitle: 'Shell for Windows. Also see Cascadia Mono and oh-my-posh to spice up PowerShell.',
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
      subtitle: 'The de-facto text-editor-IDE hybrid of devs all over world.',
      free: 0,
      open: 0,
      website: 'https://code.visualstudio.com/',
      cli: 'Microsoft.VisualStudioCode'
    },
    {
      icon: `${cdn}v1620889735/yuki/visualstudio_swdmuc.png`,
      title: 'Visual Studio 2022',
      subtitle:
        'Full-featured IDE to code, debug, test, and deploy to any platform. Great for C++, C#, Unity, .NET, Python, data science, and JS frameworks.',
      free: 0,
      open: 2,
      website: 'https://visualstudio.microsoft.com/vs/',
      cli: 'Microsoft.VisualStudio.2022.Community'
    },
    {
      icon: `${cdn}v1620889734/yuki/python_pzpsbt.png`,
      title: 'Python',
      subtitle: 'Install the Python programming language (v3).',
      free: 0,
      open: 0,
      website: 'https://www.python.org/',
      cli: 'Python.Python.3'
    },
    {
      icon: `${cdn}v1620889733/yuki/node_hmdys7.png`,
      title: 'Node.JS',
      subtitle: 'Install the Node.JS runtime.',
      free: 0,
      open: 0,
      website: 'https://nodejs.org/',
      cli: 'OpenJS.NodeJS'
    }
  ];
</script>
