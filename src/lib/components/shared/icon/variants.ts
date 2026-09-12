import { tv, type VariantProps } from "tailwind-variants";

/**
 * Shared sizing for Lucide and raw SVG icons. Both wrappers render from this definition so their sizes cannot drift apart.
 */
export const iconVariants = tv({
  base: "shrink-0",
  variants: {
    size: {
      sm: "size-4",
      md: "size-5",
      lg: "size-6",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export type IconSize = VariantProps<typeof iconVariants>["size"];
