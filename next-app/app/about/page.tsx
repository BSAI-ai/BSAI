import Link from 'next/link';
import { Briefcase, Compass, Sparkles } from 'lucide-react';
import { Footer } from '@/app/components/layout/footer';
import { Navbar } from '@/app/components/layout/navbar';

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.16),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(16,185,129,0.14),_transparent_20%),linear-gradient(135deg,_#020617,_#0f172a)] text-slate-100">
            <Navbar />
            <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
                <section className="rounded-[32px] border border-white/10 bg-slate-900/70 p-8 shadow-soft backdrop-blur-xl">
                    <div className="mb-10 grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-end">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">About BSAI</p>
                            <h1 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Crafting a smarter AI platform for creators, learners, and teams.</h1>
                            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                                BSAI blends thoughtful design, powerful tools, and clarity-focused workflows so you can move from idea to execution with confidence.
                            </p>
                        </div>
                        <div className="rounded-[28px] border border-white/10 bg-slate-950/70 p-6">
                            <div className="flex items-center gap-3 text-slate-300">
                                <Sparkles size={20} className="text-cyan-300" />
                                <span className="text-sm uppercase tracking-[0.25em]">Premium design, accessible tools</span>
                            </div>
                            <p className="mt-4 text-sm leading-7 text-slate-400">
                                Built to support work, learning, and creative momentum without clutter or complexity.
                            </p>
                        </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        {[
                            { title: 'Built for productivity', description: 'Everything is designed to keep the experience calm, fast, and focused.', icon: Briefcase },
                            { title: 'Connected intelligence', description: 'Tools that feel cohesive across writing, research, and planning.', icon: Compass },
                            { title: 'Elegant interactions', description: 'Premium journeys without premium friction.', icon: Sparkles },
                        ].map((item) => {
                            const Icon = item.icon;
                            return (
                                <div key={item.title} className="rounded-[28px] border border-white/10 bg-slate-950/70 p-6">
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                                        <Icon size={20} />
                                    </div>
                                    <h2 className="text-xl font-semibold text-white">{item.title}</h2>
                                    <p className="mt-3 text-sm leading-7 text-slate-400">{item.description}</p>
                                </div>
                            );
                        })}
                    </div>

                    <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <p className="max-w-2xl text-slate-300">
                            BSAI is made to help you launch ideas faster, stay organized, and keep your AI workflows modern and intuitive.
                        </p>
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
