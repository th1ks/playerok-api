import z from "zod"
import { ValidationError } from "./error";

export function isUsernameValid(username: string) {
  return username.match(/^[a-zA-Z0-9]+(?: [a-zA-Z0-9]+)*$/)
}

export const isUUID = (v: string) => z.uuid().safeParse(v).success

export function assertUUID(value: string, fieldName: string) {
  if (!isUUID(value)) {
    throw new ValidationError(value, `${fieldName} не в UUID формате!`);
  }
}
