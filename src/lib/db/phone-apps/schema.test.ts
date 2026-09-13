import { describe, expect, it } from "vitest";

import { phoneApps } from "./data";
import { monetizationSchema, phoneAppSchema, storeListingSchema, storeSchema } from "./schema";

describe("storeSchema", () => {
  it("accepts every known store", () => {
    for (const store of storeSchema.options) {
      expect(() => storeSchema.parse(store)).not.toThrow();
    }
  });

  it("rejects an unknown store", () => {
    expect(() => storeSchema.parse("aptoide")).toThrow();
  });
});

describe("monetizationSchema", () => {
  it("accepts every known monetization model", () => {
    for (const monetization of monetizationSchema.options) {
      expect(() => monetizationSchema.parse(monetization)).not.toThrow();
    }
  });

  it("rejects an unknown monetization model", () => {
    expect(() => monetizationSchema.parse("donationware")).toThrow();
  });
});

describe("storeListingSchema", () => {
  it("accepts a null id", () => {
    expect(() => storeListingSchema.parse({ store: "app_store", id: null })).not.toThrow();
  });

  it("accepts a defined id", () => {
    expect(() => storeListingSchema.parse({ store: "play_store", id: "com.example.app" })).not.toThrow();
  });

  it("rejects a missing store", () => {
    expect(() => storeListingSchema.parse({ id: null })).toThrow();
  });

  it("rejects an unknown store", () => {
    expect(() => storeListingSchema.parse({ store: "aptoide", id: null })).toThrow();
  });

  it("rejects a non-string id", () => {
    expect(() => storeListingSchema.parse({ store: "sideload", id: 42 })).toThrow();
  });
});

describe("phoneAppSchema", () => {
  it("accepts every entry in the database", () => {
    for (const app of phoneApps) {
      expect(() => phoneAppSchema.parse(app)).not.toThrow();
    }
  });

  it("rejects entries with missing required fields", () => {
    expect(() => phoneAppSchema.parse({ name: "Incomplete" })).toThrow();
  });

  it("rejects entries with a missing monetization model", () => {
    expect(() => phoneAppSchema.parse({ name: "Incomplete", description: "", stores: [] })).toThrow();
  });

  it("accepts empty strings and null store values", () => {
    expect(() =>
      phoneAppSchema.parse({
        name: "",
        description: "",
        monetization: "free",
        stores: [
          { store: "app_store", id: null },
          { store: "sideload", id: "" },
        ],
      }),
    ).not.toThrow();
  });
});
