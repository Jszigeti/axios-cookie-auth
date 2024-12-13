import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";

/**
 * Custom hook for creating an Axios instance with error handling, token refresh, and HTTP-only cookie support.
 *
 * @param baseURL - The base URL for all API requests.
 * @param refreshEndpoint - The endpoint used to refresh the authentication token.
 * @param useCsrf - Whether to include CSRF token protection for modifying requests (false by default)
 * @param headers - Optional custom headers to include in each request.
 * @param logoutFn - Optional callback function to call when the authentication token refresh fails (e.g., logging out the user).
 *
 * @returns The Axios instance configured with interceptors for token refresh, CSRF protection, and error handling.
 */

export function useApi(
  baseURL: string,
  refreshEndpoint: string,
  headers?: Record<string, string>,
  useCsrf: boolean = false,
  logoutFn?: () => void
): AxiosInstance {
  // Create axios instance with base url and cookies use
  const api: AxiosInstance = axios.create({
    baseURL,
    withCredentials: true, // Cookies httpOnly should be sent with requests
    headers,
  });

  // Create request interceptor if useCsrf is true
  if (useCsrf) {
    api.interceptors.request.use((config) => {
      const csrfToken = localStorage.getItem("csrfToken");
      // Add csrf token in request header
      if (csrfToken) {
        config.headers["x-xsrf-token"] = csrfToken;
      }
      return config;
    });
  }

  // Create response interceptor to refresh token if error is 401
  api.interceptors.response.use(
    (response: AxiosResponse) => response, // Pass the response if no error
    async (error: AxiosError) => {
      const originalRequest = error.config;
      if (
        error.response?.status === 401 &&
        originalRequest &&
        !originalRequest._retried &&
        originalRequest.url !== refreshEndpoint
      ) {
        originalRequest._retried = true; // Prevent infinite retry loop
        try {
          // Call refresh token endpoint
          const response = await api.post(refreshEndpoint);
          // Store new csrf token in local storage if useCsrf is true
          if (useCsrf)
            localStorage.setItem("csrfToken", response.data.csrfToken);
          // Retry original request after refreshing token
          return api(originalRequest);
        } catch (refreshError: unknown) {
          // If refresh fails, call logoutFn if provided
          if (logoutFn) logoutFn();
          return Promise.reject(refreshError);
        }
      }
      // Reject other errors as usual
      return Promise.reject(error);
    }
  );
  // Return axios instance
  return api;
}
