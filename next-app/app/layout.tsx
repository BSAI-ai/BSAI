import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'BSAI | One Platform. Infinite Possibilities.',
    description: 'A premium AI platform for learning, creating, working, and solving problems.',
    icons: {
        icon: '/icon.svg',
    },
};

import { AuthProvider } from '@/app/components/auth/AuthContext';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <AuthProvider>{children}</AuthProvider>
            </body>
        </html>
    );
}
