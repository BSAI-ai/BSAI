"use client";

import Link from 'next/link';
import { Button } from '@/app/components/ui/button';
import { useAuth } from '@/app/components/auth/AuthContext';

const links = [
    { label: 'Home', href: '/' },
    { label: 'Chat', href: '/chat' },
    { label: 'AI Tools', href: '/dashboard' },
    { label: 'CV Builder', href: '/cv-builder' },
    { label: 'Translator', href: '/translator' },
    { label: 'Jobs', href: '/jobs' },
    { label: 'Learn', href: '/learn' },
    { label: 'About', href: '/about' },
    { label: 'Settings', href: '/settings' },
];

export function Navbar() {
    const { user, logout } = useAuth();

    return (
        <nav className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                <Link href="/" className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-blue/40 bg-brand-blue/10 text-sm font-semibold tracking-[0.24em] text-cyan-300">BS</div>
                    <div>
                        <p className="text-lg font-semibold text-white">BSAI</p>
                        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Infinite Possibilities</p>
                    </div>
                </Link>
                <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
                    {links.map((link) => (
                        <Link key={link.label} href={link.href} className="transition hover:text-white">{link.label}</Link>
                    ))}
                </div>
                <div className="flex items-center gap-3">
                    <Button variant="outline" size="sm">Dark</Button>
                    {user ? (
                        <div className="flex items-center gap-3">
                            <div className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.22em] text-slate-200">{user.email}</div>
                            <button type="button" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:bg-white/10" onClick={logout}>
                                Logout
                            </button>
                        </div>
                    ) : (
                        <a href="/login" className="rounded-full border border-white/10 bg-brand-blue px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-blue/90">
                            Login
                        </a>
                    )}
                </div>
            </div>
        </nav>
    );
}
