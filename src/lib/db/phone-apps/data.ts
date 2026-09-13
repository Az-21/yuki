import { z } from "zod";

import { phoneAppSchema } from "./schema";

export const _phoneApps: z.input<typeof phoneAppSchema>[] = [
  {
    name: "Microsoft Edge",
    description: "Microsoft's Chromium browser with built-in tracking prevention and Copilot.",
    monetization: "ad_supported",
    tags: ["browser", "privacy", "ai"],
    stores: [
      { store: "app_store", id: "1288723196" },
      { store: "play_store", id: "com.microsoft.emmx" },
      { store: "sideload", id: null },
    ],
  },
  {
    name: "Google Keep",
    description: "Capture notes, lists, photos, and audio, then sync them across all your devices.",
    monetization: "free",
    tags: ["notes", "productivity", "sync"],
    stores: [
      { store: "app_store", id: "1029207872" },
      { store: "play_store", id: "com.google.android.keep" },
      { store: "sideload", id: null },
    ],
  },
  {
    name: "Mihon",
    description: "Open source manga reader. Sideload the APK from its GitHub releases.",
    monetization: "free",
    tags: ["manga", "reader", "open source"],
    stores: [
      { store: "app_store", id: null },
      { store: "play_store", id: null },
      { store: "sideload", id: "https://github.com/mihonapp/mihon/releases" },
    ],
  },
  {
    name: "Claude",
    description: "Anthropic's AI assistant for writing, research, and coding.",
    monetization: "freemium_minus",
    tags: ["ai", "assistant", "productivity"],
    stores: [
      { store: "app_store", id: "6473753684" },
      { store: "play_store", id: "com.anthropic.claude" },
      { store: "sideload", id: null },
    ],
  },
  {
    name: "Google Drive",
    description: "Store, sync, and share files and documents across all your devices.",
    monetization: "freemium_plus",
    tags: ["cloud storage", "files", "sync", "google"],
    stores: [
      { store: "app_store", id: "507874739" },
      { store: "play_store", id: "com.google.android.apps.docs" },
      { store: "sideload", id: null },
    ],
  },
  {
    name: "AniHyou",
    description: "Open source AniList client for tracking and discovering anime and manga.",
    monetization: "free",
    tags: ["anime", "manga", "tracking", "open source"],
    stores: [
      { store: "app_store", id: "1635777325" },
      { store: "play_store", id: "com.axiel7.anihyou" },
      { store: "sideload", id: "https://github.com/axiel7/AniHyou-android" },
    ],
  },
  {
    name: "GitHub",
    description: "Manage issues, pull requests, and code from your phone.",
    monetization: "freemium_plus",
    tags: ["development", "git", "code"],
    stores: [
      { store: "app_store", id: "1477376905" },
      { store: "play_store", id: "com.github.android" },
      { store: "sideload", id: null },
    ],
  },
  {
    name: "Google Maps",
    description: "Turn by turn navigation, transit directions, and local discovery.",
    monetization: "free",
    tags: ["maps", "navigation", "travel", "google"],
    stores: [
      { store: "app_store", id: "585027354" },
      { store: "play_store", id: "com.google.android.apps.maps" },
      { store: "sideload", id: null },
    ],
  },
  {
    name: "Google Photos",
    description: "Back up, search, and edit your photos and videos from anywhere.",
    monetization: "freemium_plus",
    tags: ["photos", "backup", "gallery", "google"],
    stores: [
      { store: "app_store", id: "962194608" },
      { store: "play_store", id: "com.google.android.apps.photos" },
      { store: "sideload", id: null },
    ],
  },
  {
    name: "Apple Music",
    description: "Apple's streaming service with lossless audio and curated playlists.",
    monetization: "paid",
    tags: ["music", "streaming", "audio", "apple"],
    stores: [
      { store: "app_store", id: "1108187390" },
      { store: "play_store", id: "com.apple.android.music" },
      { store: "sideload", id: null },
    ],
  },
  {
    name: "Outlook",
    description: "Unified email and calendar for Microsoft and other accounts.",
    monetization: "free",
    tags: ["email", "calendar", "microsoft", "productivity"],
    stores: [
      { store: "app_store", id: "951937596" },
      { store: "play_store", id: "com.microsoft.office.outlook" },
      { store: "sideload", id: null },
    ],
  },
  {
    name: "Proton Pass",
    description: "End to end encrypted password manager with passkeys and email aliases.",
    monetization: "freemium_plus",
    tags: ["passwords", "security", "privacy", "open source"],
    stores: [
      { store: "app_store", id: "6443490629" },
      { store: "play_store", id: "proton.android.pass" },
      { store: "sideload", id: null },
    ],
  },
  {
    name: "Proton Mail",
    description: "Encrypted email with a focus on privacy and no ads.",
    monetization: "freemium_plus",
    tags: ["email", "security", "privacy", "open source"],
    stores: [
      { store: "app_store", id: "979659905" },
      { store: "play_store", id: "ch.protonmail.android" },
      { store: "sideload", id: null },
    ],
  },
  {
    name: "Bitwarden",
    description: "Open source password manager that syncs across all your devices.",
    monetization: "freemium_plus",
    tags: ["passwords", "security", "autofill", "open source"],
    stores: [
      { store: "app_store", id: "1137397744" },
      { store: "play_store", id: "com.x8bit.bitwarden" },
      { store: "sideload", id: null },
    ],
  },
  {
    name: "Steam",
    description: "Buy games, chat with friends, and manage remote downloads.",
    monetization: "free",
    tags: ["games", "store", "social"],
    stores: [
      { store: "app_store", id: "495369748" },
      { store: "play_store", id: "com.valvesoftware.android.steam.community" },
      { store: "sideload", id: null },
    ],
  },
  {
    name: "Tachimanga",
    description: "Manga reader for local, Komga, and Kavita libraries on iOS.",
    monetization: "freemium_plus",
    tags: ["manga", "reader", "ios"],
    stores: [
      { store: "app_store", id: "6447486175" },
      { store: "play_store", id: null },
      { store: "sideload", id: null },
    ],
  },
  {
    name: "YouTube",
    description: "Watch videos, subscribe to channels, and browse Shorts.",
    monetization: "ad_supported",
    tags: ["video", "streaming", "social", "google"],
    stores: [
      { store: "app_store", id: "544007664" },
      { store: "play_store", id: "com.google.android.youtube" },
      { store: "sideload", id: null },
    ],
  },
  {
    name: "LibreTorrent",
    description: "Open source BitTorrent client with a clean, ad free interface.",
    monetization: "free",
    tags: ["torrent", "downloads", "open source"],
    stores: [
      { store: "app_store", id: null },
      { store: "play_store", id: "org.proninyaroslav.libretorrent" },
      { store: "sideload", id: "https://github.com/proninyaroslav/libretorrent/releases" },
    ],
  },
  {
    name: "Solid Explorer",
    description: "Dual pane file manager with cloud, root, and archive support.",
    monetization: "paid",
    tags: ["files", "file manager", "cloud"],
    stores: [
      { store: "app_store", id: null },
      { store: "play_store", id: "pl.solidexplorer2" },
      { store: "sideload", id: null },
    ],
  },
  {
    name: "Apple Reminders",
    description: "Built-in task manager for lists, due dates, and shared reminders.",
    monetization: "free",
    tags: ["tasks", "reminders", "apple", "productivity"],
    stores: [
      { store: "app_store", id: "1108187841" },
      { store: "play_store", id: null },
      { store: "sideload", id: null },
    ],
  },
  {
    name: "Microsoft To Do",
    description: "Plan your day with synced tasks, lists, and reminders.",
    monetization: "free",
    tags: ["tasks", "productivity", "microsoft", "sync"],
    stores: [
      { store: "app_store", id: "1212616790" },
      { store: "play_store", id: "com.microsoft.todos" },
      { store: "sideload", id: null },
    ],
  },
  {
    name: "MX Player",
    description: "Video player with hardware acceleration and gesture controls.",
    monetization: "ad_supported",
    tags: ["video", "player", "media"],
    stores: [
      { store: "app_store", id: null },
      { store: "play_store", id: "com.mxtech.videoplayer.ad" },
      { store: "sideload", id: null },
    ],
  },
  {
    name: "Nova Launcher Prime",
    description: "Unlocks custom gestures, icon swipes, and other extras in Nova Launcher.",
    monetization: "paid",
    tags: ["launcher", "customization", "android"],
    stores: [
      { store: "app_store", id: null },
      { store: "play_store", id: "com.teslacoilsw.launcher.prime" },
      { store: "sideload", id: null },
    ],
  },
  {
    name: "Poweramp",
    description: "Music player with a powerful equalizer, themes, and folder browsing.",
    monetization: "paid",
    tags: ["music", "player", "equalizer", "audio"],
    stores: [
      { store: "app_store", id: null },
      { store: "play_store", id: "com.maxmpz.audioplayer" },
      { store: "sideload", id: null },
    ],
  },
  {
    name: "Snapseed",
    description: "Google's photo editor with precise retouching and preset filters.",
    monetization: "free",
    tags: ["photos", "editing", "camera", "google"],
    stores: [
      { store: "app_store", id: "439438619" },
      { store: "play_store", id: "com.niksoftware.snapseed" },
      { store: "sideload", id: null },
    ],
  },
  {
    name: "TickTick",
    description: "To-do list and calendar with reminders, habits, and collaboration.",
    monetization: "freemium_plus",
    tags: ["tasks", "productivity", "calendar", "sync"],
    stores: [
      { store: "app_store", id: "626144601" },
      { store: "play_store", id: "com.ticktick.task" },
      { store: "sideload", id: null },
    ],
  },
  {
    name: "YTDLnis",
    description: "Open source video and audio downloader powered by yt-dlp.",
    monetization: "free",
    tags: ["downloads", "video", "audio", "open source"],
    stores: [
      { store: "app_store", id: null },
      { store: "play_store", id: null },
      { store: "sideload", id: "https://github.com/deniscerri/ytdlnis/releases" },
    ],
  },
  {
    name: "Firefox",
    description: "Privacy focused browser with tracking protection and add-ons.",
    monetization: "free",
    tags: ["browser", "privacy", "open source"],
    stores: [
      { store: "app_store", id: "989804926" },
      { store: "play_store", id: "org.mozilla.firefox" },
      { store: "sideload", id: null },
    ],
  },
];

export const phoneApps = z.array(phoneAppSchema).parse(_phoneApps);
