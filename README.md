# Playerok API SDK

TypeScript-библиотека для работы с [Playerok REST API](https://playerok.com/).

Библиотека предоставляет удобный клиент для взаимодействия с пользовательскими REST-эндпоинтами Playerok. Большинство доступных на данный момент эндпоинтов реализовано.

## Установка

```bash
pnpm add playerok-api
```

Или с помощью npm:

```bash
npm install playerok-api
```

## Использование

```typescript
import { PlayerokClient } from "playerok-api";

const client = new PlayerokClient({
  token: process.env.PLAYEROK_TOKEN,
});

const viewer = await client.viewer.get();
console.log(viewer);
```

## Доступные методы

- `client.auth` — работа с авторизацией
- `client.viewer` — работа с текущим пользователем
- `client.file` — работа с файлами
- `client.users` — работа с пользователями
- `client.banners` — работа с баннерами
- `client.http` — HTTP-клиент
- `client.items` — работа с товарами
- `client.reviews` — работа с отзывами
- `client.lottery` — работа с розыгрышами
- `client.catalog` — методы каталога

## Авторизация

Поместите свой токен Playerok в файл `.env`, например `PLAYEROK_TOKEN=токен`. После этого вы сможете создать клиент:

```typescript
const client = new PlayerokClient({
  token: process.env.PLAYEROK_TOKEN,
});
```

## Typedoc

Документация доступна на [th1ks.github.io/playerok-sdk](https://th1ks.github.io/playerok-sdk/).

## Вопросы

По всем вопросам и предложениям вы можете обратиться в [Telegram-чат](https://t.me/+kPISSPaCbZljM2Ey).
