"use client";

import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'AI Chat', href: '/chat' },
    { label: 'AI Tools', href: '/dashboard' },
    { label: 'CV Builder', href: '/cv-builder' },
    { label: 'Translator', href: '/translator' },
    { label: 'Jobs', href: '/jobs' },
    { label: 'Learn', href: '/learn' },
    { label: 'Settings', href: '/settings' },
    { label: 'About', href: '/about' },
];

const toolCards = [
    { title: 'AI Chat', description: 'Talk naturally with a powerful assistant.', color: 'from-sky-500 to-blue-600', icon: '💬' },
    { title: 'CV Builder', description: 'Create standout resumes in minutes.', color: 'from-indigo-500 to-violet-600', icon: '📄' },
    { title: 'Resume Analyzer', description: 'Improve your resume with AI feedback.', color: 'from-emerald-500 to-lime-500', icon: '🧠' },
    { title: 'Translator', description: 'Translate text with tone preservation.', color: 'from-cyan-500 to-sky-500', icon: '🌐' },
    { title: 'Image Generator', description: 'Generate visual concepts instantly.', color: 'from-emerald-500 to-teal-500', icon: '🖼️' },
    { title: 'PDF Assistant', description: 'Summarize and extract from documents.', color: 'from-orange-500 to-amber-500', icon: '📄' },
    { title: 'Coding Assistant', description: 'Get help writing and debugging code.', color: 'from-violet-500 to-fuchsia-500', icon: '💻' },
    { title: 'Study Assistant', description: 'Build smart study plans fast.', color: 'from-violet-500 to-indigo-500', icon: '🎓' },
];

export default function Home() {
    const [chatInput, setChatInput] = useState('');
    const [guestMessages, setGuestMessages] = useState(0);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [loggedIn] = useState(false);

    const handleSend = () => {
        if (!loggedIn && guestMessages >= 3) {
            setShowLoginModal(true);
            return;
        }

        if (!chatInput.trim()) return;

        setChatInput('');
        setGuestMessages((count) => count + 1);

        if (!loggedIn && guestMessages + 1 >= 3) {
            setShowLoginModal(true);
        }
    };

    return (
        <main className="min-h-screen bg-[#070b19] text-slate-100">
            <div className="mx-auto flex min-h-screen max-w-[1700px] border border-slate-800">
                <aside className="w-64 border-r border-slate-800 bg-[#050816] p-6">
                    <div className="mb-10 flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-blue-500 text-xl font-bold text-white">B</div>
                        <div>
                            <p className="text-lg font-semibold text-white">BSAI</p>
                            <p className="text-xs uppercase tracking-[0.35em] text-slate-500">AI Studio</p>
                        </div>
                    </div>

                    <nav className="space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="block rounded-3xl px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="mt-auto rounded-[28px] border border-slate-700 bg-slate-950/80 p-5 text-sm text-slate-300">
                        <div className="mb-3 flex items-center gap-3 text-amber-300">
                            <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-amber-500/10">👑</span>
                            <p className="font-semibold text-white">Upgrade</p>
                        </div>
                        <p className="text-slate-400">Coming Soon</p>
                    </div>
                </aside>

                <section className="flex flex-1 flex-col gap-6 p-8">
                    <header className="flex items-center justify-between gap-4 rounded-[28px] border border-slate-800 bg-[#081027] p-5 shadow-xl shadow-black/20">
                        <div className="flex-1">
                            <div className="flex h-12 items-center rounded-3xl border border-slate-800 bg-slate-950/80 px-4">
                                <span className="text-slate-500">🔍</span>
                                <input
                                    value={chatInput}
                                    onChange={(event) => setChatInput(event.target.value)}
                                    placeholder="Search anything..."
                                    className="ml-3 w-full bg-transparent text-sm text-slate-100 outline-none placeholder:text-slate-500"
                                />
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <button className="h-12 w-12 rounded-3xl border border-slate-800 bg-slate-950/80 text-slate-300 transition hover:bg-slate-900">☀️</button>
                            <div className="h-12 w-12 rounded-3xl bg-blue-500 text-white shadow-lg shadow-blue-500/20 flex items-center justify-center">A</div>
                        </div>
                    </header>

                    <div className="rounded-[32px] border border-slate-800 bg-[#081027] p-10 shadow-xl shadow-black/20">
                        <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Welcome to BSAI</p>
                        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-white">How can I help you today?</h1>
                        <p className="mt-3 max-w-2xl text-slate-400">A sleek desktop dashboard designed for fast AI workflows, secure guest previews, and premium tools behind login.</p>

                        <div className="mt-10 rounded-[32px] border border-slate-800 bg-slate-950/90 p-5">
                            <textarea
                                value={chatInput}
                                onChange={(event) => setChatInput(event.target.value)}
                                rows={5}
                                placeholder="Type your message here..."
                                className="w-full resize-none border-none bg-transparent text-base text-slate-100 outline-none placeholder:text-slate-500"
                            />
                            <div className="mt-4 flex items-center justify-between">
                                <div className="flex items-center gap-3 text-slate-400">
                                    <button className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-slate-900/80 text-xl transition hover:bg-white/5">📄</button>
                                    <button className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-slate-900/80 text-xl transition hover:bg-white/5">🖼️</button>
                                    <span className="text-sm">Messages left: <strong className="text-white">{Math.max(0, 3 - guestMessages)}</strong></span>
                                </div>
                                <button
                                    type="button"
                                    onClick={handleSend}
                                    className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-blue-500 text-white transition hover:bg-blue-400"
                                >
                                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-slate-400">
                            <span className="rounded-full border border-slate-700 bg-slate-950/80 px-4 py-2">Guest preview mode</span>
                            <span>{guestMessages >= 3 ? 'Login required after limit reached' : '3 guest messages available'}</span>
                        </div>
                    </div>

                    <div className="grid gap-4 xl:grid-cols-4">
                        {toolCards.map((tool) => (
                            <button
                                key={tool.title}
                                type="button"
                                onClick={() => {
                                    if (!loggedIn) {
                                        setShowLoginModal(true);
                                    } else {
                                        window.location.href = '/dashboard';
                                    }
                                }}
                                className="group rounded-[28px] border border-slate-800 bg-[#081027] p-5 text-left transition hover:border-cyan-500/20 hover:bg-slate-900"
                            >
                                <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-br ${tool.color} text-white shadow-lg shadow-slate-950/20`}>
                                    <span className="text-lg">{tool.icon}</span>
                                </div>
                                <h3 className="text-lg font-semibold text-white">{tool.title}</h3>
                                <p className="mt-2 text-sm leading-6 text-slate-400">{tool.description}</p>
                                {!loggedIn && <div className="mt-4 text-xs uppercase tracking-[0.18em] text-amber-300">Login required</div>}
                            </button>
                        ))}
                    </div>
                </section>
            </div>

            {showLoginModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
                    <div className="w-full max-w-2xl rounded-[32px] border border-slate-700 bg-[#081027] p-8 shadow-2xl shadow-black/60">
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Login required</p>
                                <h2 className="mt-3 text-3xl font-semibold text-white">Continue with BSAI</h2>
                            </div>
                            <button
                                type="button"
                                onClick={() => setShowLoginModal(false)}
                                className="text-slate-400 transition hover:text-white"
                            >
                                ✕
                            </button>
                        </div>

                        <p className="mt-5 text-slate-400">Guest preview usage is limited. Sign in or create an account to unlock the full dashboard and keep using AI tools without interruption.</p>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <Link href="/login" className="inline-flex w-full items-center justify-center rounded-3xl bg-blue-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-400 sm:w-auto">
                                Login
                            </Link>
                            <Link href="/signup" className="inline-flex w-full items-center justify-center rounded-3xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/10 sm:w-auto">
                                Sign up
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}

