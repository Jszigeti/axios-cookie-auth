# Contributing to axios-cookie-auth

Thank you for your interest in contributing!

## Quick Start

1. **Fork and clone** the repository:

   ```bash
   git clone https://github.com/Jszigeti/axios-cookie-auth.git
   cd axios-cookie-auth
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run tests:**

   ```bash
   npm test
   ```

4. **Try the package locally:**
   ```bash
   npm run build
   npm link
   # Then use it in another project
   ```

## Development Workflow

### Project Structure

```
src/
├── useApi.ts        # Main hook implementation
└── api.d.ts         # TypeScript declarations for axios extensions

tests/
└── useApi.test.ts   # Unit tests for useApi
```

### Available Scripts

- `npm run build` - Compile TypeScript to JavaScript
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm test` - Run tests with Vitest
- `npm test -- --run` - Run tests once (no watch mode)

### Code Quality

This project uses:

- **TypeScript** with strict mode
- **ESLint** for linting (flat config)
- **Prettier** for formatting
- **Vitest** for testing
- **Husky** for pre-commit hooks

All code is automatically formatted and linted before commits.

## Making Changes

### 1. Create a branch

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/your-bug-fix
```

### 2. Make your changes

- Write code
- Add/update tests
- Update documentation if needed

### 3. Run quality checks

```bash
npm run lint
npm run format
npm test -- --run
npm run build
```

### 4. Commit your changes

Use [conventional commits](https://www.conventionalcommits.org/):

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting, etc.)
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

Example:

```bash
git add .
git commit -m "feat: add support for custom timeout"
```

### 5. Push and create a Pull Request

```bash
git push origin feature/your-feature-name
```

Then open a Pull Request on GitHub with:

- Clear description of changes
- Link to related issues
- Screenshots/examples if applicable

## Testing

Write tests for new features:

```typescript
import { describe, it, expect } from 'vitest';
import { useApi } from '../src/useApi';

describe('your feature', () => {
  it('should do something', () => {
    // Your test
    expect(true).toBe(true);
  });
});
```

Run tests:

```bash
npm test
# or in watch mode
npm test -- --watch
```

## Release Process

This project uses [semantic-release](https://github.com/semantic-release/semantic-release) for automated releases.

When commits are pushed to `main`:

1. Semantic-release analyzes commit messages
2. Determines the next version number
3. Generates changelog
4. Creates GitHub release
5. Publishes to npm

## Questions?

Feel free to [open an issue](https://github.com/Jszigeti/axios-cookie-auth/issues) for any questions!

## License

MIT © [Jonas Szigeti](https://github.com/Jszigeti)
