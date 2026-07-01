"use client";

import Link from 'next/link';
import { Button } from '@/app/components/ui/button';
import { useAuth } from '@/app/components/auth/AuthContext';

export function AuthGuard({ children }: { children: React.ReactNode }) {
    const { authReady, user } = useAuth();

    if (!authReady) {
        return (
            <div className="min-h-[60vh] grid place-items-center px-6 py-20 text-slate-300">
                <p>Loading authentication status...</p>
            </div>
        );
    }

    if (!user) {
        return (
            <div className="min-h-[60vh] grid place-items-center px-6 py-20 text-slate-100">
                <div className="w-full max-w-lg rounded-[32px] border border-white/10 bg-slate-950/80 p-10 text-center shadow-2xl shadow-slate-950/30">
                    <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Secure access only</p>
                    <h1 className="mt-4 text-3xl font-semibold text-white">Sign in to continue</h1>
                    <p className="mt-4 text-sm leading-7 text-slate-400">
                        Your AI workspace is protected. Login or create a free account to unlock chat and tool usage.
                    </p>
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                        <Link href="/login" className="inline-flex justify-center rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-blue/90">
                            Login
                        </Link>
                        <Link href="/signup" className="inline-flex justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/10">
                            Sign up
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return <>{children}</>;
}
