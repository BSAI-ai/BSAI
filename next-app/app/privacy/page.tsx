import { ShieldCheck } from 'lucide-react';
import { Footer } from '@/app/components/layout/footer';
import { Navbar } from '@/app/components/layout/navbar';

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.16),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(16,185,129,0.14),_transparent_20%),linear-gradient(135deg,_#020617,_#0f172a)] text-slate-100">
            <Navbar />
            <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
                <section className="rounded-[32px] border border-white/10 bg-slate-900/70 p-8 shadow-soft backdrop-blur-xl">
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Privacy</p>
                            <h1 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Your data stays secure, private, and clear.</h1>
                        </div>
                        <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-3 text-sm text-cyan-200">
                            <ShieldCheck size={20} />
                            Trusted by every workflow
                        </div>
                    </div>

                    <div className="mt-8 grid gap-6 lg:grid-cols-2">
                        <div className="rounded-[28px] border border-white/10 bg-slate-950/70 p-6">
                            <h2 className="text-lg font-semibold text-white">What we collect</h2>
                            <p className="mt-3 text-sm leading-7 text-slate-400">
                                Minimal usage data powers the experience while your personal content stays private. We don’t share your conversations or projects with third parties.
                            </p>
                        </div>
                        <div className="rounded-[28px] border border-white/10 bg-slate-950/70 p-6">
                            <h2 className="text-lg font-semibold text-white">How we protect it</h2>
                            <p className="mt-3 text-sm leading-7 text-slate-400">
                                Encryption, secure storage, and strict access controls keep your workflows protected across every session.
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 rounded-[28px] border border-white/10 bg-slate-950/70 p-6">
                        <h2 className="text-lg font-semibold text-white">Your control</h2>
                        <p className="mt-3 text-sm leading-7 text-slate-400">
                            Use BSAI with confidence. You can manage your preferences in Settings, export your data, or remove access at any time.
                        </p>
                    </div>
                </section>
            </div>
            <Footer />
        </main>
    );
}
