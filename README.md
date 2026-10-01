# HOME HUB — Next.js

Сайт бренду HOME HUB на **Next.js**, **React** та **TypeScript**.

## Запуск

```bash
npm install
cp .env.example .env.local   # задайте NEXT_PUBLIC_SITE_URL для production SEO
npm run dev
```

Відкрийте [http://localhost:3000](http://localhost:3000) — за замовчуванням шведська (`/sv`), англійська: `/en`.

## SEO

- `src/app/sitemap.ts` — sitemap з hreflang (sv/en) і сторінками моделей
- `src/app/robots.ts` — robots.txt
- `src/app/llms.txt/route.ts` — llms.txt для AI-краулерів
- `src/lib/seo/` — metadata, JSON-LD (Organization, WebSite, Product, BreadcrumbList)
- `next.config.ts` — редіректи без локалі → `/sv/…`, `/uk` → `/sv`
- `NEXT_PUBLIC_SITE_URL` — канонічний домен (див. `.env.example`)

## Структура

- `src/app/[locale]/` — сторінки (головна, про нас, каталог, моделі дверей, послуги, контакт)
- `src/dictionaries/` — тексти SV / EN
- `logos/` — логотипи (`public/logos` → симлінк)
- `public/images/` — фото продукції
