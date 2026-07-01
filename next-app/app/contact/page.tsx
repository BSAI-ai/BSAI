import Link from 'next/link';
import { Mail, Phone, Sparkles } from 'lucide-react';
import { Footer } from '@/app/components/layout/footer';
import { Navbar } from '@/app/components/layout/navbar';

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.16),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(16,185,129,0.14),_transparent_20%),linear-gradient(135deg,_#020617,_#0f172a)] text-slate-100">
            <Navbar />
            <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
                <section className="rounded-[32px] border border-white/10 bg-slate-900/70 p-8 shadow-soft backdrop-blur-xl">
                    <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Contact</p>
                            <h1 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">We’re here to help you build better with AI.</h1>
                            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                                Reach out for product questions, feedback, or support. We’ll get back to you quickly with thoughtful guidance.
                            </p>
                        </div>
                        <div className="rounded-[28px] border border-white/10 bg-slate-950/70 p-6">
                            <div className="flex items-center gap-3 text-slate-300">
                                <Sparkles size={20} className="text-cyan-300" />
                                <span className="text-sm uppercase tracking-[0.25em]">Fast response, real support</span>
                            </div>
                            <div className="mt-6 space-y-4 text-sm text-slate-400">
                                <div className="flex items-start gap-3">
                                    <Mail size={18} className="mt-1 text-cyan-300" />
                                    <div>
                                        <p className="font-semibold text-white">Email</p>
                                        <p>hello@bsai.example</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Phone size={18} className="mt-1 text-cyan-300" />
                                    <div>
                                        <p className="font-semibold text-white">Phone</p>
                                        <p>+1 (800) 123-4567</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-slate-300">Prefer to explore tools first? Try AI Chat or the dashboard for immediate ideas.</p>
                        <Link href="/chat" className="inline-flex items-center justify-center rounded-full bg-brand-blue px-5 py-3 text-sm font-medium text-white transition hover:bg-brand-blue/90">
                            Open AI Chat
                        </Link>
                    </div>
                </section>
            </div>
            <Footer />
        </main>
    );
}
