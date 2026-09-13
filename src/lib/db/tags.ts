import { z } from "zod";

/**
 * A free form label attached to a phone app or browser extension. Tags are matched case insensitively by the section search and rendered as badges under the entry's description, so they should stay short and reusable across entries.
 */
export const tagSchema = z.string();
export type Tag = z.infer<typeof tagSchema>;

/** The tags attached to a single entry. Entries without tags use an empty array. */
export const tagsSchema = z.array(tagSchema);
export type Tags = z.infer<typeof tagsSchema>;
