import Link from 'next/link';
import { Briefcase, Sparkles } from 'lucide-react';
import { Footer } from '@/app/components/layout/footer';
import { Navbar } from '@/app/components/layout/navbar';

export default function JobsPage() {
    return (
        <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.16),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(16,185,129,0.14),_transparent_20%),linear-gradient(135deg,_#020617,_#0f172a)] text-slate-100">
            <Navbar />
            <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
                <section className="rounded-[32px] border border-white/10 bg-slate-900/70 p-8 shadow-soft backdrop-blur-xl">
                    <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Jobs</p>
                            <h1 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Find smarter ways to connect with opportunity.</h1>
                            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                                Explore job search support, role summaries, resume alignment, and career messaging without leaving the platform.
                            </p>
                        </div>
                        <div className="rounded-[28px] border border-white/10 bg-slate-950/70 p-6">
                            <div className="flex items-center gap-3 text-slate-300">
                                <Sparkles size={20} className="text-cyan-300" />
                                <span className="text-sm uppercase tracking-[0.25em]">Career-ready guidance</span>
                            </div>
                            <p className="mt-4 text-sm leading-7 text-slate-400">
                                Use AI-powered recommendations to tailor job applications, polish your profile, and stay aligned with growing career trends.
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 grid gap-6 md:grid-cols-2">
                        <div className="rounded-[28px] border border-white/10 bg-slate-950/70 p-6">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                                <Briefcase size={20} />
                            </div>
                            <h2 className="mt-4 text-xl font-semibold text-white">Opportunity discovery</h2>
                            <p className="mt-3 text-sm leading-7 text-slate-400">
                                Convert role descriptions into action items, focus areas, and messaging that match what hiring teams want.
                            </p>
                        </div>
                        <div className="rounded-[28px] border border-white/10 bg-slate-950/70 p-6">
                            <h2 className="text-xl font-semibold text-white">Application polish</h2>
                            <p className="mt-3 text-sm leading-7 text-slate-400">
                                Turn resume bullet points and cover note drafts into refined, role-focused content.
                            </p>
                        </div>
                    </div>

                    <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
                        <p className="text-slate-300">Unlock clearer career direction with tools designed for ambitious, modern workflows.</p>
                        <Link href="/dashboard" className="inline-flex items-center justify-center rounded-full bg-brand-blue px-5 py-3 text-sm font-medium text-white transition hover:bg-brand-blue/90">
                            Visit dashboard
                        </Link>
                    </div>
                </section>
            </div>
            <Footer />
        </main>
    );
}
