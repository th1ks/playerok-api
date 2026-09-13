import type { HttpClient } from "../../http.js";
import { CatalogCategoryAPI } from "./category/api.js";
import { CatalogItemsAPI } from "./items/api.js";
import { CatalogOfficialItemsAPI } from "./official/api.js";
import { CatalogTopItemsAPI } from "./top/api.js";

export class CatalogAPI {
  public readonly category: CatalogCategoryAPI;
  public readonly items: CatalogItemsAPI;
  public readonly top: CatalogTopItemsAPI;
  public readonly official: CatalogOfficialItemsAPI;

  constructor(client: HttpClient) {
    this.category = new CatalogCategoryAPI(client);
    this.items = new CatalogItemsAPI(client);
    this.top = new CatalogTopItemsAPI(client);
    this.official = new CatalogOfficialItemsAPI(client);
  }
}
