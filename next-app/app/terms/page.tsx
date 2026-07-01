import Link from 'next/link';
import { Scale } from 'lucide-react';
import { Footer } from '@/app/components/layout/footer';
import { Navbar } from '@/app/components/layout/navbar';

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.16),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(16,185,129,0.14),_transparent_20%),linear-gradient(135deg,_#020617,_#0f172a)] text-slate-100">
            <Navbar />
            <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
                <section className="rounded-[32px] border border-white/10 bg-slate-900/70 p-8 shadow-soft backdrop-blur-xl">
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Terms</p>
                            <h1 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Use BSAI with clarity and confidence.</h1>
                        </div>
                        <div className="inline-flex items-center gap-3 rounded-full border border-slate-600 bg-slate-950/70 px-4 py-3 text-sm text-slate-300">
                            <Scale size={20} className="text-cyan-300" />
                            Transparent terms
                        </div>
                    </div>

                    <div className="mt-8 space-y-6">
                        <div className="rounded-[28px] border border-white/10 bg-slate-950/70 p-6">
                            <h2 className="text-lg font-semibold text-white">Accepted use</h2>
                            <p className="mt-3 text-sm leading-7 text-slate-400">
                                BSAI is designed for learning, creation, and productivity. Please use the platform responsibly and respect community guidelines.
                            </p>
                        </div>
                        <div className="rounded-[28px] border border-white/10 bg-slate-950/70 p-6">
                            <h2 className="text-lg font-semibold text-white">Content ownership</h2>
                            <p className="mt-3 text-sm leading-7 text-slate-400">
                                You retain ownership of the work you create. We store only the data needed to power the experience unless otherwise agreed.
                            </p>
                        </div>
                        <div className="rounded-[28px] border border-white/10 bg-slate-950/70 p-6">
                            <h2 className="text-lg font-semibold text-white">Service expectations</h2>
                            <p className="mt-3 text-sm leading-7 text-slate-400">
                                We strive for high availability and smooth performance, but service access is subject to normal maintenance and operational updates.
                            </p>
                        </div>
                    </div>

                    <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
                        <p className="text-sm text-slate-300">If you have questions about terms, feel free to contact our team.</p>
                        <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-slate-100 transition hover:bg-white/10">
                            Contact support
                        </Link>
                    </div>
                </section>
            </div>
            <Footer />
        </main>
    );
}
