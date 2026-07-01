"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FormEvent, useEffect, useState } from 'react';
import { Button } from '@/app/components/ui/button';
import { useAuth } from '@/app/components/auth/AuthContext';

export default function LoginPage() {
    const router = useRouter();
    const { authReady, user, login, errorMessage } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formError, setFormError] = useState('');

    useEffect(() => {
        if (authReady && user) {
            router.replace('/chat');
        }
    }, [authReady, user, router]);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setFormError('');

        if (!email || !password) {
            setFormError('Please enter both email and password.');
            return;
        }

        setIsSubmitting(true);
        const success = await login(email, password);
        setIsSubmitting(false);

        if (success) {
            router.push('/chat');
        }
    };

    return (
        <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.14),_transparent_25%),radial-gradient(circle_at_top_right,_rgba(14,165,233,0.12),_transparent_18%),linear-gradient(135deg,_#020617,_#0f172a)] text-slate-100">
            <div className="mx-auto flex min-h-screen max-w-4xl flex-col justify-center px-4 py-12 sm:px-6 lg:px-8">
                <div className="rounded-[32px] border border-white/10 bg-slate-950/75 p-10 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
                    <div className="mb-8 text-center">
                        <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Member access</p>
                        <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Login to BSAI</h1>
                        <p className="mt-3 text-sm leading-7 text-slate-400">Enter your email and password to unlock your AI usage limit and premium workspace.</p>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <label className="block">
                            <span className="text-sm font-medium text-slate-200">Email</span>
                            <input
                                type="email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                placeholder="you@example.com"
                                className="mt-2 w-full rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/10"
                            />
                        </label>
                        <label className="block">
                            <span className="text-sm font-medium text-slate-200">Password</span>
                            <input
                                type="password"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                placeholder="Enter your password"
                                className="mt-2 w-full rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/10"
                            />
                        </label>
                        {(formError || errorMessage) && (
                            <div className="rounded-3xl border border-red-700/60 bg-red-950/70 px-4 py-3 text-sm text-red-200">
                                {formError || errorMessage}
                            </div>
                        )}
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                            <Button type="submit" className="w-full sm:w-auto" disabled={isSubmitting}>
                                {isSubmitting ? 'Signing in…' : 'Sign in'}
                            </Button>
                            <p className="text-sm text-slate-400">
                                New here?{' '}
                                <Link href="/signup" className="text-cyan-300 transition hover:text-white">
                                    Create an account
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}
