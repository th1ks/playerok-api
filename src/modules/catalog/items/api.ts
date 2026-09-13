import type { HttpClient } from "../../../http.js";
import { ItemsCatalogPaginationSchema, ItemsFilterSchema, } from "../filter/schemas.js";
import type { ItemsCatalogPagination, ItemsFilter } from "../filter/types.js";
import { ItemsResponseSchema } from "../schema.js";
import type { ItemsResponse } from "../types.js";

export class CatalogItemsAPI {
  constructor(private readonly client: HttpClient) {}

  public async getItems(filter: ItemsFilter, pagination?: ItemsCatalogPagination): Promise<ItemsResponse> {
    const validFilter = ItemsFilterSchema.parse(filter);
    const validPagination = ItemsCatalogPaginationSchema.parse(pagination ?? {})

    const r = await this.client.post(
      "/v1/catalog/items",
      { filter: validFilter, page: validPagination },
      "api",
    );

    return ItemsResponseSchema.parse(r);
  }
}
