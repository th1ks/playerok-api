import z from "zod";

export const ActiveLotteryResponseSchema = z.object({
  lotteryId: z.string(),
  startAt: z.string(),
  expirationAt: z.string(),
  summaryAt: z.string(),
  announcementAt: z.string(),
  twitchStreamUrl: z.string(),
});

export const PlTokensBalanceResponseSchema = z.object({
  available: z.number(),
  hasOnlyFirstPurchaseAccrual: z.boolean(),
});
