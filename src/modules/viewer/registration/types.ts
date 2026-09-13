import type { z } from "zod";
import type { RegisterViewerRequestSchema, UsernameAvailabilityResponseSchema } from "./schemas.js";

export type UsernameAvailabilityResponse = z.infer<typeof UsernameAvailabilityResponseSchema>;
export type RegisterViewerRequest = z.infer<typeof RegisterViewerRequestSchema>;
