import { z } from "zod";
import { ProfileSchema } from "../viewer/model/profile.schema.js";
import { RoleSchema } from "../viewer/model/role.schema.js";

export const GetUserByUsernameResponseSchema = ProfileSchema.extend({
  username: z.string().nullable(),
  role: RoleSchema,
  isBlocked: z.boolean(),
  rating: z.number(),
  createdAt: z.string(),
});
