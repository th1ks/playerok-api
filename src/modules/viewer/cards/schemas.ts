import { z } from "zod";

export const ChosenCardResponseSchema = z.object({
  id: z.string(),
  cardFirstSix: z.string(),
  cardLastFour: z.string(),
  cardType: z.string(),
  isChosen: z.boolean(),
});
