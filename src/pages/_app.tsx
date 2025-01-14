import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { AppProps } from 'next/app';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { globalStyles } from '../../styles/styles';
import { AuthProvider } from '../contexts/AuthContext';
import Layout from '../layout';
import { queryClient } from '../services/queryClient';

const cache = createCache({ key: 'next' });

export default function App({ Component, pageProps }: AppProps) {
    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools />
            <CacheProvider value={cache}>
                {globalStyles}
                <AuthProvider>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </AuthProvider>
            </CacheProvider>
        </QueryClientProvider>
    );
}
