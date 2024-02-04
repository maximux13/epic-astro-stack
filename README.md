# Epic Astro Stack 🌟

## Table of Contents

1. [Project Description](#project-description-)
2. [Features](#features-)
3. [Getting Started](#getting-started-)
4. [Requirements](#requirements-)
5. [Available Scripts](#available-scripts-)
6. [Acknowledgments](#acknowledgments-)
7. [License](#license-)

## Project Description 📝

Welcome to "Epic Astro Stack" – a cutting-edge framework designed to empower developers in crafting highly optimized websites 🚀. Utilizing Astro, a modern web development platform, it combines the best of static site generation and server-side rendering. This setup includes pre-installed integrations for SEO, fonts, icons, images, and more, ensuring top-notch performance and scalability.

Incorporating Tailwind CSS for intuitive design, and tools like Vitest and Playwright for robust testing, "Epic Astro Stack" is developer-experience focused. With ESLint, Prettier, and TypeScript support, it provides a well-rounded, strongly-typed JavaScript environment.

Our aim is to offer a framework that simplifies development while delivering fast, SEO-friendly, and visually appealing websites.

## Features ✨

"Epic Astro Stack" includes a suite of powerful features and integrations, making it a comprehensive solution for web development:

- **Astro**: A modern web development platform that combines static site generation with server-side rendering. [Learn more](https://astro.build/)
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs. [Learn more](https://tailwindcss.com/)
- **Vitest**: A blazing fast unit test framework. [Learn more](https://vitest.dev/)
- **Playwright**: Reliable end-to-end testing for modern web apps. [Learn more](https://playwright.dev/)
- **ESLint**: A tool for identifying and reporting on patterns in JavaScript. [Learn more](https://eslint.org/)
- **Prettier**: An opinionated code formatter. [Learn more](https://prettier.io/)
- **TypeScript**: A strongly typed programming language that builds on JavaScript. [Learn more](https://www.typescriptlang.org/)

Astro Integrations:

- **Astro SEO**: Tools for improving search engine optimization. [Learn more](https://github.com/jonasmerlin/astro-seo)
- **Astro Icon**: Simplified icon usage in your Astro projects. [Learn more](https://www.astroicon.dev/)
- **Astro Sitemap**: Automatically generate sitemap.xml for your website. [Learn more](https://github.com/alextim/astro-lib/tree/main/packages/astro-sitemap)
- **Astro Robots-txt**: Create a robots.txt file for controlling search engine indexing. [Learn more](https://github.com/alextim/astro-lib/tree/main/packages/astro-robots-txt)
- **Astro Unpic**: Optimize images for faster load times. [Learn more](https://unpic.pics/img/astro/)
- **Astro @spotlightjs**: Spotlight by Sentry is a proactive analytics tool designed to identify and prioritize errors and issues in applications, improving software quality and end-user experience. [Learn more](https://spotlightjs.com/)

These tools and integrations ensure that your development process is efficient, your code quality is high, and your web applications are robust and scalable.

## Requirements 📋

Before you begin working with "Epic Astro Stack," ensure that your development environment meets the following requirements:

- **Node.js**: Version 20 or higher. Node.js is essential as it serves as the runtime environment for this project. It's recommended to use the latest stable version for optimal performance and feature availability.

- **pnpm**: This project uses pnpm as the package manager. pnpm is known for its efficiency and speed, and it helps in managing dependencies in a more performant way compared to npm or Yarn.

Ensure that these tools are installed and properly configured on your system to take full advantage of what "Epic Astro Stack" has to offer.

## Getting Started 🚀

Set up your project easily with `pnpm install`. Use `pnpm run dev` for development, `pnpm run build` for production, and `pnpm preview` to preview the build. Test your application with `pnpm test` for unit tests and `pnpm test:e2e` for integration tests.

1. Install Dependencies

In the root directory of your project, run the following command to install all necessary dependencies:

```bash
pnpm install
```

This will ensure that all packages required by "Epic Astro Stack" are properly installed.

2. Start Development Server

To start the development server, execute:

```bash
pnpm run dev
```

This will launch the Astro development server, and your project will be accessible at `http://localhost:4321`. You can now view and interact with your project in real-time.

3. Building for Production

When your project is ready for production, run:

```bash
pnpm run build
```

This command generates a production-ready build of your project, optimizing it for peak performance.

4. Previewing Production Build

To preview the production build on your local machine, use:

```bash
pnpm preview
```

This command serves your production build locally, allowing you to review and test the final output before deployment.

5. Running Tests

For testing, "Epic Astro Stack" provides separate commands for unit and integration tests:

- **Unit Tests**: Run unit tests using Vitest by executing:

  ```bash
  pnpm test
  ```

- **Integration Tests**: Run integration tests with Playwright using:

  ```bash
  pnpm test:e2e
  ```

## Available Scripts 📜

In the project directory, you can run the following scripts:

| Script                      | Description                                                                                     |
| --------------------------- | ----------------------------------------------------------------------------------------------- |
| `pnpm run dev`              | Starts the Astro development server. Use this for development and testing changes in real-time. |
| `pnpm run start`            | Alias for `pnpm run dev`.                                                                       |
| `pnpm run build`            | Compiles and builds the project for production, including checks and optimizations.             |
| `pnpm run preview`          | Serves the production build locally for testing and review.                                     |
| `pnpm run astro`            | Executes Astro CLI commands.                                                                    |
| `pnpm run lint`             | Runs ESLint to identify and report on patterns found in ECMAScript/JavaScript code.             |
| `pnpm run check`            | Performs an Astro check to validate project files.                                              |
| `pnpm run format`           | Formats code using Prettier to maintain consistent code style.                                  |
| `pnpm run test`             | Runs unit tests using Vitest.                                                                   |
| `pnpm run test:ui`          | Opens the Vitest UI for interactive test runs.                                                  |
| `pnpm run test:watch`       | Runs Vitest in watch mode, rerunning tests as you make changes.                                 |
| `pnpm run test:e2e`         | Runs end-to-end tests. By default, in development mode.                                         |
| `pnpm run test:e2e:dev`     | Runs end-to-end tests in development mode using Playwright.                                     |
| `pnpm run pretest:e2e:run`  | Pre-test script to build the project before running end-to-end tests.                           |
| `pnpm run test:e2e:run`     | Runs end-to-end tests in CI mode using Playwright.                                              |
| `pnpm run test:e2e:install` | Installs required dependencies for running Playwright tests.                                    |

## Acknowledgments 🙌

Special thanks to [Epic Stack](https://github.com/epicweb-dev/epic-stack) for inspiring this project. Their innovative approach has significantly influenced our development journey.

## License ⚖️

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Created by **Maestrico\_** - [GitHub](https://github.com/maximux13) | [LinkedIn](https://www.linkedin.com/in/maximux13)
