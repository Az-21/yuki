import { describe, expect, it } from "vitest";

import { browserExtensions } from "./data";
import { browserExtensionSchema, browserSchema, browserStoreSchema } from "./schema";

describe("browserSchema", () => {
  it("accepts every known browser", () => {
    for (const browser of browserSchema.options) {
      expect(() => browserSchema.parse(browser)).not.toThrow();
    }
  });

  it("rejects an unknown browser", () => {
    expect(() => browserSchema.parse("safari")).toThrow();
  });
});

describe("browserStoreSchema", () => {
  it("accepts null id and mobile", () => {
    expect(() => browserStoreSchema.parse({ browser: "chrome", id: null, mobile: null })).not.toThrow();
  });

  it("accepts a defined id and mobile", () => {
    expect(() => browserStoreSchema.parse({ browser: "edge", id: "extension-id", mobile: true })).not.toThrow();
  });

  it("rejects a missing browser", () => {
    expect(() => browserStoreSchema.parse({ id: null, mobile: null })).toThrow();
  });

  it("rejects an unknown browser", () => {
    expect(() => browserStoreSchema.parse({ browser: "safari", id: null, mobile: null })).toThrow();
  });

  it("rejects a non-boolean mobile", () => {
    expect(() => browserStoreSchema.parse({ browser: "firefox", id: "extension-id", mobile: "yes" })).toThrow();
  });
});

describe("browserExtensionSchema", () => {
  it("accepts every entry in the database", () => {
    for (const extension of browserExtensions) {
      expect(() => browserExtensionSchema.parse(extension)).not.toThrow();
    }
  });

  it("rejects entries with missing required fields", () => {
    expect(() => browserExtensionSchema.parse({ name: "Incomplete" })).toThrow();
  });

  it("rejects entries with a missing monetization model", () => {
    expect(() =>
      browserExtensionSchema.parse({ name: "Incomplete", description: "", website: "", stores: [] }),
    ).toThrow();
  });

  it("accepts empty strings and null store values", () => {
    expect(() =>
      browserExtensionSchema.parse({
        name: "",
        description: "",
        website: "",
        monetization: "free",
        tags: [],
        stores: [
          { browser: "edge", id: null, mobile: null },
          { browser: "firefox", id: "", mobile: false },
        ],
      }),
    ).not.toThrow();
  });

  it("accepts a list of tags", () => {
    expect(() =>
      browserExtensionSchema.parse({
        name: "Bitwarden",
        description: "",
        website: "",
        monetization: "free",
        tags: ["passwords", "open source"],
        stores: [],
      }),
    ).not.toThrow();
  });

  it("rejects a missing tags field", () => {
    expect(() =>
      browserExtensionSchema.parse({
        name: "Bitwarden",
        description: "",
        website: "",
        monetization: "free",
        stores: [],
      }),
    ).toThrow();
  });

  it("rejects tags that are not an array of strings", () => {
    expect(() =>
      browserExtensionSchema.parse({
        name: "Bitwarden",
        description: "",
        website: "",
        monetization: "free",
        tags: "passwords",
        stores: [],
      }),
    ).toThrow();
    expect(() =>
      browserExtensionSchema.parse({
        name: "Bitwarden",
        description: "",
        website: "",
        monetization: "free",
        tags: ["passwords", 42],
        stores: [],
      }),
    ).toThrow();
  });
});
