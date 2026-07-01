import Link from 'next/link';
import { Bot, FileText, Image, Languages, PenTool, SquareCode, Compass, BookOpen, ArrowRight, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import { Footer } from '@/app/components/layout/footer';
import { Navbar } from '@/app/components/layout/navbar';
import { AuthGuard } from '@/app/components/auth/AuthGuard';

const cards = [
    { title: 'AI Chat', description: 'Talk naturally with a powerful assistant for ideas, plans, and writing.', icon: Bot },
    { title: 'CV Builder', description: 'Create standout resumes with elegant templates and smart suggestions.', icon: FileText },
    { title: 'Resume Analyzer', description: 'Review and improve your resume against modern expectations.', icon: PenTool },
    { title: 'Translator', description: 'Translate content across languages with clarity and speed.', icon: Languages },
    { title: 'Image Generator', description: 'Create visuals and concepts from a simple prompt.', icon: Image },
    { title: 'PDF Assistant', description: 'Summarize, extract, and interact with documents instantly.', icon: BookOpen },
    { title: 'Coding Assistant', description: 'Get code explanations, debugging help, and implementation ideas.', icon: SquareCode },
    { title: 'Study Assistant', description: 'Build study plans, notes, and recall strategies around your goals.', icon: GraduationCap },
    { title: 'Travel Planner', description: 'Plan trips, create itineraries, and organize travel details smoothly.', icon: Compass },
    { title: 'Document Assistant', description: 'Refine long documents into concise, polished outputs.', icon: FileText },
];

function DashboardPage() {
    return (
        <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.16),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(16,185,129,0.14),_transparent_20%),linear-gradient(135deg,_#020617,_#0f172a)] text-slate-100">
            <Navbar />
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="mb-8 flex flex-col gap-4 rounded-[28px] border border-white/10 bg-slate-900/70 p-6 backdrop-blur-xl lg:flex-row lg:items-end lg:justify-between">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">AI Dashboard</p>
                        <h1 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">A premium workspace for thinking, creating, and shipping faster.</h1>
                    </div>
                    <Link href="/chat" className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-5 py-3 text-sm font-medium text-white transition hover:bg-brand-blue/90">Open AI Chat <ArrowRight size={16} /></Link>
                </div>

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {cards.map((card, index) => {
                        const Icon = card.icon;
                        return (
                            <motion.article
                                key={card.title}
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05, duration: 0.35 }}
                                whileHover={{ y: -6, scale: 1.01 }}
                                className="group rounded-[24px] border border-white/10 bg-slate-900/70 p-6 shadow-soft backdrop-blur-xl"
                            >
                                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 transition group-hover:border-cyan-300/40 group-hover:bg-cyan-300/15">
                                    <Icon size={20} />
                                </div>
                                <h2 className="text-xl font-semibold text-white">{card.title}</h2>
                                <p className="mt-3 text-sm leading-7 text-slate-400">{card.description}</p>
                                <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand-emerald">Launch tool <ArrowRight size={16} /></div>
                            </motion.article>
                        );
                    })}
                </div>
            </div>
            <Footer />
        </main>
    );
}

export default function DashboardRoutePage() {
    return (
        <AuthGuard>
            <DashboardPage />
        </AuthGuard>
    );
}
