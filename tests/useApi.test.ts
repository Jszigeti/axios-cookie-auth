import { describe, it, expect, beforeEach, vi } from 'vitest';
import axios from 'axios';
import { useApi } from '../src/useApi';

// Mock axios
vi.mock('axios');
const mockedAxios = axios as unknown as typeof axios & { create: any };

describe('useApi', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
  });

  it('creates an axios instance with correct config', () => {
    const mockCreate = vi.fn(() => ({
      interceptors: {
        request: { use: vi.fn() },
        response: { use: vi.fn() },
      },
    }));
    mockedAxios.create = mockCreate;

    useApi('https://api.example.com', '/refresh');

    expect(mockCreate).toHaveBeenCalledWith({
      baseURL: 'https://api.example.com',
      withCredentials: true,
      headers: undefined,
    });
  });

  it('includes custom headers when provided', () => {
    const mockCreate = vi.fn(() => ({
      interceptors: {
        request: { use: vi.fn() },
        response: { use: vi.fn() },
      },
    }));
    mockedAxios.create = mockCreate;

    const customHeaders = { 'X-Custom': 'value' };
    useApi('https://api.example.com', '/refresh', customHeaders);

    expect(mockCreate).toHaveBeenCalledWith({
      baseURL: 'https://api.example.com',
      withCredentials: true,
      headers: customHeaders,
    });
  });

  it('adds CSRF token interceptor when useCsrf is true', () => {
    const mockRequestUse = vi.fn();
    const mockCreate = vi.fn(() => ({
      interceptors: {
        request: { use: mockRequestUse },
        response: { use: vi.fn() },
      },
    }));
    mockedAxios.create = mockCreate;

    useApi('https://api.example.com', '/refresh', undefined, true);

    expect(mockRequestUse).toHaveBeenCalled();
  });

  it('does not add CSRF interceptor when useCsrf is false', () => {
    const mockRequestUse = vi.fn();
    const mockCreate = vi.fn(() => ({
      interceptors: {
        request: { use: mockRequestUse },
        response: { use: vi.fn() },
      },
    }));
    mockedAxios.create = mockCreate;

    useApi('https://api.example.com', '/refresh', undefined, false);

    expect(mockRequestUse).not.toHaveBeenCalled();
  });

  it('calls logoutFn when refresh fails', async () => {
    const logoutFn = vi.fn();
    const mockPost = vi.fn().mockRejectedValue(new Error('Refresh failed'));
    const mockResponseUse = vi.fn();

    const mockInstance = {
      interceptors: {
        request: { use: vi.fn() },
        response: { use: mockResponseUse },
      },
      post: mockPost,
    };

    mockedAxios.create = vi.fn(() => mockInstance);

    useApi('https://api.example.com', '/refresh', undefined, false, logoutFn);

    // Get the error handler from response interceptor
    const errorHandler = mockResponseUse.mock.calls[0][1];

    // Simulate 401 error
    const error = {
      response: { status: 401 },
      config: { url: '/some-endpoint', _retried: false },
    };

    await expect(errorHandler(error)).rejects.toThrow();
    expect(logoutFn).toHaveBeenCalled();
  });
});
