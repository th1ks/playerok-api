import { z } from "zod";

export const BannerImagesSchema = z.object({
  sm: z.url(),
  md: z.url(),
  lg: z.url(),
  xl: z.url(),
});

export const BannerSchema = z.object({
  id: z.string().regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i),
  name: z.string(),
  url: z.url(),
  images: BannerImagesSchema,
});

export const BannersResponseSchema = z.object({
  items: z.array(BannerSchema),
});

/** Формат изображений, который нужно вернуть в баннерах. */
export enum BannerFormat {
  webp = "webp",
  jpeg = "jpeg",
}
