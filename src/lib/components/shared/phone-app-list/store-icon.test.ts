import { describe, expect, it } from "vitest";

import { storeIconKind } from "./store-icon";

describe("storeIconKind", () => {
  it("uses the App Store icon for an App Store listing", () => {
    expect(storeIconKind("app_store", "1288723196")).toBe("app_store");
  });

  it("uses the Play Store icon for a Play Store listing", () => {
    expect(storeIconKind("play_store", "com.microsoft.emmx")).toBe("play_store");
  });

  it("uses the GitHub icon for a sideload hosted on GitHub", () => {
    expect(storeIconKind("sideload", "https://github.com/mihonapp/mihon/releases")).toBe("github");
  });

  it("falls back to the globe for a sideload on another host", () => {
    expect(storeIconKind("sideload", "https://f-droid.org/packages/example")).toBe("globe");
  });

  it("falls back to the globe for a bare sideload id", () => {
    expect(storeIconKind("sideload", "example.apk")).toBe("globe");
  });
});
