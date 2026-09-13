import type { DesktopApp, Source, SourceListing } from "./schema";
import { sourceOrder } from "./schema";

/** Command that installs one or more packages from a source. */
const commandPrefix: Record<Source, string> = {
  winget: "winget install",
  brew: "brew install",
  yay: "yay -S",
  mise: "mise use -g",
};

/** Operating systems reached through a source, used to phrase availability warnings. mise is omitted because it installs on every OS. */
const operatingSystemSources = ["winget", "brew", "yay"] as const;

const operatingSystemName: Record<(typeof operatingSystemSources)[number], string> = {
  winget: "Windows",
  brew: "macOS",
  yay: "Arch Linux",
};

/** A store listing that has an id, so it has a usable install command. */
export type InstallableListing = SourceListing & { id: string };

/** Picks out the store listings that have an id, narrowing each id from nullable to a string and sorting them into {@link sourceOrder} so mise is shown first. */
export function installableStores(app: DesktopApp): InstallableListing[] {
  return app.stores
    .filter((store): store is InstallableListing => store.id !== null)
    .sort((a, b) => sourceOrder.indexOf(a.source) - sourceOrder.indexOf(b.source));
}

/**
 * Prefix that installs packages from a source. A Homebrew cask needs its own flag, which is also why casks and formulae cannot be merged into one `brew install` command.
 */
function installPrefix(source: Source, cask = false): string {
  return source === "brew" && cask ? "brew install --cask" : commandPrefix[source];
}

/** The install command for a single package, for example `winget install ONLYOFFICE.DesktopEditors` or `brew install --cask onlyoffice`. */
export function installCommand(source: Source, id: string, cask = false): string {
  return `${installPrefix(source, cask)} ${id}`;
}

/**
 * Whether mise can install the app. mise works across operating systems, so an app with a mise id never needs another source and never warns about a missing platform.
 */
export function hasMise(app: DesktopApp): boolean {
  return app.stores.some((store) => store.source === "mise" && store.id !== null);
}

/**
 * The listings to install from one source across the given apps. Apps that mise can install are skipped for every other source so they only ever appear once, in the mise command. Order follows the input so callers can pass a stable, sorted list.
 */
export function sourceListings(apps: readonly DesktopApp[], source: Source): InstallableListing[] {
  return apps.flatMap((app) => {
    const listing = app.stores.find((store) => store.source === source);
    if (listing?.id == null) {
      return [];
    }
    if (source !== "mise" && hasMise(app)) {
      return [];
    }
    return [{ ...listing, id: listing.id }];
  });
}

/**
 * The package ids to combine for one source across the given apps. Thin wrapper over {@link sourceListings} for callers that only need the ids.
 */
export function sourcePackageIds(apps: readonly DesktopApp[], source: Source): string[] {
  return sourceListings(apps, source).map((listing) => listing.id);
}

/** A ready to paste command plus the source it installs from. */
export type SourceCommand = {
  source: Source;
  command: string;
};

/**
 * One install command per source, in source order, so the UI can render each as its own row. Sources with nothing to install are omitted rather than left as empty commands. Homebrew formulae and casks cannot share a `brew install`, so when both are present they are chained with `&&` into a single row instead of producing two aggregates.
 */
export function combinedSourceCommands(apps: readonly DesktopApp[]): SourceCommand[] {
  return sourceOrder.flatMap((source) => {
    const groups = new Map<string, string[]>();
    for (const listing of sourceListings(apps, source)) {
      const prefix = installPrefix(listing.source, listing.cask);
      groups.set(prefix, [...(groups.get(prefix) ?? []), listing.id]);
    }
    const commands = [...groups].map(([prefix, ids]) => `${prefix} ${ids.join(" ")}`);
    return commands.length > 0 ? [{ source, command: commands.join(" && ") }] : [];
  });
}

/**
 * A ready to paste install script that combines the apps into one command per source, or an empty string when none of the apps have a usable package id. Useful when a single string is needed, such as copying.
 */
export function combinedInstallCommand(apps: readonly DesktopApp[]): string {
  return combinedSourceCommands(apps)
    .map(({ command }) => command)
    .join("\n");
}

/**
 * Warnings for apps that cannot be installed on an operating system and that mise cannot cover. Apps installed through mise never warn, since mise reaches every OS, and apps that only miss sources outside an OS mapping are ignored.
 */
export function unavailableWarnings(apps: readonly DesktopApp[]): string[] {
  return operatingSystemSources.flatMap((source) => {
    const missing = apps
      .filter((app) => {
        if (hasMise(app)) {
          return false;
        }
        const listing = app.stores.find((store) => store.source === source);
        return listing?.id == null;
      })
      .map((app) => app.name);
    return missing.length > 0 ? [`Not available on ${operatingSystemName[source]}: ${missing.join(", ")}`] : [];
  });
}
