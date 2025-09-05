/** @type {import('next').NextConfig} */
const nextConfig = {
    // Включаем standalone для Docker
    output: 'standalone',

    // Оптимизация изображений
    images: {
        domains: ['localhost'],
        unoptimized: false,
    },

    // Настройки для production (swcMinify удален - теперь по умолчанию включен в Next.js 15)

    // Экспериментальные функции (отключаем optimizeCss для разработки)
    experimental: {
        // optimizeCss: true, // Включить только для production
    },

    // Настройки для статических ресурсов
    trailingSlash: false,

    // Webpack конфигурация (если нужна)
    webpack: (config, { isServer }) => {
        // Дополнительные настройки webpack если нужны
        return config;
    },
}

module.exports = nextConfig