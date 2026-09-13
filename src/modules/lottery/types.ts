import type { z } from "zod";
import type { ActiveLotteryResponseSchema, PlTokensBalanceResponseSchema } from "./schemas.js";

export type ActiveLotteryResponse = z.infer<typeof ActiveLotteryResponseSchema>;
export type PlTokensBalanceResponse = z.infer<typeof PlTokensBalanceResponseSchema>;
