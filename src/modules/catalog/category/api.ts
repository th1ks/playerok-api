import type { HttpClient } from "../../../http";
import { assertUUID } from "../../../util";
import { CategoryStatResponseSchema } from "./schemas";
import type { CategoryStatResponse } from "./types";

export class CatalogCategoryAPI {
  constructor(public client: HttpClient) { }

  /**
   * Возвращает статистику по категории
   *
   * @param gameId Айди категории
   * @param gameCategoryId Айди подкатегории
   * @returns Статистику по категории
   */
  public async getStat(gameId: string, gameCategoryId: string): Promise<CategoryStatResponse> {
    assertUUID(gameId, "gameId")
    assertUUID(gameCategoryId, "gameCategoryId")

    const r = await this.client.get(`/games/${gameId}/categories/${gameCategoryId}/stat`, "rest")
    return CategoryStatResponseSchema.parse(r)
  }
}
