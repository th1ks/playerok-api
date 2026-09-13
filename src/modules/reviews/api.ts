import type { HttpClient } from "../../http";
import { TopReviewsAPI } from "./top-reviews/api";

export class ReviewsAPI {
  public readonly top: TopReviewsAPI;

  constructor(client: HttpClient) {
    this.top = new TopReviewsAPI(client);
  }
}
