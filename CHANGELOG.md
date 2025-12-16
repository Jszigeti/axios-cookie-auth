# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.2.2] - 2025-12-16

### Changed

- Updated development dependencies
  - `@eslint/js` from 9.39.1 to 9.39.2
  - `eslint` from 9.39.1 to 9.39.2
  - `typescript-eslint` from 8.48.1 to 8.49.0

## [1.2.1] - 2025-12-08

### Changed

- Updated development dependencies (3 packages)

## [1.2.0] - 2025-12-02

### Added

- Prettier 3.7.3 for code formatting
- Husky 9.1.7 + lint-staged 16.2.7 for pre-commit hooks
- GitHub Actions v6 (checkout, setup-node)
- Publish workflow for GitHub Release-based npm publishing
- Issue and PR templates
- Dependabot configuration
- CONTRIBUTING.md guide
- Comprehensive README badges (CI, npm downloads, license)

### Changed

- Upgraded all dependencies to latest versions
- Removed semantic-release in favor of GitHub Release workflow
- Simplified CI workflow (removed matrix, added format check)
- Formatted all code with Prettier
- Improved package.json with format script, engines, and lint-staged config
- Cleaned up README and removed duplicates

### Fixed

- Fixed 15 security vulnerabilities by upgrading dependencies

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.2.1] - 2025-12-08

### Changed

- Updated development dependencies for better compatibility
- Package maintenance and security updates

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
