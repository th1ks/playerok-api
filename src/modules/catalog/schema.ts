import { z } from "zod";
import { ItemSummarySchema } from "../items/schemas.js";
import { RoleSchema, SellerTypeSchema } from "../viewer/model/role.schema.js";
import { ProfileSchema } from "../viewer/model/profile.schema.js";

export const ItemPrioritySchema = z.enum(["DEFAULT", "PREMIUM"]);

export const ItemAttachmentSchema = z.object({
  id: z.string(),
  url: z.url(),
});

export const ItemSellerSchema = ProfileSchema.pick({
  id: true,
  testimonialCounter: true,
}).extend({
  avatarUrl: z.union([z.url(), z.literal("")]),
  username: z.string(),
  role: RoleSchema,
  rating: z.number(),
  createdAt: z.iso.datetime(),
});

export const ItemGameSchema = z.object({
  id: z.string().min(1),
  name: z.string(),
  slug: z.string(),
  type: z.string(),
  logo: ItemAttachmentSchema,
});

export const ItemCategorySchema = ItemGameSchema.pick({
  id: true,
  name: true,
  slug: true,
}).extend({
  useCustomObtaining: z.boolean(),
});

export const ItemSchema = ItemSummarySchema.extend({
  feeMultiplier: z.number(),
  priority: ItemPrioritySchema,
  priorityPosition: z.number(),
  sellerType: SellerTypeSchema,
  isOfficial: z.boolean(),
  isAutomated: z.boolean(),
  dealsCounter: z.number().nullable().optional(),
  approvalDate: z.string(),
  createdAt: z.string(),
  attachment: ItemAttachmentSchema,
  isAttachmentsForbidden: z.boolean(),
  seller: ItemSellerSchema,
  game: ItemGameSchema,
  category: ItemCategorySchema,
});

export const ItemsResponseSchema = z.object({
  items: z.array(ItemSchema),
  endCursor: z.string(),
  hasNextPage: z.boolean(),
});
