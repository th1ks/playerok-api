export interface CategoryStatResponse {

  /* Айди категории */
  gameId: string,

  /* Айди подкатегории */
  gameCategoryId: string,

  /* Наименьшая цена товара в категории. Обычно не ниже 90 руб. */
  lowPrice: number,

  /* Наибольная цена товара в категории. Обычно не больше 100.000 руб. */
  highPrice: number,

  /* Количество товаров в категории */
  offersCount: number,

  /* Минимальный рейтинг продавца в категории */
  minRating: number,

  /* Максимальный рейтинг продавца в категории */
  maxRating: number,

  /* Средний рейтинг продавца в категории */
  avgRating: number,
  totalRating: number
}
