import Link from 'next/link';
import { Globe2, Sparkles } from 'lucide-react';
import { Footer } from '@/app/components/layout/footer';
import { Navbar } from '@/app/components/layout/navbar';

export default function TranslatorPage() {
    return (
        <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.16),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(16,185,129,0.14),_transparent_20%),linear-gradient(135deg,_#020617,_#0f172a)] text-slate-100">
            <Navbar />
            <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
                <section className="rounded-[32px] border border-white/10 bg-slate-900/70 p-8 shadow-soft backdrop-blur-xl">
                    <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Translator</p>
                            <h1 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Translate content with confidence and clarity.</h1>
                            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                                Convert ideas, documents, and messages across languages while preserving tone, meaning, and style.
                            </p>
                        </div>
                        <div className="rounded-[28px] border border-white/10 bg-slate-950/70 p-6">
                            <div className="flex items-center gap-3 text-slate-300">
                                <Sparkles size={20} className="text-cyan-300" />
                                <span className="text-sm uppercase tracking-[0.25em]">Fast language workflows</span>
                            </div>
                            <p className="mt-4 text-sm leading-7 text-slate-400">
                                Translate words, paragraphs, and content flows with natural phrasing and premium clarity.
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 grid gap-6 md:grid-cols-2">
                        <div className="rounded-[28px] border border-white/10 bg-slate-950/70 p-6">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                                <Globe2 size={20} />
                            </div>
                            <h2 className="mt-4 text-xl font-semibold text-white">Support for many languages</h2>
                            <p className="mt-3 text-sm leading-7 text-slate-400">
                                Switch between languages instantly and keep your messaging polished for global audiences.
                            </p>
                        </div>
                        <div className="rounded-[28px] border border-white/10 bg-slate-950/70 p-6">
                            <h2 className="text-xl font-semibold text-white">Tone-aware translations</h2>
                            <p className="mt-3 text-sm leading-7 text-slate-400">
                                Maintain tone, intent, and context so translations feel like they were written by a fluent native speaker.
                            </p>
                        </div>
                    </div>

                    <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
                        <p className="text-slate-300">Ready for your next global idea? Translate it with speed and premium style.</p>
                        <Link href="/dashboard" className="inline-flex items-center justify-center rounded-full bg-brand-blue px-5 py-3 text-sm font-medium text-white transition hover:bg-brand-blue/90">
                            Return to dashboard
                        </Link>
                    </div>
                </section>
            </div>
            <Footer />
        </main>
    );
}
