import { z } from "zod";

/**
 * How an app or browser extension makes money. Every entry gets exactly one primary model, which drives the badge rendered next to its name.
 */
export const monetizationSchema = z.enum(["free", "ad_supported", "freemium_plus", "freemium_minus", "paid"]);
export type Monetization = z.infer<typeof monetizationSchema>;
