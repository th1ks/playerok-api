import type { z } from "zod";
import type {
  BannerImagesSchema,
  BannerSchema,
  BannersResponseSchema,
} from "./schemas.js";

export type BannerImages = z.infer<typeof BannerImagesSchema>;
export type PromoBanner = z.infer<typeof BannerSchema>;
export type PromoBannersResponse = z.infer<typeof BannersResponseSchema>;
