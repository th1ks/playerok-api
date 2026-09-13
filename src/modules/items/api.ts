import type { HttpClient } from "../../http";
import { ItemPauseResponseSchema } from "./schemas";
import type { ItemPauseResponse } from "./types";

/** Методы управления публикацией товаров пользователя. */
export class ItemsAPI {
  constructor(private client: HttpClient) { }

  private async updatePublication(
    itemId: string,
    action: "discontinue" | "republish",
  ): Promise<ItemPauseResponse> {
    const response = await this.client.post(`/item/${itemId}/${action}`, {});
    return ItemPauseResponseSchema.parse(response);
  }

  /**
   * Останавливает публикацию товара.
   *
   * @param itemId ID товара.
   * @returns Результат операции и доступность дальнейших действий.
   * @throws {NotFoundError} Если товар не найден.
   * @throws {UnauthorizedError} Если токен недействителен.
   */
  public async discontinueItem(itemId: string): Promise<ItemPauseResponse> {
    return this.updatePublication(itemId, "discontinue");
  }

  /**
   * Переопубликовывает ранее остановленный товар.
   *
   * @param itemId ID товара.
   * @returns Результат операции и доступность дальнейших действий.
   * @throws {NotFoundError} Если товар не найден.
   * @throws {UnauthorizedError} Если токен недействителен.
   */
  public async republishItem(itemId: string): Promise<ItemPauseResponse> {
    return this.updatePublication(itemId, "republish");
  }
}
