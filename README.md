# Udemy Page Clone with Nuxt 3 and TailwindCss

This project is a clone of a Udemy course page developed as part of an Upwork assignment, using Nuxt 3. It demonstrates layout, content structure, and style to emulate the original course page.

## What It Is
This Nuxt 3 project replicates the design of a Udemy course page, focusing on accurately reproducing the look and layout without responsiveness or dynamic functionality.


## Code Structure

The project follows a **resource-based (or feature-based)** code structure. This approach organizes the code by resources or features, such as `Course`, `Header`, and `Student`, rather than by traditional layers (e.g., controllers, models, views). Each folder contains all files related to a specific resource, making the codebase more modular, scalable, and easier to maintain.


## Key File: `components/Course/index.vue`

The `components/Course/index.vue` file is the key file for rendering the main course page. It organizes and displays essential components such as `CourseHeader`, `CourseFeatures`, `CourseInstructor`, and others. The layout features a primary content area, with conditional display logic for the pricing popup using `CourseHeaderPricingTab`. This file manages the structure and dynamic display of the course information in the application.



## Setup

Install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install


Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```
## License

This project is intended solely for educational purposes. The original design and content are owned by Udemy, and this clone should not be used for commercial purposes.
