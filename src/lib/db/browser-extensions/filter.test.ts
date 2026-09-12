import { describe, expect, it } from "vitest";

import { filterBrowserExtensions } from "./filter";
import type { BrowserExtension } from "./schema";

const extension = (overrides: Partial<BrowserExtension>): BrowserExtension => ({
  name: "",
  description: "",
  website: "",
  stores: [],
  ...overrides,
});

const extensions: BrowserExtension[] = [
  extension({ name: "Bitwarden", description: "Autofill passwords." }),
  extension({ name: "Dark Reader", description: "Dark mode everywhere." }),
  extension({ name: "No Mobile", description: "Desktop only." }),
];

describe("filterBrowserExtensions", () => {
  it("returns everything without a query", () => {
    expect(filterBrowserExtensions(extensions)).toHaveLength(3);
  });

  it("returns everything for a blank query", () => {
    expect(filterBrowserExtensions(extensions, "   ")).toHaveLength(3);
  });

  it("matches the name case insensitively", () => {
    expect(filterBrowserExtensions(extensions, "dark")).toEqual([expect.objectContaining({ name: "Dark Reader" })]);
  });

  it("matches the description", () => {
    expect(filterBrowserExtensions(extensions, "passwords")).toEqual([expect.objectContaining({ name: "Bitwarden" })]);
  });

  it("trims the query", () => {
    expect(filterBrowserExtensions(extensions, "  dark  ")).toHaveLength(1);
  });

  it("returns nothing when there is no match", () => {
    expect(filterBrowserExtensions(extensions, "nonexistent")).toEqual([]);
  });
});
