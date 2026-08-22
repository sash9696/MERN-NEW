# Render Modes Demo (CSR / SSR / SSG)

Tiny Next.js App Router project to feel the difference between:

| Mode | Route | When HTML is built |
|------|-------|--------------------|
| **CSR** | `/csr` | In the browser after JS runs |
| **SSR** | `/ssr` | On the server, every request |
| **SSG** | `/ssg` | Once at `next build` time |

Each page shows an ISO timestamp labeled “Rendered at”.

## Run

```bash
cd render-modes-demo
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### See true SSG (recommended)

Dev mode can re-render static pages. For a frozen SSG timestamp:

```bash
npm run build
npm start
```

Then open `/ssg`, hard refresh a few times — the time should stay the same until you rebuild.

## How to compare

1. Open `/csr`, `/ssr`, `/ssg`.
2. Right-click → **View Page Source** (not Inspect).
3. Search for `rendered-at`.
   - **CSR**: you’ll see `loading…` in the HTML.
   - **SSR / SSG**: you’ll see a real ISO timestamp in the HTML.
4. Hard refresh several times.
   - **SSR**: timestamp changes each request.
   - **SSG** (production): timestamp stays fixed.
   - **CSR**: timestamp updates after JS loads.

## Mental model

- **CSR** = React SPA style — empty shell + client fetch/state.
- **SSR** = server runs your component per request, sends HTML.
- **SSG** = same as SSR, but once at build; CDN can cache the file.

Plain `create-react-app` / Vite React only does CSR. Next.js (this app) can do all three.
