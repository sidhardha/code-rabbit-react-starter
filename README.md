# code-rabbit-react-starter

## Project Overview

This is a starter template for a modern React application using TypeScript, designed for robust development and CI/CD workflows. It includes:

- **React + TypeScript**: Source code and tests in the `src/` directory.
- **Jest**: Unit testing framework with sample tests and coverage reporting.
- **ESLint**: Linting for TypeScript and React code, using the latest ESLint flat config.
- **Docker**: Containerization support with a production-ready Dockerfile.
- **GitHub Actions**: CI/CD pipeline for linting, testing, and building on every push or pull request.
- **CodeRabbit Integration**: AI-powered code review enabled via the `.coderabbit.yaml` config file.

## Key Features

- **Sample Code**: Includes `App.tsx` and `mathUtils.ts` with corresponding tests.
- **Strict TypeScript**: Enforced via `tsconfig.json` for type safety.
- **Automated Workflows**: Lint, test, and build steps run automatically in CI.
- **AI Code Review**: CodeRabbit reviews all TypeScript and React files in PRs.

## Getting Started

1. Install dependencies:
   ```powershell
   npm install
   ```
2. Run the app (if using a bundler):
   ```powershell
   npm start
   ```
3. Run lint, tests, and build:
   ```powershell
   npm run lint
   npm test
   npm run build
   ```

## CodeRabbit Integration

- Install the [CodeRabbit GitHub App](https://github.com/apps/coderabbit-ai) and select this repository.
- The `.coderabbit.yaml` file enables AI code review for all TypeScript and React files in `src/`.
- Open a pull request to see CodeRabbit review your code automatically.

---

This template is ideal for teams or individuals looking to start a React + TypeScript project with best practices for code quality, automation, and AI-powered reviews.