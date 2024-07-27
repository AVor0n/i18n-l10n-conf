import { MainPage } from '@/pages/main';
import { getUserLocale } from '@/shared/getLocale';
import type { NextApiRequest } from 'next';

export default MainPage;

export async function getServerSideProps({
    req,
    locale: localeFromRouter,
}: {
    req: NextApiRequest;
    locale: string;
}) {
    const locale = localeFromRouter || getUserLocale(req);
    const messagesModule = await import(`../src/pages/main/locale/${locale}.json`);
    const messages = messagesModule.default;

    return {
        props: {
            locale,
            messages,
        },
    };
}
