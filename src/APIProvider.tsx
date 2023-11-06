/**
 * MIT License
 *
 * Copyright (c) 2023 Josef Barnes
 *
 * APIProvider.tsx: This file contains the API context/provider
 */

import { PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// The react-query client to inject
const queryClient = new QueryClient({
   defaultOptions: {
      queries: {
         refetchOnWindowFocus: false,
      },
   },
});

const APIProvider = ({ children }: PropsWithChildren) => {
   return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default APIProvider;