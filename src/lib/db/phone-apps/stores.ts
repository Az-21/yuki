import type { Store } from "./schema";

const listingUrlBases: Record<Store, string> = {
  app_store: "https://apps.apple.com/app/id",
  play_store: "https://play.google.com/store/apps/details?id=",
  sideload: "",
};

/**
 * Builds the public listing URL for a store id. App Store and Play Store ids are the raw store identifiers that get prefixed with the store's URL, while sideload ids are already full URLs so they are returned unchanged.
 */
export function phoneAppListingUrl(store: Store, id: string): string {
  return `${listingUrlBases[store]}${id}`;
}
