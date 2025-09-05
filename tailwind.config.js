/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            // Здесь будете добавлять цвета и стили из Figma
            colors: {
                // Примерные цвета для pay.inc тематики
                primary: {
                    50: '#eff6ff',
                    100: '#dbeafe',
                    500: '#3b82f6',
                    600: '#2563eb',
                    700: '#1d4ed8',
                    900: '#1e3a8a',
                },
                secondary: {
                    50: '#f8fafc',
                    100: '#f1f5f9',
                    500: '#64748b',
                    600: '#475569',
                    700: '#334155',
                    900: '#0f172a',
                }
            },
            fontFamily: {
                // Шрифты из Figma
                'inter': ['Inter', 'sans-serif'],
                'roboto': ['Roboto', 'sans-serif'],
                'montserrat': ['Montserrat', 'sans-serif'],
            },
            spacing: {
                // Кастомные отступы
                '18': '4.5rem',
                '88': '22rem',
            },
            borderRadius: {
                // Радиусы скругления
                'xl': '1rem',
                '2xl': '1.5rem',
            },
            screens: {
                // Брейкпоинты для адаптива
                'xs': '475px',
                'sm': '640px',
                'md': '768px',
                'lg': '1024px',
                'xl': '1280px',
                '2xl': '1536px',
            }
        },
    },
    plugins: [
        // Плагины отключены для быстрого старта
        // require('@tailwindcss/forms'),
        // require('@tailwindcss/typography'),
    ],
}