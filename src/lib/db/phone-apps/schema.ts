import { z } from "zod";

export const storeSchema = z.enum(["app_store", "play_store", "sideload"]);
export type Store = z.infer<typeof storeSchema>;

/**
 * How an app makes money. Every app gets exactly one primary model, which drives the badge rendered next to its name.
 */
export const monetizationSchema = z.enum(["free", "ad_supported", "freemium_plus", "freemium_minus", "paid"]);
export type Monetization = z.infer<typeof monetizationSchema>;

/**
 * An app's listing in a single store. `store` names the store and `id` is the store specific identifier used to build listing URLs, or the full URL for a sideload. `id` is nullable because an app is not listed in every store.
 */
export const storeListingSchema = z.object({
  store: storeSchema,
  id: z.string().nullable(),
});

export type StoreListing = z.infer<typeof storeListingSchema>;

/**
 * An app plus how it is monetized and its listings across stores. `stores` holds a {@link storeListingSchema} per store, so adding a new store is a data and enum change rather than a reshape of this object.
 */
export const phoneAppSchema = z.object({
  name: z.string(),
  description: z.string(),
  monetization: monetizationSchema,
  stores: z.array(storeListingSchema),
});

export type PhoneApp = z.infer<typeof phoneAppSchema>;
