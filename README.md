# ARCONdemo — корпоративный сайт (пример-витрина)

Демонстрационный проект-пример для портфолио Tesmika: показывает, какой корпоративный сайт
мы делаем для инженерно-строительной / промышленной компании полного цикла. «АРКОН» —
вымышленная компания, все данные обезличены. Деплой: `https://arcondemo.tesmika.ru`.
Премиум-EPC: тёмная сдержанная палитра, крупная типографика, фотография промышленных объектов.

> **Демонстрационная версия.** Фотографии и сертификаты — временные материалы из свободных
> источников, заменяются реальными данными заказчика. Подробности и лицензии —
> в [`assets-placeholder/SOURCES.md`](assets-placeholder/SOURCES.md).

## Стек

- **Next.js 14** (App Router) + **React 18** + **TypeScript**
- **Tailwind CSS** + дизайн-токены (CSS-переменные)
- **i18n** RU/EN — сегмент `[locale]`, полная локализация
- Контент-как-код (`content/`), слой типов (`types/`)
- SEO: метаданные, `sitemap.xml`, `robots.txt`
- Reveal-анимации на IntersectionObserver с учётом `prefers-reduced-motion`

## Структура

```
app/[locale]/            # страницы: главная, services, projects, news (+ детальные)
components/              # layout · sections · ui · forms
content/                 # site.ts (контент главной), details.ts (внутренние страницы)
lib/                     # i18n, шрифты
types/                   # типы контента
public/media/            # изображения и сертификаты (served)
assets-placeholder/      # исходники плейсхолдер-медиа + SOURCES.md (лицензии)
```

## Запуск

```bash
npm install
npm run dev      # http://localhost:3000  (редирект на /ru)
```

```bash
npm run build    # продакшн-сборка
npm run start    # запуск собранного приложения
npm run typecheck
```

## Локализация

RU по умолчанию (`/ru`), английская версия — `/en`. Весь контент переведён в обеих локалях.

## Замена демо-материалов на реальные

1. Реальные фото — в `public/media/photos/` (те же имена или новые пути в `content/`).
2. Реальные сертификаты — в `public/media/certificates/` + обновить `content/site.ts`.
3. Снять пометки «Образец» в секции сертификатов и текст-disclaimer.
4. Реальные данные компании (цифры, проекты, контакты, реквизиты) — в `content/site.ts` и `content/details.ts`.
