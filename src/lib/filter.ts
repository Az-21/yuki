/** Returns the string an item should be matched against. */
export type SearchSelector<T> = (item: T) => string;

/**
 * Generic, case insensitive text filter. An item matches when any selector's value contains the trimmed query, so callers decide which fields are searchable. A blank query returns a copy of every item. Returned items keep their input order.
 */
export function filterByText<T>(items: readonly T[], query: string, selectors: readonly SearchSelector<T>[]): T[] {
  const needle = query.trim().toLowerCase();
  if (needle === "") {
    return [...items];
  }
  return items.filter((item) => selectors.some((select) => select(item).toLowerCase().includes(needle)));
}
