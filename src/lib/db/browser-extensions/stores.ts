import type { Browser } from "./schema";

const listingUrlBases: Record<Browser, string> = {
  edge: "https://microsoftedge.microsoft.com/addons/detail/",
  firefox: "https://addons.mozilla.org/en-US/firefox/addon/",
  chrome: "https://chromewebstore.google.com/detail/",
};

/**
 * Builds the public listing URL for a store id. Chrome and Edge ids already contain the slug and raw id, while Firefox ids are the addon slug on its own.
 */
export function browserListingUrl(browser: Browser, id: string): string {
  return `${listingUrlBases[browser]}${id}`;
}
