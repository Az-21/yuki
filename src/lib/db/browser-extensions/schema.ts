import { z } from "zod";

export const browserSchema = z.enum(["edge", "firefox", "chrome"]);
export type Browser = z.infer<typeof browserSchema>;

/**
 * A browser's listing for an extension. `browser` names the store, `id` is the store specific identifier used to build listing URLs, and `mobile` tells whether the extension is also available on that browser's mobile app. `id` and `mobile` are nullable because an extension is not listed on every store or mobile app.
 */
export const browserStoreSchema = z.object({
  browser: browserSchema,
  id: z.string().nullable(),
  mobile: z.boolean().nullable(),
});

export type BrowserStore = z.infer<typeof browserStoreSchema>;

/**
 * An extension plus its listings across browser stores. `website` points to the canonical site or repository, and `stores` holds a {@link browserStoreSchema} per browser, so adding a new browser is a data and enum change rather than a reshape of this object.
 */
export const browserExtensionSchema = z.object({
  name: z.string(),
  description: z.string(),
  website: z.string(),
  stores: z.array(browserStoreSchema),
});

export type BrowserExtension = z.infer<typeof browserExtensionSchema>;
