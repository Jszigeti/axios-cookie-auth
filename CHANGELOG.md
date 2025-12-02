# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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

- add optional CSRF token support to useApi hook

## [1.0.0] - 2024-12-13

### Features

- initialize axios-cookie-auth with ci/cd

[unreleased]: https://github.com/Jszigeti/axios-cookie-auth/compare/v1.1.0...HEAD
[1.1.0]: https://github.com/Jszigeti/axios-cookie-auth/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/Jszigeti/axios-cookie-auth/releases/tag/v1.0.0
