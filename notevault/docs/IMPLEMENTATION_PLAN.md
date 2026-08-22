# NoteVault — Implementation Plan

Senior bar: correctness → ship → operability. Nice features last.

## Layout

```text
notevault/
  docs/
    REQUIREMENTS.md
    SYSTEM_DESIGN.md
    IMPLEMENTATION_PLAN.md
    openapi.yaml          # v1.5 Must
    adr/                  # ADR-001...
  server/
  client/
  nginx/
  docker-compose.yml
  .github/workflows/ci.yml
  README.md
```

---

## Phase 0 — Docs (done / keep updated)

REQUIREMENTS, SYSTEM_DESIGN, this plan. Update ADRs as you implement.

---

## Phase 1 — Auth API (v1 Core)

| Step | Work | FR |
|------|------|----|
| 1.1 | Register + bcrypt | FR1 |
| 1.2 | Login + JWT (`jti`, TTL) | FR2, FR8 |
| 1.3 | `GET /me` + `authenticate` middleware | FR3, FR4 |
| 1.4 | Zod/Joi validation + Helmet + CORS | FR6, FR7 |
| 1.5 | Central error middleware | FR10 |
| 1.6 | `.env.example` | NFR2 |
| 1.7 | ADR-001, ADR-002, ADR-006 | FR43 |

---

## Phase 2 — Notes API + tenancy (v1 Core)

| Step | Work | FR |
|------|------|----|
| 2.1 | Note model + indexes | FR15, FR18 |
| 2.2 | Protect routes; `userId` from JWT only | FR4, FR14 |
| 2.3 | List `?q=&tag=&sort=` | FR16 |
| 2.4 | Get/update/delete with owner filter → 404 | FR17 |
| 2.5 | Create | FR17 |
| 2.6 | Tests: auth + ownership + 401/400 | FR44, FR45 |

---

## Phase 3 — Client + Redux Toolkit (v1 Core)

| Step | Work | FR |
|------|------|----|
| 3.1 | Vite app + `Provider` + store | FR24 |
| 3.2 | `authSlice` / `notesSlice` + thunks | FR25–FR26 |
| 3.3 | `api/client.js` + Bearer | FR20 |
| 3.4 | Protected routes | FR27 |
| 3.5 | ADR-003 | FR43 |

```text
client/src/
  store/store.js
  api/client.js
  features/auth/authSlice.js
  features/notes/notesSlice.js
  pages/ components/
```

---

## Phase 4 — UI (v1 Core)

| Story | UI | API |
|-------|-----|-----|
| US1–2 | `RegisterPage`, `LoginPage` | auth |
| US3 | `Header` logout | clear session |
| US5,8–10 | `NoteList`, `SearchBar`, `TagFilter`, `SortSelect` | `GET /notes` |
| US4,6–7 | `NoteEditor`, delete | CRUD |
| US11, FR28 | errors, spinner, empty, debounce | — |

---

## Phase 5 — CI + deploy (v1 Core)

| Step | Work | FR |
|------|------|----|
| 5.1 | GitHub Actions: lint + API tests | FR40 |
| 5.2 | Deploy API + client (HTTPS) | NFR1 |
| 5.3 | README + smoke checklist | FR46, NFR4 |
| 5.4 | Verify two-account isolation on live | FR14, FR44 |

**Gate:** Do not start Phase 6/7 until this is green.

---

## Phase 6 — v1.5 Must product bits

| Step | Work | FR |
|------|------|----|
| 6.1 | Pin + sort | FR20 |
| 6.2 | Pagination | FR19, FR30 |

### Nice (optional)

Archive/trash, profile, markdown, export (route order!), duplicate, `uiSlice`, refresh cookies, RTK Query.

---

## Phase 7 — v1.5 Must platform

| Step | Work | FR |
|------|------|----|
| 7.1 | Dockerfiles + Compose | FR35, FR42 |
| 7.2 | Nginx config | FR36 |
| 7.3 | Redis cache + invalidate on write | FR37, NFR6 |
| 7.4 | Rate limits | FR9 |
| 7.5 | Logout denylist | FR5 |
| 7.6 | `health/live` + `health/ready` | FR33–34 |
| 7.7 | Request ID + JSON logs | FR38 |
| 7.8 | Graceful shutdown | FR41 |
| 7.9 | OpenAPI | FR39 |
| 7.10 | ADR-004, ADR-005 | FR43 |

---

## Build order

1. Auth + errors + validation  
2. Notes + indexes + ownership tests  
3. React + RTK UI  
4. CI + deploy (**v1 Core complete**)  
5. Pin + pagination  
6. Docker / Nginx / Redis / health / OpenAPI  
7. Nice only if time  

---

## Done when (senior)

**v1 Core:** Live, isolated tenancy, RTK, CI, ADRs 001–003 + 006.  
**v1.5 Must:** Compose + Redis + Nginx + observability + OpenAPI + ADRs 004–005; you can defend the design on a whiteboard.  
**Nice:** Optional polish — not required to call this a senior project.
