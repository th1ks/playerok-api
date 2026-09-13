import type { z } from "zod";
import type { ChosenCardResponseSchema } from "./schemas.js";

export type ChosenCardResponse = z.infer<typeof ChosenCardResponseSchema>;
