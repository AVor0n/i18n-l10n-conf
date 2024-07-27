import { BuyTicketsPage } from "@/pages/buy-tickets";
import { getUserLocale } from '@/shared/getLocale';
import type { NextApiRequest } from 'next/types';

export default BuyTicketsPage;

export async function getServerSideProps({
    req,
    locale: localeFromRouter,
}: {
    req: NextApiRequest;
    locale: string;
}) {
    const locale = localeFromRouter || getUserLocale(req);
    const messagesModule = await import(`../src/pages/buy-tickets/locale/${locale}.json`);
    const messages = messagesModule.default;

    return {
        props: {
            locale,
            messages,
        },
    };
}
