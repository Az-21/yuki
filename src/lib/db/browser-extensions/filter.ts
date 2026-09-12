import type { BrowserExtension } from "./schema";

/**
 * Case insensitive filter over an extension's name and description. A blank or whitespace only query matches everything.
 */
export function filterBrowserExtensions(extensions: BrowserExtension[], query = ""): BrowserExtension[] {
  const needle = query.trim().toLowerCase();
  if (needle === "") {
    return extensions;
  }
  return extensions.filter(
    (extension) =>
      extension.name.toLowerCase().includes(needle) || extension.description.toLowerCase().includes(needle),
  );
}
