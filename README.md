# effect-htmx

Minimal SSR todo app with [Effect](https://effect.website), [HTMX](https://htmx.org), [Tailwind CSS](https://tailwindcss.com), [DaisyUI](https://daisyui.com), running on [Bun](https://bun.sh).

## Demo

![Todo demo](docs/2026-03-06%2010.56.00.gif)

## Stack

- Runtime: Bun
- Server: Effect `@effect/platform` + `@effect/platform-bun`
- Rendering: SSR with `@kitajs/html` TSX views
- Interactions: HTMX fragment requests
- Styling: Tailwind v4 + DaisyUI

## Getting Started

```bash
bun install
```

## Run Locally

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000).

`bun run dev` does an initial build, then starts:

- `dev:server` — server watch/restart
- `dev:css` — Tailwind CSS watch build
- `dev:client` — client JS watch build

## Scripts

```bash
bun run build       # build CSS + client bundle
bun run start       # run server
bun run lint        # biome check
bun run format      # biome write fixes
```

## HTMX Flow

- First page render returns shell + loading skeletons.
- Todo list content loads via `GET /todos/list` and swaps into `#todo-list`.
- Add/toggle/delete actions return HTML fragments (not full page HTML):
  - add: returns one todo card fragment
  - done/undo: returns one updated todo card fragment
  - delete: returns `204` and removes target card
- UX details:
  - optimistic skeleton card appended on add submit
  - delete button disables during request
  - deleting card fades before removal

## API Routes

- `GET /` — page shell
- `GET /todos/list` — todo list fragment
- `POST /todos` — add todo (item fragment)
- `POST /todos/:id/done` — mark done (item fragment)
- `POST /todos/:id/undo` — mark undone (item fragment)
- `POST /todos/:id/delete` — delete todo (`204`)

## Project Layout

- `src/server.ts` — app bootstrap, layers, server
- `src/api/` — typed HTTP API definitions
- `src/handlers/` — API group handlers
- `src/routes/todos/` — loaders/actions
- `src/views/` — SSR view models, factories, TSX views
- `src/domain/Todo.ts` — todo domain logic + in-memory store
- `src/client.ts` — HTMX bootstrap + small client behaviors
- `src/global.css` — Tailwind + DaisyUI entry
