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
      { browser: "edge", id: "bitwarden-free-password/jbkfoedolllekgbhcbcoahefnbanhhlh", mobile: false },
      { browser: "firefox", id: "bitwarden-password-manager", mobile: null },
      {
        browser: "chrome",
        id: "bitwarden-free-password-m/nngceckbapebfimnlniiiahkandclblb",
        mobile: false,
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
  {
    name: "Keepa",
    description: "Amazon price history charts and drop alerts on product pages.",
    website: "https://keepa.com",
    monetization: "freemium_plus",
    tags: ["amazon", "price tracker", "shopping"],
    stores: [
      { browser: "edge", id: "keepa-amazon-price-tracker/ejefaeioamebhekmfaclajddbpnnobje", mobile: true },
      { browser: "firefox", id: "keepa", mobile: null },
      { browser: "chrome", id: "keepa-amazon-price-tracker/neebplgakaahbhdphmkckjjcegoiijjo", mobile: false },
    ],
  },
  {
    name: "SponsorBlock",
    description: "Skips sponsor segments and other non music sections on YouTube.",
    website: "https://sponsor.ajay.app",
    monetization: "free",
    tags: ["youtube", "sponsors", "open source"],
    stores: [
      { browser: "edge", id: "sponsorblock-for-youtube/mbmgnelfcpoecdepckhlhegpcehmpmji", mobile: true },
      { browser: "firefox", id: "sponsorblock", mobile: null },
      { browser: "chrome", id: "sponsorblock-for-youtube/mnjggcdmjocbbbhaepdhchncahnbgone", mobile: false },
    ],
  },
  {
    name: "uBlock Origin",
    description: "Wide spectrum content blocker. Chromium browsers get the Manifest V3 Lite edition.",
    website: "https://github.com/gorhill/uBlock",
    monetization: "free",
    tags: ["ad blocker", "privacy", "open source"],
    stores: [
      { browser: "edge", id: "ublock-origin-lite/cimighlppcgcoapaliogpjjdehbnofhn", mobile: true },
      { browser: "firefox", id: "ublock-origin", mobile: null },
      { browser: "chrome", id: "ublock-origin-lite/ddkjiahejlhfcafbddmgiahcphecmpfh", mobile: false },
    ],
  },
  {
    name: "Harper",
    description: "Private, offline grammar and spelling checker for the web.",
    website: "https://writewithharper.com",
    monetization: "free",
    tags: ["grammar", "writing", "privacy", "open source"],
    stores: [
      { browser: "edge", id: "private-grammar-checker-harper/ihjkkjfembmnjldmdchmadigpmapkpdh", mobile: false },
      { browser: "firefox", id: "private-grammar-checker-harper", mobile: null },
      { browser: "chrome", id: "private-grammar-checker-harper/lodbfhdipoipcjmlebjbgmmgekckhpfb", mobile: false },
    ],
  },
  {
    name: "Proton Pass",
    description: "End to end encrypted password manager with passkeys and email aliases.",
    website: "https://proton.me/pass",
    monetization: "freemium_plus",
    tags: ["passwords", "security", "privacy", "open source"],
    stores: [
      { browser: "edge", id: "proton-pass-free-password/gcllgfdnfnllodcaambdaknbipemelie", mobile: false },
      { browser: "firefox", id: "proton-pass", mobile: null },
      { browser: "chrome", id: "proton-pass-free-password/ghmbeldphafepmbegfdlkpapadhbakde", mobile: false },
    ],
  },
];

export const browserExtensions = z.array(browserExtensionSchema).parse(_browserExtensions);
