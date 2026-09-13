import { describe, expect, it } from "vitest";

import { phoneAppListingUrl } from "./stores";

describe("phoneAppListingUrl", () => {
  it("prefixes the App Store base url", () => {
    expect(phoneAppListingUrl("app_store", "1288723196")).toBe("https://apps.apple.com/app/id1288723196");
  });

  it("prefixes the Play Store base url", () => {
    expect(phoneAppListingUrl("play_store", "com.microsoft.emmx")).toBe(
      "https://play.google.com/store/apps/details?id=com.microsoft.emmx",
    );
  });

  it("returns a sideload url unchanged", () => {
    expect(phoneAppListingUrl("sideload", "https://github.com/mihonapp/mihon/releases")).toBe(
      "https://github.com/mihonapp/mihon/releases",
    );
  });
});
