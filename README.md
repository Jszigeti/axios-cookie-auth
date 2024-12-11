# `axios-cookie-auth`

[![npm version](https://badge.fury.io/js/axios-cookie-auth.svg)](https://badge.fury.io/js/axios-cookie-auth)

`axios-cookie-auth` is a reusable TypeScript utility that simplifies API interactions by providing an Axios instance configured for HTTP-only cookie support. It includes error handling, token refresh logic, and customizable logout handling.

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
- Allows custom headers and logout logic.

## Usage

### Import and Setup

```typescript
import { useApi } from "axios-cookie-auth";

const api = useApi(
  "https://api.example.com", // Base URL for API
  "/auth/refresh", // Endpoint for token refresh
  { "Custom-Header": "value" }, // Optional custom headers
  () => console.log("Logout triggered!") // Optional logout handler
);

// Example API call
api
  .get("/endpoint")
  .then((response) => console.log(response.data))
  .catch((error) => console.error(error));
```

## API

### `useApi`

#### Parameters

| Name              | Type                     | Required | Description                                                  |
| ----------------- | ------------------------ | -------- | ------------------------------------------------------------ |
| `baseURL`         | `string`                 | Yes      | The base URL for all API requests.                           |
| `refreshEndpoint` | `string`                 | Yes      | The endpoint used to refresh the authentication token.       |
| `headers`         | `Record<string, string>` | No       | Optional custom headers to include in each request.          |
| `logoutFn`        | `() => void`             | No       | Optional callback function to call when token refresh fails. |

#### Returns

`AxiosInstance`: A preconfigured Axios instance with interceptors for token refresh and error handling.

### Example

```typescript
const api = useApi(
  "https://myapi.com",
  "/refresh",
  { Authorization: "Bearer token" },
  () => {
    console.log("User logged out.");
  }
);

api
  .post("/data", { key: "value" })
  .then((response) => console.log(response.data))
  .catch((error) => console.error(error));
```

## Interceptor Behavior

- **On success**: Passes the response back to the calling function.
- **On `401 Unauthorized`**: Automatically triggers the token refresh endpoint and retries the original request.
- **On refresh failure**: Calls the optional `logoutFn` if provided, then rejects the error.

## Types

This package is written in TypeScript and provides the following types:

- `baseURL`: `string` (Required)
- `refreshEndpoint`: `string` (Required)
- `headers`: `Record<string, string>` (Optional)
- `logoutFn`: `() => void` (Optional)

## Contribution

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

This project is licensed under the MIT License.
