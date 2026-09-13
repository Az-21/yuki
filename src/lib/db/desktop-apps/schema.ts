import { z } from "zod";

import { monetizationSchema } from "../monetization";
import { tagsSchema } from "../tags";

export const sourceSchema = z.enum(["winget", "brew", "yay", "mise"]);
export type Source = z.infer<typeof sourceSchema>;

/**
 * Order sources are shown in, both on each app card and in the aggregated commands. mise leads because it installs across operating systems and takes priority over the OS package managers, while the remaining sources stay in a stable Windows, macOS, Arch order.
 */
export const sourceOrder: readonly Source[] = ["mise", "winget", "brew", "yay"];

/**
 * An app's package in a single source. `source` names the package manager and `id` is the source specific package identifier used to build the install command. `id` is nullable because an app is not published to every source. `cask` is only meaningful for Homebrew and marks an id that needs `brew install --cask` rather than `brew install`, since casks and formulae cannot be combined in one command.
 */
export const sourceListingSchema = z.object({
  source: sourceSchema,
  id: z.string().nullable(),
  cask: z.boolean().optional(),
});

export type SourceListing = z.infer<typeof sourceListingSchema>;

/**
 * A desktop app plus how it is monetized and where it can be installed from. `tags` are the searchable labels rendered under the description, and `stores` holds a {@link sourceListingSchema} per source, so adding a new package manager is a data and enum change rather than a reshape of this object. When mise lists an app it takes priority and the app is left out of the other aggregated install commands, since mise installs across operating systems.
 */
export const desktopAppSchema = z.object({
  name: z.string(),
  description: z.string(),
  monetization: monetizationSchema,
  tags: tagsSchema,
  stores: z.array(sourceListingSchema),
});

export type DesktopApp = z.infer<typeof desktopAppSchema>;
