import { z } from "zod";

import { desktopAppSchema } from "./schema";

export const _desktopApps: z.input<typeof desktopAppSchema>[] = [
  {
    name: "Git",
    description: "Distributed version control system for tracking changes in source code.",
    monetization: "free",
    tags: ["development", "version control", "open source"],
    stores: [
      { source: "winget", id: "Git.Git" },
      { source: "brew", id: "git" },
      { source: "yay", id: "git" },
      { source: "mise", id: null },
    ],
  },
  {
    name: "ONLYOFFICE Desktop Editors",
    description: "Open source office suite for documents, spreadsheets, and presentations.",
    monetization: "freemium_plus",
    tags: ["office", "documents", "open source"],
    stores: [
      { source: "winget", id: "ONLYOFFICE.DesktopEditors" },
      { source: "brew", id: "onlyoffice", cask: true },
      { source: "yay", id: "onlyoffice-bin" },
      { source: "mise", id: null },
    ],
  },
  {
    name: "Bun",
    description: "Fast all in one JavaScript runtime, bundler, test runner, and package manager.",
    monetization: "free",
    tags: ["javascript", "runtime", "development", "open source"],
    stores: [
      { source: "winget", id: "Oven-sh.Bun" },
      { source: "brew", id: "bun" },
      { source: "yay", id: "bun-bin" },
      { source: "mise", id: "bun" },
    ],
  },
  {
    name: "Microsoft Office",
    description: "Microsoft's productivity suite with Word, Excel, PowerPoint, and Outlook.",
    monetization: "paid",
    tags: ["office", "documents", "microsoft", "productivity"],
    stores: [
      { source: "winget", id: "Microsoft.Office" },
      { source: "brew", id: "microsoft-office", cask: true },
      { source: "yay", id: null },
      { source: "mise", id: null },
    ],
  },
];

export const desktopApps = z.array(desktopAppSchema).parse(_desktopApps);
