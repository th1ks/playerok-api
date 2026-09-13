import type { z } from "zod";
import type { ItemPauseResponseSchema, ItemSummarySchema } from "./schemas.js";

export type ItemSummary = z.infer<typeof ItemSummarySchema>;
export type ItemPauseResponse = z.infer<typeof ItemPauseResponseSchema>;
