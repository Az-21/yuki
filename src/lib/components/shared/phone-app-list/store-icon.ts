import type { Store } from "#lib/db/index.ts";
import { websiteKind } from "#lib/utils/index.ts";

export type StoreIconKind = "app_store" | "play_store" | "github" | "globe";

/**
 * Picks the icon for a store listing. App Store and Play Store each have a brand icon, while a sideload has no store icon so the id decides: a GitHub URL gets the GitHub icon and anything else the generic globe.
 */
export function storeIconKind(store: Store, id: string): StoreIconKind {
  if (store === "app_store") {
    return "app_store";
  }
  if (store === "play_store") {
    return "play_store";
  }
  return websiteKind(id) === "github" ? "github" : "globe";
}
