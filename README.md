# `axios-cookie-auth`

[![CI](https://github.com/Jszigeti/axios-cookie-auth/actions/workflows/ci.yml/badge.svg)](https://github.com/Jszigeti/axios-cookie-auth/actions/workflows/ci.yml)
[![npm version](https://badge.fury.io/js/axios-cookie-auth.svg)](https://badge.fury.io/js/axios-cookie-auth)
[![npm downloads](https://img.shields.io/npm/dm/axios-cookie-auth.svg)](https://www.npmjs.com/package/axios-cookie-auth)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

`axios-cookie-auth` is a reusable TypeScript utility that simplifies API interactions by providing an Axios instance configured for HTTP-only cookie support. It includes error handling, token refresh logic, CSRF protection, and customizable logout handling.

## Installation

To install the package, use npm or yarn:

```bash
npm install axios-cookie-auth
# or
yarn add axios-cookie-auth
```

## Features

- Simplifies API interaction with preconfigured Axios instance.
- Supports HTTP-only cookies for secure authentication.
- Automatically handles token refresh when encountering `401 Unauthorized` errors.
- Supports CSRF protection for modifying requests.
- Allows custom headers and logout logic.

## Usage

### Import and Setup

```typescript
import { useApi } from 'axios-cookie-auth';

const api = useApi(
  'https://api.example.com', // Base URL for API
  '/auth/refresh', // Endpoint for token refresh
  { 'Custom-Header': 'value' }, // Optional custom headers
  true, // Enable CSRF protection (optional)
  () => console.log('Logout triggered!'), // Optional logout handler
);

// Example API call
api
  .get('/endpoint')
  .then((response) => console.log(response.data))
  .catch((error) => console.error(error));
```

## API

### `useApi`

#### Parameters

| Name              | Type                     | Required | Description                                                                           |
| ----------------- | ------------------------ | -------- | ------------------------------------------------------------------------------------- |
| `baseURL`         | `string`                 | Yes      | The base URL for all API requests.                                                    |
| `refreshEndpoint` | `string`                 | Yes      | The endpoint used to refresh the authentication token.                                |
| `headers`         | `Record<string, string>` | No       | Optional custom headers to include in each request.                                   |
| `useCsrf`         | `boolean`                | No       | Whether to include CSRF token protection for modifying requests (default is `false`). |
| `logoutFn`        | `() => void`             | No       | Optional callback function to call when token refresh fails.                          |

#### Returns

`AxiosInstance`: A preconfigured Axios instance with interceptors for token refresh, CSRF protection, and error handling.

### Example

```typescript
const api = useApi(
  'https://myapi.com',
  '/refresh',
  { Authorization: 'Bearer token' },
  true, // Enable CSRF protection
  () => {
    console.log('User logged out.');
  },
);

api
  .post('/data', { key: 'value' })
  .then((response) => console.log(response.data))
  .catch((error) => console.error(error));
```

## Interceptor Behavior

- **On success**: Passes the response back to the calling function.
- **On `401 Unauthorized`**: Automatically triggers the token refresh endpoint and retries the original request.
- **On refresh failure**: Calls the optional `logoutFn` if provided, then rejects the error.

## CSRF Protection

- If `useCsrf` is set to `true`, the hook will look for a CSRF token stored in `localStorage` and automatically include it in the request headers as `x-xsrf-token`.
- This ensures that your API is protected against CSRF attacks when making modifications.

## Types

This package is written in TypeScript and provides the following types:

- `baseURL`: `string` (Required)
- `refreshEndpoint`: `string` (Required)
- `headers`: `Record<string, string>` (Optional)
- `useCsrf`: `boolean` (Optional, default is `false`)
- `logoutFn`: `() => void` (Optional)

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for development guidelines.

## License

This project is licensed under the MIT License.
