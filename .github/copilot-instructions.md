## Repo-specific instructions for Copilot-style agents

This project is a Vite + React + TypeScript site scaffolded with shadcn UI patterns and Tailwind CSS. Keep guidance concise, actionable, and tied to files shown below.

- Project entry: `src/main.tsx` (calls `createRoot` and mounts `App`).
- Router: `src/App.tsx` — uses `react-router-dom`. Add new app routes in `src/App.tsx` above the catch-all `*` route.
- Pages: place page components in `src/pages/` (e.g. `Index.tsx`, `NotFound.tsx`). Each page should be a default export React component.
- UI components: `src/components/ui/*` contains shared UI primitives (card, button, toast, sonner, etc.). Import like `import { Card } from "@/components/ui/card"`.

- Import alias: `@` maps to `./src` (configured in `vite.config.ts` and `tsconfig.json`). Prefer `@/...` for repo-local imports.
- Styling: Tailwind CSS is used with `darkMode: ["class"]`. Design tokens use CSS variables (e.g. `--primary`, `--card`). See `tailwind.config.ts` for color/token usage.
- Class utilities: use the `cn` helper in `src/lib/utils.ts` (wraps `clsx` + `twMerge`) to merge Tailwind class lists safely.

- React Query: the app wraps with `QueryClientProvider` in `src/App.tsx`. Use `@tanstack/react-query` for server state and follow the existing client/provider pattern.
- Toasters: both `Toaster` (Radix/sonner UI wrapper) and `Sonner` are mounted in `App`. Use `components/ui/sonner.tsx` or `components/ui/toaster.tsx` helpers for notifications.

- Dev server and build:
  - Start development: `npm run dev` (Vite server runs on port 8080 by default; configured to host `::`).
  - Build production: `npm run build` (or `npm run build:dev` for development-mode build).
  - Preview build: `npm run preview`.

- Tooling and conventions:
  - Lint: `npm run lint` runs ESLint across the repo.
  - TypeScript path alias: keep `@/*` aligned with `tsconfig.json` and imports.
  - Dev plugin: `lovable-tagger` runs in development (see `vite.config.ts`) — be aware component tagging may be present when `mode === 'development'`.

- Component patterns:
  - Files in `src/components` follow PascalCase default exports. Small UI primitives live under `src/components/ui/`.
  - Use `className` strings or the `cn(...)` helper for conditional classes. Example pattern from `src/components/About.tsx`:
    - `import { Card } from "@/components/ui/card";`
    - `<Card className={cn("group p-8 bg-card/50 border-border", { "hover-glow": active })}>...</Card>`

- Routing and pages guidance:
  - Add routes in `src/App.tsx`. Keep the catch-all `*` as the last route.
  - Page components should be pure UI; side-effects and data fetching are recommended to be colocated with react-query hooks.

- What not to change without checking: global tokens and Tailwind theme entries in `tailwind.config.ts` (many colors reference CSS variables); altering these changes visuals globally.

- Quick examples:
  - Import alias: `import About from "@/components/About"`.
  - Use `cn` helper: `import { cn } from "@/lib/utils";` then `className={cn("px-4 py-2", isActive && "text-primary")}`.

If anything here is unclear or you want more examples (e.g., how to add a new page, or how to wire a react-query hook into a component), tell me which area to expand.
