import type { z } from "zod";
import type { CategoryStatResponseSchema } from "./schemas.js";

export type CategoryStatResponse = z.infer<typeof CategoryStatResponseSchema>;
