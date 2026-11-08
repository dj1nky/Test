# GitHub Copilot Instructions

## General

- Write clean, production-ready, maintainable code.
- Prioritize readability over clever implementations.
- Keep solutions simple unless complexity is justified.
- Reuse existing code before creating new abstractions.
- Avoid introducing new dependencies unless requested.
- Follow existing project conventions.

---

## Technology Stack

Frontend:

- Nuxt 4
- Vue 3
- JavaScript
- Tailwind CSS v4

Backend:

- NestJS
- TypeScript
- PostgreSQL

---

## JavaScript

- Use modern ES modules and JavaScript best practices.
- Keep functions focused on a single responsibility.
- Prefer `const` over `let` where possible.
- Avoid unnecessary complexity.

---

## Vue / Nuxt

- Always use `<script setup>`.
- Do **not** use TypeScript in Vue components unless explicitly requested.
- Use the Composition API.
- Prefer Nuxt auto-imports.
- Prefer composables for shared logic.
- Prefer computed properties over watchers.
- Avoid unnecessary reactive state.
- Use `useAsyncData()` or `useFetch()` when appropriate.
- Use server routes for sensitive operations.
- Never expose secrets to the client.
- Prefer page-level data fetching over nested requests.

---

## Components

- Always check the existing `/components` directory before creating a new component.
- Reuse existing components whenever possible.
- Place all reusable UI components inside the dedicated `/components` folder.
- Do not duplicate components with similar functionality.
- Keep components focused on a single responsibility.
- Extract repeated UI into reusable components.
- Prefer props and slots over duplicated markup.
- Follow the existing component naming conventions.

---

## Tailwind CSS

- Use Tailwind CSS utility classes only.
- Do not write inline styles.
- Keep class lists readable.
- Use responsive utilities where appropriate.
- Reuse existing utility patterns where possible.

---

## NestJS

- Follow NestJS best practices.
- Keep controllers thin.
- Place business logic in services.
- Validate incoming DTOs.
- Use dependency injection.
- Handle errors gracefully.
- Return consistent API responses.

---

## Database

- Write efficient database queries.
- Avoid unnecessary database calls.
- Consider performance when querying data.
- Avoid N+1 query patterns.

---

## Code Quality

- Avoid duplicate code.
- Prefer early returns.
- Keep files reasonably small.
- Write self-documenting code.
- Remove unused code.
- Use meaningful variable and function names.

---

## Default Behaviour

Unless explicitly requested:

- Do not rewrite entire files.
- Only generate the minimal changes required.
- Preserve existing formatting and coding style.
- Do not modify unrelated code.
- Do not add unnecessary comments.
- Do not create placeholder implementations.

---

## Before Responding

When generating code:

- Match the existing project structure.
- Check for and reuse existing components before creating new ones.
- Preserve existing naming conventions.
- Only modify files necessary for the request.
- Explain architectural decisions only when they are non-obvious.
- If information is missing, make the smallest reasonable assumption instead of generating unnecessary code.
