# Contributing to axios-cookie-auth

Thank you for your interest in contributing! 🎉

## Quick Start

```bash
# Clone the repository
git clone https://github.com/Jszigeti/axios-cookie-auth.git
cd axios-cookie-auth

# Install dependencies
npm install

# Run tests
npm test

# Build the project
npm run build

# Lint and format
npm run lint
npm run format
```

## Project Structure

```
axios-cookie-auth/
├── src/
│   ├── useApi.ts        # Main hook implementation
│   └── api.d.ts         # TypeScript declarations for axios extensions
├── tests/
│   └── useApi.test.ts   # Unit tests for useApi
├── dist/                # Build output (generated)
└── .github/             # GitHub workflows and templates
```

## Development Workflow

1. **Fork** the repository
2. **Create a branch** for your changes: `git checkout -b feat/my-feature`
3. **Make your changes** and commit with [conventional commits](#conventional-commits)
4. **Run tests**: `npm test`
5. **Format code**: `npm run format`
6. **Lint code**: `npm run lint`
7. **Push** and create a Pull Request

## Code Quality Tools

This project uses:

- **TypeScript**: Strict type checking
- **ESLint**: Code linting with flat config
- **Prettier**: Code formatting
- **Vitest**: Testing framework
- **Husky**: Pre-commit hooks
- **lint-staged**: Run linters on staged files

Pre-commit hooks automatically:

- Lint and fix code with ESLint
- Format code with Prettier

## Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests once (no watch mode)
npm test -- --run
```

Write tests for:

- New features
- Bug fixes
- Edge cases

## Conventional Commits

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add new feature for CSRF token rotation
fix: resolve issue with token refresh retry logic
docs: update README with new examples
chore: update dependencies
test: add missing tests for logoutFn
refactor: simplify interceptor logic
```

## Release Process

Releases are automated via GitHub Release:

1. Create a new release on GitHub with a tag (e.g., `v1.3.0`)
2. The publish workflow automatically:
   - Runs tests and linting
   - Builds the project
   - Publishes to npm
   - Updates the GitHub Release with artifacts

## Questions?

Open an issue or reach out to the maintainers!
