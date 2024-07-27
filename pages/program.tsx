import { ProgramPage } from "@/pages/program";
import { getUserLocale } from '@/shared/getLocale';
import type { NextApiRequest } from 'next/types';

export default ProgramPage;

export async function getServerSideProps({
    req,
    locale: localeFromRouter,
}: {
    req: NextApiRequest;
    locale: string;
}) {
    const locale = localeFromRouter || getUserLocale(req);
    const messagesModule = await import(`../src/pages/program/locale/${locale}.json`);
    const messages = messagesModule.default;

    return {
        props: {
            locale,
            messages,
        },
    };
}
