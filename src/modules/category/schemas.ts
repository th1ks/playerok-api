import z from "zod";
import type { CategoryStatResponse } from "./types";

export const CategoryStatResponseSchema = z.object({
  gameId: z.string(),
  gameCategoryId: z.string(),
  lowPrice: z.number(),
  highPrice: z.number(),
  offersCount: z.number(),
  minRating: z.number(),
  maxRating: z.number(),
  avgRating: z.number(),
  totalRating: z.number()
}) satisfies z.ZodType<CategoryStatResponse>;
