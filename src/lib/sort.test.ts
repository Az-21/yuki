import { describe, expect, it } from "vitest";

import { sortByName } from "./sort";

const names = (items: readonly { name: string }[]) => items.map((item) => item.name);

describe("sortByName", () => {
  it("sorts items by name", () => {
    const items = [{ name: "banana" }, { name: "Apple" }, { name: "cherry" }];
    expect(names(sortByName(items))).toEqual(["Apple", "banana", "cherry"]);
  });

  it("ignores case when ordering", () => {
    const items = [{ name: "beta" }, { name: "Alpha" }, { name: "gamma" }];
    expect(names(sortByName(items))).toEqual(["Alpha", "beta", "gamma"]);
  });

  it("does not mutate the input", () => {
    const items = [{ name: "b" }, { name: "a" }];
    sortByName(items);
    expect(names(items)).toEqual(["b", "a"]);
  });

  it("returns a copy for an already sorted input", () => {
    const items = [{ name: "a" }, { name: "b" }];
    expect(sortByName(items)).not.toBe(items);
  });

  it("returns an empty array for an empty input", () => {
    expect(sortByName([])).toEqual([]);
  });
});
