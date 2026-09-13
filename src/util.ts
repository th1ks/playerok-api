import z from "zod";
import { ValidationError } from "./error";

export function isUsernameValid(username: string) {
  return username.match(/^[a-zA-Z0-9]+(?: [a-zA-Z0-9]+)*$/);
}

export function assertUsername(username: string) {
  if (!isUsernameValid(username)) {
    throw new ValidationError(username, "Имя пользователя должно быть валидным!");
  }
}

export const isUUID = (v: string) =>
  z
    .string()
    .regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i)
    .safeParse(v).success;

export function assertUUID(value: string, fieldName: string) {
  if (!isUUID(value)) {
    throw new ValidationError(value, `${fieldName} не в UUID формате!`);
  }
}
