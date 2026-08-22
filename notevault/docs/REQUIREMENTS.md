# NoteVault — Requirements (Bootcamp)

## What it is

A simple **private notes app**. Sign up, log in, and manage your own notes (create, edit, delete, list).

Built for a **bootcamp project** — clear MERN practice, not a production SaaS.

## Goals

- Practice full stack: MongoDB + Express + React + Node
- JWT auth + password hashing
- Redux Toolkit for client state
- Notes belong to the logged-in user only

## Non-goals (keep out)

- Payments, Docker, Redis, Nginx
- OAuth, email, file uploads, realtime
- Sharing, folders, markdown preview
- CI, OpenAPI, advanced observability

---

## User stories

| ID | As a… | I want to… | So that… |
|----|--------|------------|----------|
| US1 | visitor | register | I get an account |
| US2 | visitor | log in | I can use the app |
| US3 | user | log out | my session ends |
| US4 | user | create a note | I can save something |
| US5 | user | see my notes | I can browse them |
| US6 | user | edit a note | I can update it |
| US7 | user | delete a note | I can remove it |
| US8 | user | search notes (optional) | I can find one quickly |

---

## Functional requirements

### Auth

| ID | Requirement |
|----|-------------|
| FR1 | Register with name, email, password (bcrypt) |
| FR2 | Login returns JWT + user |
| FR3 | `GET /api/auth/me` with Bearer token |
| FR4 | Protect all note routes with JWT |

### Notes

| ID | Requirement |
|----|-------------|
| FR5 | Note: `title`, `content`, `tags` (optional), `userId`, timestamps |
| FR6 | Full CRUD: create, list, get, update, delete |
| FR7 | Only the owner can access their notes |
| FR8 | Optional: `GET /api/notes?q=` search by title |

### Frontend

| ID | Requirement |
|----|-------------|
| FR9 | React + Redux Toolkit (`authSlice`, `notesSlice`) |
| FR10 | Pages: Register, Login, Notes list + editor |
| FR11 | Store JWT (e.g. localStorage) and send Bearer header |
| FR12 | Loading and simple error messages |

---

## Data model

```text
User:  name, email, passwordHash
Note:  title, content, tags[], userId → User
```

---

## Done when

- [ ] Register / login / logout work
- [ ] You can CRUD notes while logged in
- [ ] Another user’s notes are not visible
- [ ] Redux drives auth + notes state
- [ ] README explains how to run locally
