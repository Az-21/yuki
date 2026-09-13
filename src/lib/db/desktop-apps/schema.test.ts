import { describe, expect, it } from "vitest";

import { desktopApps } from "./data";
import { desktopAppSchema, sourceListingSchema, sourceSchema } from "./schema";

describe("sourceSchema", () => {
  it("accepts every known source", () => {
    for (const source of sourceSchema.options) {
      expect(() => sourceSchema.parse(source)).not.toThrow();
    }
  });

  it("rejects an unknown source", () => {
    expect(() => sourceSchema.parse("snap")).toThrow();
  });
});

describe("sourceListingSchema", () => {
  it("accepts a null id", () => {
    expect(() => sourceListingSchema.parse({ source: "winget", id: null })).not.toThrow();
  });

  it("accepts a defined id", () => {
    expect(() => sourceListingSchema.parse({ source: "brew", id: "app" })).not.toThrow();
  });

  it("rejects a missing source", () => {
    expect(() => sourceListingSchema.parse({ id: "app" })).toThrow();
  });

  it("rejects an unknown source", () => {
    expect(() => sourceListingSchema.parse({ source: "snap", id: null })).toThrow();
  });
});

describe("desktopAppSchema", () => {
  it("accepts every entry in the database", () => {
    for (const app of desktopApps) {
      expect(() => desktopAppSchema.parse(app)).not.toThrow();
    }
  });

  it("rejects an entry missing required fields", () => {
    expect(() => desktopAppSchema.parse({ name: "Incomplete" })).toThrow();
  });

  it("rejects an entry missing a monetization model", () => {
    expect(() => desktopAppSchema.parse({ name: "Incomplete", description: "", tags: [], stores: [] })).toThrow();
  });

  it("rejects tags that are not an array of strings", () => {
    expect(() => desktopAppSchema.parse({ name: "App", description: "", tags: "office", stores: [] })).toThrow();
  });
});
