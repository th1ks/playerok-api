import { HttpClient, type HttpClientOptions } from "./http.js";
import { AuthAPI } from "./modules/auth/api.js";
import { BannerAPI } from "./modules/banners/api.js";
import { CatalogAPI } from "./modules/catalog/api.js";
import { FileAPI } from "./modules/file/api.js";
import { ItemsAPI } from "./modules/items/api.js";
import { LotteryAPI } from "./modules/lottery/api.js";
import { ReviewsAPI } from "./modules/reviews/api.js";
import { UsersAPI } from "./modules/users/api.js";
import { ViewerAPI } from "./modules/viewer/api.js";


export interface PlayerokClientOptions extends HttpClientOptions {
  /** Старый алиас для bffUrl. Сохраняется для обратной совместимости. */
  baseUrl?: string;
  /** URL нового API. */
  apiUrl?: string;
  /** URL BFF API. */
  bffUrl?: string;
  /** URL публичного REST API. */
  restUrl?: string;
}

const DEFAULT_API_URL = "https://api.playerok.com";
const DEFAULT_BFF_URL = "https://bff.playerok.com/rest-api/public";
const DEFAULT_REST_URL = "https://playerok.com/rest-api/public";

/**
 * Главный клиент для работы с Playerok API.
 *
 * Все специализированные модули доступны как свойства одного экземпляра:
 * `auth`, `viewer`, `file`, `users`, `banners` и `items`.
 *
 * @example
 * ```ts
 * const client = new PlayerokClient({
 *   token: process.env.PLAYEROK_TOKEN,
 * });
 *
 * const viewer = await client.viewer.get();
 * console.log(viewer.username);
 * ```
 */
export class PlayerokClient {
  public readonly http: HttpClient;

  public readonly auth: AuthAPI;
  public readonly viewer: ViewerAPI;
  public readonly file: FileAPI;
  public readonly users: UsersAPI;
  public readonly banners: BannerAPI;
  public readonly items: ItemsAPI;
  public readonly reviews: ReviewsAPI;
  public readonly lottery: LotteryAPI;
  public readonly catalog: CatalogAPI;

  constructor(options: PlayerokClientOptions = {}) {
    const {
      baseUrl,
      apiUrl = DEFAULT_API_URL,
      bffUrl = baseUrl ?? DEFAULT_BFF_URL,
      restUrl = DEFAULT_REST_URL,
      ...httpOptions
    } = options;

    this.http = new HttpClient(
      {
        api: apiUrl,
        bff: bffUrl,
        rest: restUrl,
      },
      httpOptions,
    );

    this.auth = new AuthAPI(this.http);
    this.viewer = new ViewerAPI(this.http);
    this.file = new FileAPI(this.http);
    this.users = new UsersAPI(this.http);
    this.banners = new BannerAPI(this.http);
    this.items = new ItemsAPI(this.http);
    this.reviews = new ReviewsAPI(this.http);
    this.lottery = new LotteryAPI(this.http);
    this.catalog = new CatalogAPI(this.http);
  }
}
