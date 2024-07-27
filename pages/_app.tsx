import type { AppProps } from "next/app";
import "styles/globals.css";

import { Layout } from "@/components/layout";
import { IntlProvider } from 'react-intl';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();
    const locale = router.locale ?? 'en';

    return (
        <IntlProvider locale={locale}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </IntlProvider>
    );
}
