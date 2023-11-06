/**
 * MIT License
 *
 * Copyright (c) 2023 Josef Barnes
 *
 * useAPI.types.ts: This file contains the exported types for useAPI
 */

/* An Error object returned when the code is not 2XX */
export class APIError extends Error {
   code: number;

   constructor(errmsg: string, code: number) {
      super(errmsg);
      this.name = 'APIError';
      this.code = code;
   }
}

/* An API request that is expected to response with T */
export interface APIRequest<T> {
   method: 'GET' | 'POST' | 'PUT' | 'DELETE';
   url: string;
   headers?: { [key: string]: string };
   params?: URLSearchParams;
   body?: string;
   validate?: (data: unknown) => data is T;
   validateOptional?: (data: unknown) => data is T;
   validateList?: (data: unknown) => data is T extends Array<infer U> ? U : null;
}

/* An API response containing T */
export interface APIResponse<T> {
   code: number;
   data: T;
}

/* The options to use for react-query useQuery */
export interface QueryOptions<T> {
   enabled?: boolean;
   runOnce?: boolean;
   onSuccess?: (data: T) => void;
}

/* The options to use for react-query useMutation */
export interface MutationOptions<T> {
   onSuccess?: (data: T) => void;
   onError?: (error: APIError) => void;
}

/* The credentials returned be the API for a successful login or token refresh */
export interface APIAuthTokens {
   access_token: string;
   refresh_token: string;
   token_type: 'bearer';
}
