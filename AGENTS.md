# AGENTS.md

## Project Overview

This is a SvelteKit v3 project built on Svelte v5. Runes mode is strictly enforced project-wide (see `vite.config.ts`), so always write Svelte components using runes (`$state`, `$derived`, `$effect`, `$props`, `$bindable`). Do not use legacy Svelte syntax such as stores or `export let`.

## UI And Styling

The UI is built with shadcn-svelte and Tailwind CSS. Prefer composing custom components from existing shadcn components instead of re-inventing the wheel. If you need a shadcn component that has not been installed, inform the user and ask them to install it. Do not install it yourself.

You may read the shadcn components in `src/lib/components/ui/`, but do not make any changes there. Treat that directory like `node_modules`.

Custom components live in `src/lib/components/shared/<name-of-component-in-kebab-case>/`. Use kebab-case for both the directory and the component files. Export the public surface through an `index.ts` barrel file in the component directory, matching the pattern used under `src/lib/components/ui/`.

Do not use the `absolute` or `translate` utilities (including `translate-x`, `translate-y`, and arbitrary `translate-[...]` values) in class names. The existing usages under `src/lib/components/ui/` are vendored shadcn code and are exempt; leave them untouched.

## Type Safety

Type safety is of the utmost importance. Use `zod` for schema definition and runtime validation, and derive TypeScript types from schemas with `z.infer` so validation and types cannot drift apart.

## JSDoc

Document exported code when its intent is not obvious from the name and type. Write for other developers in plain language with no ceremony, and explain why and any edge cases rather than restating what the code does. Skip obvious documentation and self explanatory name. Keep each comment as running prose: do not split a sentence across lines, and do not use em dashes.

## Functions And Testing

Prefer pure functions. Keep logic that transforms or validates data separate from rendering so it can be tested without a DOM.

Create unit tests for pure functions. This project uses Vitest. Run tests with `npm run test`.

## Commands

- Run `npm run lint` after making changes to validate them.
- Never run `npm run build`, `npm run dev`, `npm run fmt`, or `npm run fmt:check` yourself.
- Run `npm run test` to execute unit tests.
