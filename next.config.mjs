/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config) => {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"],
        });
        return config;
    },
    i18n: {
        locales: ['en', 'ru', 'ar'],
        defaultLocale: 'en',
    },
};

export default nextConfig;
