import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { AppProps } from 'next/app';

import { globalStyles } from '../../styles/styles';
import Layout from '../layout';

const cache = createCache({ key: 'next' });

export default function App({ Component, pageProps }: AppProps) {
    return (
        <CacheProvider value={cache}>
            {globalStyles}
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </CacheProvider>
    );
}
