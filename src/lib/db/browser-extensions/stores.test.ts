import { describe, expect, it } from "vitest";

import { browserListingUrl } from "./stores";

describe("browserListingUrl", () => {
  it("prefixes the Chrome Web Store base url", () => {
    expect(browserListingUrl("chrome", "slug/id")).toBe("https://chromewebstore.google.com/detail/slug/id");
  });

  it("prefixes the Edge Add-ons base url", () => {
    expect(browserListingUrl("edge", "slug/id")).toBe("https://microsoftedge.microsoft.com/addons/detail/slug/id");
  });

  it("prefixes the Firefox Add-ons base url", () => {
    expect(browserListingUrl("firefox", "slug")).toBe("https://addons.mozilla.org/en-US/firefox/addon/slug");
  });
});
