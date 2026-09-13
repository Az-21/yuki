/**
 * Returns a copy of the items sorted by `name`, case insensitively so entries that differ only by case group together regardless of letter case.
 */
export function sortByName<T extends { name: string }>(items: readonly T[]): T[] {
  return [...items].sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: "base" }));
}
