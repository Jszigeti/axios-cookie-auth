# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.2.7] - 2026-01-19

### Changed

- Updated development dependencies
  - happy-dom from 20.1.0 to 20.3.3
  - prettier from 3.7.4 to 3.8.0
  - typescript-eslint from 8.52.0 to 8.53.0
- Migrated Husky hooks to v10+ (no legacy sourcing)
- Fixed npm audit vulnerabilities
- Cleaned .DS_Store files and updated .gitignore

## [1.2.6] - 2026-01-16

### Changed

- Updated development dependencies
  - @vitest/ui from 4.0.16 to 4.0.17
  - happy-dom from 20.0.11 to 20.1.0
  - typescript-eslint from 8.51.0 to 8.52.0
  - vitest from 4.0.16 to 4.0.17

## [1.2.5] - 2026-01-05

### Changed

- Updated development dependencies
  - typescript-eslint from 8.50.1 to 8.51.0
  - globals from 16.5.0 to 17.0.0 (major version with new environments: audioWorklet, paintWorklet, sharedWorker, bunBuiltin, denoBuiltin)

## [1.2.4] - 2025-12-30

### Changed

- Updated development dependencies
  - typescript-eslint from 8.50.0 to 8.50.1

## [1.2.3] - 2025-12-23

### Changed

- Updated development dependencies
  - @vitest/ui from 4.0.15 to 4.0.16
  - typescript-eslint from 8.49.0 to 8.50.0
  - vitest from 4.0.15 to 4.0.16

## [1.2.2] - 2025-12-16

### Changed

- Updated development dependencies
  - @eslint/js from 9.39.1 to 9.39.2
  - eslint from 9.39.1 to 9.39.2
  - typescript-eslint from 8.48.1 to 8.49.0

## [1.2.1] - 2025-12-08

### Changed

- Updated development dependencies for better compatibility and latest features

## [1.2.0] - 2025-12-02

### Added

- Vitest test suite with 5 passing tests
- Prettier 3.7.3 for code formatting
- Husky pre-commit hooks with lint-staged
- GitHub Actions CI with tests, lint, and format checks
- Issue and PR templates
- Dependabot configuration
- Comprehensive README badges (CI, npm downloads, license)

### Changed

- Upgraded all dependencies to latest versions
- Migrated to ESLint 9 flat config
- Updated GitHub Actions to v6 (checkout, setup-node)
- Improved package.json with engines, lint-staged config, and additional keywords
- Formatted all code with Prettier

### Fixed

- Fixed 14 security vulnerabilities by upgrading dependencies
- Added test coverage for useApi function

## [1.1.0] - 2024-12-13

### Features

- Add optional CSRF token support to useApi hook

## [1.0.0] - 2024-12-13

### Features

- Initialize axios-cookie-auth with ci/cd
