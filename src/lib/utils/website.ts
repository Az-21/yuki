export type WebsiteKind = "github" | "other";

const githubHosts = new Set(["github.com", "www.github.com"]);

/**
 * Classifies a website URL so the UI can pick an icon and label. Returns "github" for GitHub hosts and "other" for everything else, including values that are not valid absolute URLs.
 */
export function websiteKind(url: string): WebsiteKind {
  try {
    return githubHosts.has(new URL(url).hostname) ? "github" : "other";
  } catch {
    return "other";
  }
}
