/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: config => {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });
        return config;
    },
    i18n: {
        locales: ['default', 'en', 'ru', 'ar'],
        defaultLocale: 'default',
        localeDetection: false,
    },
};

export default nextConfig;
