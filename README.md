# NovaShop — E-commerce UI Demo

NovaShop is a responsive consumer electronics storefront and admin dashboard **UI prototype**. All names, prices, imagery and orders are fictional. This release **does not have an online database, user authentication or real payment handling**.

## Online demo
- Storefront: open the root URL of this repository's deployed static site.
- Admin UI demo: open `/admin.html`. **No authentication: demo only.**
- Browse 12 sample products, search and filter, add items to the cart, simulate checkout, and inspect dashboard orders.
- All changes stay in browser `localStorage`. Different browsers or devices do not share data.

## Run locally
This repository contains a static site. Download the repository and use any local static file server from the repository root:

```bash
python -m http.server 4173
```

Then visit http://localhost:4173/ or http://localhost:4173/admin.html.
No npm packages or external database are required for this UI prototype.

## Free hosting
- **Cloudflare Pages**: connect `LvK2606/e-commerce` and use `main`; build command blank, output directory `.`.
- **Cloudflare Workers static assets**: use a static assets config. Do not treat these JavaScript files as a secure backend.
- **Render Static Site**: publish path `.`, no build step.

## Project structure
- `index.html`: storefront
- `admin.html`: admin dashboard mock
- `styles.css`: responsive design system
- `store.js`, `admin.js`, `design-data.js`: demo interactions and fake data
- `assets/`: original SVG product illustrations
- `docs/KIEN_TRUC_HE_THONG.md`: future full-stack architecture

## Planned full-stack upgrade
React + TypeScript frontend, Cloudflare Workers API, Neon PostgreSQL database, server-side price/inventory checks, protected admin authentication, and transactions for checkout. The full-stack functionality **has not yet been implemented** in this repository.

> Security: do not put real customer information, payments, secrets, or private credentials into this demo. The admin page is intentionally public.
