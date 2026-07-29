# 🌿 Kwik & Fresh — Marketing + Ordering Website

**Fast Delivery, Always Fresh** — A full-stack marketing and ordering website for a local grocery home delivery business.

---

## Tech Stack

| Layer | Tech |
|---|---|
| Frontend | React 18 + Vite |
| Styling | Tailwind CSS (custom theme) |
| Icons | lucide-react |
| Animations | Framer Motion |
| State | Zustand (cart) |
| Routing | react-router-dom |
| Backend | Node.js + Express |
| Runner | concurrently |

---

## Project Structure

```
kwik/
├── package.json          ← root (concurrently runner)
├── README.md
├── client/               ← React + Vite frontend
│   ├── index.html
│   ├── vite.config.js    ← proxies /api → :5000
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── package.json
│   └── src/
│       ├── main.jsx
│       ├── App.jsx
│       ├── index.css
│       ├── store/
│       │   └── cartStore.js      ← Zustand cart
│       ├── components/
│       │   ├── Navbar.jsx
│       │   ├── Hero.jsx
│       │   ├── Services.jsx
│       │   ├── WhyChooseUs.jsx
│       │   ├── HowItWorks.jsx
│       │   ├── Gallery.jsx
│       │   ├── Testimonials.jsx
│       │   ├── Contact.jsx
│       │   ├── Footer.jsx
│       │   ├── CartDrawer.jsx
│       │   └── WaveDivider.jsx
│       └── pages/
│           ├── Home.jsx
│           └── Products.jsx
└── server/               ← Express API
    ├── index.js
    ├── package.json
    ├── routes/
    │   ├── products.js   ← GET /api/products
    │   └── contact.js    ← POST /api/contact
    └── data/
        └── products.json ← mock catalogue
```

---

## Quick Start

### 1. Install all dependencies

```bash
npm run install:all
```

This runs `npm install` in the root, `/client`, and `/server` directories.

### 2. Start dev servers

```bash
npm run dev
```

- **Client** → http://localhost:5173 (Vite)
- **Server** → http://localhost:5000 (Express)
- Vite proxies all `/api` requests to Express automatically.

---

## API Endpoints

| Method | URL | Description |
|---|---|---|
| GET | `/api/health` | Health check |
| GET | `/api/products` | All categorized products |
| GET | `/api/products/:categoryId` | Products for one category (fruits/vegetables/grocery/meat) |
| POST | `/api/contact` | Submit order/contact form |
| GET | `/api/contact` | View all submissions (admin) |

### POST `/api/contact` — Request Body

```json
{
  "name": "Priya Lakshmi",
  "phone": "9876543210",
  "address": "12, Gandhi Road, RS Puram, Coimbatore - 641002",
  "items": "2 kg tomatoes, 1 dozen bananas, 1 kg chicken"
}
```

### POST `/api/contact` — Response

```json
{
  "success": true,
  "message": "Thank you, Priya! We received your order and will call you shortly at 9876543210.",
  "submissionId": "SUB-1700000000000"
}
```

Submissions are saved to `server/data/submissions.json` and also kept in memory.

---

## Production Build

```bash
npm run build
```

Builds the client to `client/dist/`. Serve with your preferred static file server or add Express static middleware.

---

## Business Details

| Field | Value |
|---|---|
| Brand | Kwik & Fresh |
| Tagline | Fast Delivery, Always Fresh |
| Owner | Sivakumar |
| Phone 1 | 94422 66929 |
| Phone 2 | 98941 56239 |
| Email | yuva69cbe@gmail.com |
| Website | www.kwiknfresh.in |

---

## Pages

| Route | Description |
|---|---|
| `/` | Home — Hero, Services, Why Choose Us, How It Works, Gallery, Testimonials, Contact |
| `/products` | Full product catalogue fetched from API with add-to-cart |

---

© 2025 Kwik & Fresh. All rights reserved.
