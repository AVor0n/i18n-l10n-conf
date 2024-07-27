import { NextRequest, NextResponse } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;

const availableLangs = ['en', 'ru', 'ar'];
export async function middleware(req: NextRequest) {
    if (
        req.nextUrl.pathname.startsWith('/_next') ||
        req.nextUrl.pathname.includes('/api/') ||
        PUBLIC_FILE.test(req.nextUrl.pathname)
    ) {
        return;
    }

    if (!availableLangs.includes(req.nextUrl.locale)) {
        let lang;
        const locale = req.cookies.get('i18n-l10n-conf-lang');
        if (locale && availableLangs.includes(locale)) {
            lang = locale;
        }

        // @ts-expect-error description
        const acceptLanguage = req.headers['accept-language'];
        if (!lang && acceptLanguage && availableLangs.includes(acceptLanguage)) {
            lang = acceptLanguage;
        }

        lang ||= 'en';

        const pathChunks = req.nextUrl.pathname.split('/');
        if (pathChunks[1].length === 2) {
            pathChunks[1] = lang;
        }
        const pathName = pathChunks.join('/');

        return NextResponse.redirect(new URL(`/${lang}${pathName}${req.nextUrl.search}`, req.url), {
            headers: {
                'Set-Cookie': `i18n-l10n-conf-lang=${lang}; Path=/; Max-Age=31536000; SameSite=Lax; Secure; HttpOnly`,
                'X-lang': lang,
            },
        });
    }

    const next = NextResponse.next();
    next.headers.set('X-lang', req.nextUrl.locale);
    return next;
}
