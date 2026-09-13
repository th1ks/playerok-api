import { z } from "zod";

export const ItemSummarySchema = z.object({
  id: z.string(),
  slug: z.string(),
  name: z.string(),
  price: z.number(),
  rawPrice: z.number(),
});

export const ItemPauseResponseSchema = z.object({
  success: z.boolean(),
  status: z.string().optional(),
  pauseAvailable: z.boolean().optional(),
  republishAvailable: z.boolean().optional(),
  mayBePublished: z.boolean().optional(),
});
