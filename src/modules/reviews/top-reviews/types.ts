import type { z } from "zod";
import type {
  ReviewDealItemSchema,
  ReviewDealSchema,
  ReviewItemSchema,
  ReviewPageInfoSchema,
  ReviewUserSchema,
  TopReviewsResponseSchema,
} from "./schemas.js";

export type ReviewUser = z.infer<typeof ReviewUserSchema>;
export type ReviewDealItem = z.infer<typeof ReviewDealItemSchema>;
export type ReviewDeal = z.infer<typeof ReviewDealSchema>;
export type ReviewPageInfo = z.infer<typeof ReviewPageInfoSchema>;
export type ReviewItem = z.infer<typeof ReviewItemSchema>;
export type TopReviewsResponse = z.infer<typeof TopReviewsResponseSchema>;
