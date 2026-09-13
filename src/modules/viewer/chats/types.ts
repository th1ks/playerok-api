import type { z } from "zod";
import type {
  ViewerChatsByTypeResponseSchema,
  ViewerUnreadChatsCounterResponseSchema,
} from "./schemas.js";

export type ViewerUnreadChatsCounterResponse = z.infer<
  typeof ViewerUnreadChatsCounterResponseSchema
>;
export type ViewerChatsByTypeResponse = z.infer<typeof ViewerChatsByTypeResponseSchema>;

/** Поддерживаемые системные чаты Playerok. */
export enum ChatType {
  /** Системный чат. */
  SYSTEM = "SYSTEM",

  /** Чат службы поддержки. */
  SUPPORT = "SUPPORT",
}
