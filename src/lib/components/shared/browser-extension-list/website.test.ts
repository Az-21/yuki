import { describe, expect, it } from "vitest";

import { websiteKind } from "./website";

describe("websiteKind", () => {
  it("detects github.com", () => {
    expect(websiteKind("https://github.com/bitwarden/clients")).toBe("github");
  });

  it("detects www.github.com", () => {
    expect(websiteKind("https://www.github.com/bitwarden/clients")).toBe("github");
  });

  it("treats other hosts as other", () => {
    expect(websiteKind("https://bitwarden.com")).toBe("other");
  });

  it("does not match lookalike hosts", () => {
    expect(websiteKind("https://notgithub.com/bitwarden")).toBe("other");
  });

  it("treats values that are not absolute urls as other", () => {
    expect(websiteKind("github/bitwarden/clients")).toBe("other");
  });
});
