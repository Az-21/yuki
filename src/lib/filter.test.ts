import { describe, expect, it } from "vitest";

import { filterByText } from "./filter";

type Item = { name: string; description: string; hidden: string };

const item = (overrides: Partial<Item>): Item => ({ name: "", description: "", hidden: "", ...overrides });

const items: Item[] = [
  item({ name: "Bitwarden", description: "Autofill passwords.", hidden: "vault" }),
  item({ name: "Dark Reader", description: "Dark mode everywhere.", hidden: "night" }),
  item({ name: "No Mobile", description: "Desktop only.", hidden: "desktop" }),
];

const selectors = [(value: Item) => value.name, (value: Item) => value.description];

describe("filterByText", () => {
  it("returns every item for a blank query", () => {
    expect(filterByText(items, "", selectors)).toHaveLength(3);
  });

  it("returns every item for a whitespace only query", () => {
    expect(filterByText(items, "   ", selectors)).toHaveLength(3);
  });

  it("returns a copy when the query is blank", () => {
    expect(filterByText(items, "", selectors)).not.toBe(items);
  });

  it("matches a selector case insensitively", () => {
    expect(filterByText(items, "dark", selectors)).toEqual([expect.objectContaining({ name: "Dark Reader" })]);
  });

  it("matches when any selector contains the query", () => {
    expect(filterByText(items, "passwords", selectors)).toEqual([expect.objectContaining({ name: "Bitwarden" })]);
  });

  it("trims the query", () => {
    expect(filterByText(items, "  dark  ", selectors)).toHaveLength(1);
  });

  it("returns nothing when no selector matches", () => {
    expect(filterByText(items, "nonexistent", selectors)).toEqual([]);
  });

  it("only searches the fields its selectors expose", () => {
    expect(filterByText(items, "vault", selectors)).toEqual([]);
    expect(filterByText(items, "vault", [(value) => value.hidden])).toHaveLength(1);
  });
});
