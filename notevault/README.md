# NoteVault

Private notes product — built to a **senior full-stack** bar (tenancy, tests/CI, operable infra, documented tradeoffs). No payments yet.

## Docs

| Doc | Purpose |
|-----|---------|
| [docs/REQUIREMENTS.md](docs/REQUIREMENTS.md) | Senior bar, stories, FRs, acceptance |
| [docs/SYSTEM_DESIGN.md](docs/SYSTEM_DESIGN.md) | Context, containers, flows, ADRs index |
| [docs/IMPLEMENTATION_PLAN.md](docs/IMPLEMENTATION_PLAN.md) | Phased build with quality gates |

## Versions

- **v1 Core** — Auth, owned CRUD, RTK, indexes, errors, CI, deploy, ADRs  
- **v1.5 Must** — Pin, pagination, Docker + Nginx + Redis, health, rate limits, OpenAPI, request IDs  
- **v1.5 Nice** — Trash/archive, profile, markdown, cookies/refresh (optional)  
- **v2** — Billing, email, sharing, uploads  

## Layout

```text
notevault/
  docs/          ← planning (current)
  server/        ← next
  client/
  nginx/         ← v1.5 Must
  docker-compose.yml
  .github/workflows/
```
