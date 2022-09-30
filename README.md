# Next.js Starter Template [![CI](https://github.com/vashafaris/nextjs-starter-template/actions/workflows/ci.yml/badge.svg)](https://github.com/vashafaris/nextjs-starter-template/actions/workflows/ci.yml)

> Personal template to make life easier

## Stack used

- [Next.js](https://nextjs.org/)
- [Typescript](https://typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [SWR](https://swr.vercel.app/) for data fetching + caching
- [Zustand](https://zustand-demo.pmnd.rs/) for state management

## Linter

- [Husky](https://typicode.github.io/husky/#/) + [Lint Staged](https://github.com/okonet/lint-staged)
- [ESlint](https://eslint.org/)
- [Prettier](https://prettier.io/)

## Developing

A Node.js LTS setup with [yarn (v1)](https://yarnpkg.com/) is recommended.

```bash
# install dependencies
yarn

# serve with hot reload at localhost:3000
yarn dev

# build for production
yarn build

# run lint + type check
yarn validate

# run unit tests
yarn test
```

## Architecture

### Data fetching

We use [Next.js API routes](https://nextjs.org/docs/api-routes/introduction) to wrap requests heading to the Random User API. Then we use [SWR](https://swr.vercel.app/) for our data-fetching logic, allowing for data fetches to be wrapped in a custom hook.

### Directory structure

- `components/` - UI/layout components that are used globally throughout project.
- `lib/` - Shared utility/helper functions.
- `modules/` - Each feature and their business logic goes into this folder.
- `pages/` - Next.js pages. Please read this page for more info about them.
  - `api/` - Next.js API routes. This is where the application's API/backend goes.
- `public/` - Next.js public directory, used for storing static assets.
- `styles/` - Global CSS files.
- `types/` - TypeScript types + interfaces that are used globally throughout the project.
