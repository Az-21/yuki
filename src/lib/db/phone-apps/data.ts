import { z } from "zod";

import { phoneAppSchema } from "./schema";

export const _phoneApps: z.input<typeof phoneAppSchema>[] = [
  {
    name: "Microsoft Edge",
    description: "Microsoft's Chromium browser with built-in tracking prevention and Copilot.",
    monetization: "ad_supported",
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
    stores: [
      { store: "app_store", id: "6473753684" },
      { store: "play_store", id: "com.anthropic.claude" },
      { store: "sideload", id: null },
    ],
  },
];

export const phoneApps = z.array(phoneAppSchema).parse(_phoneApps);
