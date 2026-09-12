import { describe, expect, it } from "vitest";

import { lucideIconVariants } from "./icon.svelte";
import { svgIconVariants } from "./svg-icon.svelte";

const sizes = ["sm", "md", "lg"] as const;

describe("icon size parity", () => {
  it("defaults to the same size", () => {
    expect(lucideIconVariants()).toBe(svgIconVariants());
  });

  it.each(sizes)("resolves the %s size to the same classes", (size) => {
    expect(lucideIconVariants({ size })).toBe(svgIconVariants({ size }));
  });
});
