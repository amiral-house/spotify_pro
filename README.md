# Лучший клиент для Spotify

### Как запускать

для начала нужно установить rust и pnpm

установить pnpm - `npm i -g pnpm`

[установить rust](https://www.rust-lang.org/tools/install)

```bash
pnpm tauri dev
```

## Как настроить интеграцию со Spotify?

Для начала идем [сюда](https://developer.spotify.com/dashboard/applications) и создаем "приложение"

выданные `client_id` и `client_secret` записываем в `.env`

И потом, что оченб важно!, в настройках этой интеграции добавляем `Redirect URLs` такое значение `http://localhost:7142`

Авторизация должна заработать
