import type { HttpClient } from "../../../http";
import { BaseCatalogPaginationSchema, BaseFilterSchema } from "../filter/schemas";
import type { BaseCatalogPagination, BaseFilter } from "../filter/types";
import { ItemsResponseSchema } from "../schema";
import type { ItemsResponse } from "../types";

export class CatalogTopItemsAPI {
  constructor(private client: HttpClient) { }

  public async getItems(filter: BaseFilter = {}, pagination: BaseCatalogPagination = {}): Promise<ItemsResponse> {
    const validFilter = BaseFilterSchema.parse(filter)
    const validPagination = BaseCatalogPaginationSchema.parse(pagination)

    const r = await this.client.post("/v1/catalog/items/top", { filter: validFilter, page: validPagination }, "api")

    return ItemsResponseSchema.parse(r)
  }
}
