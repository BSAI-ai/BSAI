import type { Config } from 'tailwindcss';

export default {
    content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
    theme: {
        extend: {
            colors: {
                brand: {
                    blue: '#2563EB',
                    emerald: '#10B981',
                    navy: '#0F172A',
                    white: '#FFFFFF',
                    gray: '#F8FAFC',
                },
            },
            boxShadow: {
                soft: '0 20px 60px rgba(15, 23, 42, 0.16)',
            },
        },
    },
    plugins: [],
} satisfies Config;
