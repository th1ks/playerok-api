# Playerok API SDK

TypeScript-библиотека для работы с [Playerok REST API](https://playerok.com/).

Библиотека предоставляет удобный клиент для взаимодействия с пользовательскими REST-эндпоинтами Playerok. Большинство доступных на данный момент эндпоинтов реализовано.

## Установка

Установить библиотеку можно командой `pnpm add github:th1ks/playerok-sdk`

## Использование

```typescript
import { PlayerokClient } from "playerok-sdk";

const client = new PlayerokClient({
  token: process.env.PLAYEROK_TOKEN,
});

const viewer = await client.viewer.get();
console.log(viewer);
```

## Доступные методы

- client.auth / Работа с авторизацией
- client.viewer / Работа с пользователем
- client.file / Работа с файлами
- client.users / Работа с пользователями 
- client.banners / Работа с баннерами
- client.http / Http клиент
- client.items / Работа с товарами
- clinet.reviews / Работа с отзывами
- client.catalog / Методы каталога

## Авторизация

Поместите в `.env` файл свой Playerok токен, например `PLAYEROK_TOKEN=токен`. После вы сможете создать объект client:

```typescript
const client = new PlayerokClient({
  token: process.env.PLAYEROK_TOKEN,
});
```

## Typedoc

Находится на https://th1ks.github.io/playerok-sdk/

## Вопросы

По всем вопросам и предложениям вы можете обратиться в [Telegram чат](https://t.me/+kPISSPaCbZljM2Ey)
