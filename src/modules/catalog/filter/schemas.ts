import z from "zod";

export const AttributeRangeSchema = z
  .object({
    min: z.number().int().min(0).optional(),
    max: z.number().int().min(1).optional(),
  })
  .refine(({ min, max }) => min === undefined || max === undefined || max >= min, {
    message: "max не может быть меньше min",
  });

export const PriceRangeSchema = z
  .object({
    min: z.number().min(0).max(100000).optional(),
    max: z.number().min(1).max(100000).optional(),
  })
  .refine(({ min, max }) => min === undefined || max === undefined || max >= min, {
    message: "max не может быть меньше min",
  });

export const AttributeSchema = z.discriminatedUnion("type", [
  z.object({
    field: z.string().max(128).min(1),
    type: z.literal("RANGE"),
    range: AttributeRangeSchema,
    values: z.never().optional(),
  }),

  z.object({
    field: z.string().max(128).min(1),
    type: z.enum(["RADIO", "SELECTOR", "SWITCH"]),
    values: z.array(z.string().max(128)).min(1).max(50),
    range: z.never().optional(),
  }),
]);

export const BaseFilterSchema = z.object({
  gameIds: z
    .array(z.string().regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i))
    .max(100)
    .optional(),
  gameCategoryIds: z
    .array(z.string().regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i))
    .max(100)
    .optional(),
  categoryIds: z
    .array(z.string().regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i))
    .max(100)
    .optional(),
  excludeItemIds: z
    .array(z.string().regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i))
    .max(10)
    .optional(),
  hideSensitiveItemsForTelegram: z.boolean().optional(),
});

export const ItemsFilterSchema = BaseFilterSchema.extend({
  sellerIds: z
    .array(z.string().regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i))
    .max(100)
    .optional(),
  itemIds: z
    .array(z.string().regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i))
    .max(100)
    .optional(),
  obtainingTypeIds: z
    .array(z.string().regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i))
    .max(100)
    .optional(),
  attributes: z.array(AttributeSchema).max(20).optional(),
  price: PriceRangeSchema.optional(),
  searchQuery: z.string().max(256).optional(),
  hasDiscount: z.boolean().optional(),
  hasTestimonials: z.boolean().optional(),
  onlyOfficial: z.boolean().optional(),
  withOfficial: z.boolean().optional(),
});

export const BaseCatalogPaginationSchema = z.object({
  size: z.number().min(1).max(100).default(24),
  cursor: z.string().max(4096).optional(),
});

export const ItemsCatalogPaginationSchema = BaseCatalogPaginationSchema.extend({
  order: z
    .enum([
      "PRIORITY_APPROVAL_DATE_DESC",
      "APPROVAL_DATE_DESC",
      "PRICE_ASC",
      "PRICE_DESC",
      "SELLER_RATING_DESC",
    ])
    .default("PRIORITY_APPROVAL_DATE_DESC"),
});
