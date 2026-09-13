import type { z } from "zod";
import type { AttributeRangeSchema, AttributeSchema, BaseFilterSchema, ItemsCatalogPaginationSchema, ItemsFilterSchema, PriceRangeSchema, BaseCatalogPaginationSchema } from "./schemas";

export type AttributeRange = z.infer<typeof AttributeRangeSchema>
export type PriceRange = z.infer<typeof PriceRangeSchema>
export type Attribute = z.infer<typeof AttributeSchema>
export type BaseFilter = z.infer<typeof BaseFilterSchema>
export type ItemsFilter = z.infer<typeof ItemsFilterSchema>
export type ItemsCatalogPagination = z.infer<typeof ItemsCatalogPaginationSchema>
export type BaseCatalogPagination = z.infer<typeof BaseCatalogPaginationSchema>
