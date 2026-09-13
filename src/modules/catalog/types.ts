import type { z } from "zod";
import type {
  ItemAttachmentSchema,
  ItemCategorySchema,
  ItemGameSchema,
  ItemPrioritySchema,
  ItemSchema,
  ItemSellerSchema,
  ItemsResponseSchema,
} from "./schema.js";

export type ItemAttachment = z.infer<typeof ItemAttachmentSchema>;
export type ItemCategory = z.infer<typeof ItemCategorySchema>;
export type ItemGame = z.infer<typeof ItemGameSchema>;
export type ItemPriority = z.infer<typeof ItemPrioritySchema>;
export type Item = z.infer<typeof ItemSchema>;
export type ItemSeller = z.infer<typeof ItemSellerSchema>;
export type ItemsResponse = z.infer<typeof ItemsResponseSchema>;
