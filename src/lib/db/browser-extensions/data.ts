import { z } from "zod";

import { browserExtensionSchema } from "./schema";

export const _browserExtensions: z.input<typeof browserExtensionSchema>[] = [
  {
    name: "Bitwarden",
    description: "Access your BitWarden vault right in your browser and autofill passwords.",
    website: "https://github.com/bitwarden/clients",
    monetization: "freemium_plus",
    tags: ["passwords", "security", "autofill", "open source"],
    stores: [
      { browser: "edge", id: "bitwarden-free-password/jbkfoedolllekgbhcbcoahefnbanhhlh", mobile: null },
      { browser: "firefox", id: "bitwarden-password-manager", mobile: null },
      {
        browser: "chrome",
        id: "bitwarden-free-password-m/nngceckbapebfimnlniiiahkandclblb",
        mobile: null,
      },
    ],
  },
  {
    name: "Dark Reader",
    description: "Dark mode everywhere. Comes with site-specific optimizations.",
    website: "https://github.com/darkreader/darkreader",
    monetization: "free",
    tags: ["dark mode", "accessibility", "customization", "open source"],
    stores: [
      { browser: "edge", id: "dark-reader/ifoakfbpdcdoeenechcleahebpibofpc", mobile: true },
      { browser: "firefox", id: "darkreader", mobile: true },
      { browser: "chrome", id: "dark-reader/eimadpbcbfnmbkopoojfekhnkhdbieeh", mobile: false },
    ],
  },
];

export const browserExtensions = z.array(browserExtensionSchema).parse(_browserExtensions);
