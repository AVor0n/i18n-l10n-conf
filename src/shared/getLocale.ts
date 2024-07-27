import { parse } from 'accept-language-parser';
import type { IncomingMessage } from 'http';
import type { NextApiRequest } from 'next/types';

function getCookie(name: string) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift();
}

const availableLangs = ['en', 'ru', 'ar'];
export function getUserLocale(req: NextApiRequest | IncomingMessage) {
    const cookie = getCookie('i18n-l10n-conf-lang');

    if (cookie) {
        return cookie;
    }

    const acceptLanguage = req.headers['accept-language'];
    if (acceptLanguage) {
        const languages = parse(acceptLanguage);
        const lang = languages[0]?.code;
        if (lang && availableLangs.includes(lang)) {
            document.cookie = `i18n-l10n-conf-lang=${lang}; path=/`;
            return lang;
        }
    }

    return availableLangs[0];
}
