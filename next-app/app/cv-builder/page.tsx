import Link from 'next/link';
import { FileText, Sparkles } from 'lucide-react';
import { Footer } from '@/app/components/layout/footer';
import { Navbar } from '@/app/components/layout/navbar';

export default function CvBuilderPage() {
    return (
        <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.16),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(16,185,129,0.14),_transparent_20%),linear-gradient(135deg,_#020617,_#0f172a)] text-slate-100">
            <Navbar />
            <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
                <section className="rounded-[32px] border border-white/10 bg-slate-900/70 p-8 shadow-soft backdrop-blur-xl">
                    <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">CV Builder</p>
                            <h1 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Create polished resumes in minutes.</h1>
                            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                                Build an elegant CV using guided prompts, modern sections, and expert-ready formatting.
                            </p>
                        </div>
                        <div className="rounded-[28px] border border-white/10 bg-slate-950/70 p-6">
                            <div className="flex items-center gap-3 text-slate-300">
                                <Sparkles size={20} className="text-cyan-300" />
                                <span className="text-sm uppercase tracking-[0.25em]">Fast, polished resumes</span>
                            </div>
                            <p className="mt-4 text-sm leading-7 text-slate-400">
                                Start with your experience, then let BSAI style your story for modern hiring workflows.
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 grid gap-6 md:grid-cols-2">
                        <div className="rounded-[28px] border border-white/10 bg-slate-950/70 p-6">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                                <FileText size={20} />
                            </div>
                            <h2 className="mt-4 text-xl font-semibold text-white">Guided templates</h2>
                            <p className="mt-3 text-sm leading-7 text-slate-400">
                                Intelligent suggestions help structure every section so your resume feels polished and strategic.
                            </p>
                        </div>
                        <div className="rounded-[28px] border border-white/10 bg-slate-950/70 p-6">
                            <h2 className="text-xl font-semibold text-white">Smart content prompts</h2>
                            <p className="mt-3 text-sm leading-7 text-slate-400">
                                Use prompts to optimize experience summaries, highlight achievements, and tailor your profile for the next opportunity.
                            </p>
                        </div>
                    </div>

                    <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
                        <p className="text-slate-300">Ready to start? Build a stronger resume with a modern layout and professional language.</p>
                        <Link href="/dashboard" className="inline-flex items-center justify-center rounded-full bg-brand-blue px-5 py-3 text-sm font-medium text-white transition hover:bg-brand-blue/90">
                            Explore AI tools
                        </Link>
                    </div>
                </section>
            </div>
            <Footer />
        </main>
    );
}
