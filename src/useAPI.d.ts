/**
 * MIT License
 *
 * Copyright (c) 2023 Josef Barnes
 *
 * useAPI.ts: This file contains the useAPI custom hook
 */
import { UseMutationOptions, FetchQueryOptions } from '@tanstack/react-query';
export declare class APIError extends Error {
    code: number;
    constructor(errmsg: string, code: number);
}
export interface APIRequest<T> {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    url: string;
    headers?: {
        [key: string]: string;
    };
    params?: URLSearchParams;
    body?: string;
    validate?: (data: unknown) => data is T;
    validateOptional?: (data: unknown) => data is T;
}
export type APIResponse<T> = {
    code: number;
    data: T;
};
export interface QueryOptions<T> {
    enabled?: boolean;
    runOnce?: boolean;
    onSuccess?: (data: T) => void;
}
export interface MutationOptions<T> {
    onSuccess?: (data: T) => void;
    onError?: (error: APIError) => void;
}
export interface APIAuthTokens {
    access_token: string;
    refresh_token: string;
    token_type: 'bearer';
}
export declare const isAPIAuthTokens: (val: unknown) => val is APIAuthTokens;
export declare const useAPI: () => {
    request: <T>(options: APIRequest<T>) => Promise<APIResponse<T>>;
    login: (user: string, password: string, remember: boolean) => Promise<APIResponse<APIAuthTokens>>;
    logout: () => Promise<APIResponse<void>>;
    useQuery: <T_1>(opts: APIRequest<T_1> & QueryOptions<T_1>) => import("@tanstack/react-query/build/legacy/types").UseQueryResult<APIResponse<T_1>, APIError>;
    useMutationFn: <TInput = void, TOutput = void>(fn: (data: TInput) => Promise<APIResponse<TOutput>>, mutationOpts?: UseMutationOptions<APIResponse<TOutput>, APIError, TInput, unknown>) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<APIResponse<TOutput>, APIError, TInput, unknown>;
    useMutationQuery: <TInput_1 = void, TOutput_1 = void>(opts: APIRequest<TOutput_1> & MutationOptions<TOutput_1>) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<APIResponse<TOutput_1>, APIError, TInput_1, unknown>;
    asyncQuery: <T_2>(opts: APIRequest<T_2> & FetchQueryOptions<T_2, Error, T_2, import("@tanstack/query-core/build/legacy/queryClient-5b892aba").p, never>) => Promise<APIResponse<T_2>>;
    user: string;
    readwrite: boolean;
    expiry: number;
};
