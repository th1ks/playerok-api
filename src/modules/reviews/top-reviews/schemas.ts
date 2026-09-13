import { z } from "zod";
import { ItemSummarySchema } from "../../items/schemas.js";
import { GetUserByUsernameResponseSchema } from "../../users/schemas.js";

export const ReviewUserSchema = GetUserByUsernameResponseSchema.omit({
  username: true,
  avatar: true,
}).extend({
  username: z.string(),
  isVip: z.boolean().nullable(),
});

export const ReviewDealItemSchema = ItemSummarySchema.extend({
  attachmentUrl: z.string(),
});

export const ReviewDealSchema = z.object({
  id: z.string(),
  item: ReviewDealItemSchema,
});

export const ReviewPageInfoSchema = z.object({
  hasPreviousPage: z.boolean(),
  hasNextPage: z.boolean(),
  startCursor: z.string().nullable(),
  endCursor: z.string().nullable(),
});

export const ReviewItemSchema = z.object({
  id: z.string(),
  text: z.string().nullable(),
  rating: z.number(),
  status: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  user: ReviewUserSchema,
  creator: ReviewUserSchema,
  deal: ReviewDealSchema,
});

export const TopReviewsResponseSchema = z.object({
  items: z.array(ReviewItemSchema),
  pageInfo: ReviewPageInfoSchema,
});
