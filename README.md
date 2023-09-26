This is a [Next.js](https://nextjs.org/) project.

# Getting Started

## Tech Stack

### Frameworks

- [Next.js](https://nextjs.org/) – React framework for building performant apps with the best developer experience

### UI

- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework for rapid UI development
- [Radix](https://www.radix-ui.com/) – Primitives like modal, popover, etc. to build a stellar user experience
- [Shadcn UI](https://ui.shadcn.com) – Beautifully designed components using tailwind and radix
- [Lucide](https://lucide.dev/) – Beautifully simple, pixel-perfect icons

### Code Quality

- [TypeScript](https://www.typescriptlang.org/) – Static type checker for end-to-end typesafety
- [Prettier](https://prettier.io/) – Opinionated code formatter for consistent code style
- [ESLint](https://eslint.org/) – Pluggable linter for Next.js and TypeScript

## How To Run

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Code Style Conventions and Best Practices

### Best Practices

#### Container and Presentational Components

To follow the separation of concerns principle by differentiating between container components (handling logic and data) and presentational components (handling UI) we have the structure below:



### Files and Components Naming Convention

Files should be named using kebab-case and components should use PascalCase;

### Utility Files

Utility files or helper functions should be placed inside lib folder in the project root.



### Testing

To be done

## Authors

- [Diego Catallo](https://github.com/dcatallo)
