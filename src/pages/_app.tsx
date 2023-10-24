import type { AppProps } from 'next/app';
import type { ReactNode } from 'react';

// Styles
import '@/styles/globals.css';

// Layouts
import { RootLayout } from '@/layouts';

// Components
import { NextPage } from 'next';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getCustomLayout?: (page: ReactNode) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getCustomLayout ?? ((page) => RootLayout({ children: page }));

    return getLayout(<Component {...pageProps} />);
}
