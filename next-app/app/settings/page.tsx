"use client";

import { Bell, Paintbrush, KeyRound, Languages, Moon, ShieldCheck, UserRound, Lock, ChevronRight } from 'lucide-react';
import { Footer } from '@/app/components/layout/footer';
import { Navbar } from '@/app/components/layout/navbar';

const sections = [
    { title: 'Theme', description: 'Choose your preferred visual experience', icon: Paintbrush },
    { title: 'Language', description: 'Switch the interface language', icon: Languages },
    { title: 'Profile', description: 'Manage your personal details', icon: UserRound },
    { title: 'Privacy', description: 'Control data sharing and visibility', icon: ShieldCheck },
    { title: 'Notifications', description: 'Adjust alerts and updates', icon: Bell },
    { title: 'Keyboard Shortcuts', description: 'Personalize fast actions', icon: KeyRound },
    { title: 'Account', description: 'Secure sign-in and account controls', icon: Lock },
];

export default function SettingsPage() {
    return (
        <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.16),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(16,185,129,0.14),_transparent_20%),linear-gradient(135deg,_#020617,_#0f172a)] text-slate-100">
            <Navbar />
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-5xl rounded-[32px] border border-white/10 bg-slate-900/70 p-6 shadow-soft backdrop-blur-xl">
                    <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Settings</p>
                            <h1 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">Personalize your BSAI experience.</h1>
                        </div>
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                            <Moon size={16} className="text-cyan-300" />
                            Dark Mode Enabled
                        </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                        {sections.map((section) => {
                            const Icon = section.icon;
                            return (
                                <div key={section.title} className="rounded-[24px] border border-white/10 bg-slate-950/60 p-5 transition hover:border-cyan-400/30 hover:bg-slate-900/80">
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                                        <Icon size={18} />
                                    </div>
                                    <div className="flex items-start justify-between gap-3">
                                        <div>
                                            <h2 className="text-lg font-semibold text-white">{section.title}</h2>
                                            <p className="mt-2 text-sm leading-7 text-slate-400">{section.description}</p>
                                        </div>
                                        <ChevronRight size={18} className="mt-1 text-slate-500" />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
