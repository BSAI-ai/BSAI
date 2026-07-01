'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Bot, BrainCircuit, MessageCircleMore, Sparkles } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent } from '@/app/components/ui/card';

const tools = [
    { title: 'AI Chat', description: 'Conversational help for writing, planning, and everyday questions.', icon: MessageCircleMore },
    { title: 'AI Studio', description: 'A calm command center for your best ideas.', icon: BrainCircuit },
];

export function HeroSection() {
    return (
        <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-blue/30 bg-brand-blue/10 px-4 py-2 text-sm text-cyan-300">
                    <Sparkles size={16} />
                    One Platform. Infinite Possibilities.
                </div>
                <h1 className="max-w-2xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
                    Build smarter. Learn faster. Create boldly.
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                    BSAI brings elegant AI-powered tools together for learning, writing, building, and solving problems with clarity.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                    <Link href="#cta">
                        <Button className="gap-2">Get started <ArrowRight size={18} /></Button>
                    </Link>
                    <Link href="#tools">
                        <Button variant="outline">Explore tools</Button>
                    </Link>
                </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.1 }}>
                <Card className="p-6 shadow-soft">
                    <div className="rounded-[24px] border border-cyan-400/20 bg-gradient-to-br from-brand-blue/20 via-slate-900 to-brand-emerald/20 p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Live workspace</p>
                                <h2 className="mt-2 text-2xl font-semibold text-white">AI Studio</h2>
                            </div>
                            <div className="rounded-full border border-white/10 bg-white/10 p-3 text-cyan-300"><Bot size={20} /></div>
                        </div>
                        <div className="mt-8 grid gap-4 sm:grid-cols-2">
                            {tools.map((tool) => (
                                <div key={tool.title} className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                                    <tool.icon size={18} className="text-brand-emerald" />
                                    <p className="mt-3 font-medium text-white">{tool.title}</p>
                                    <p className="mt-2 text-sm leading-6 text-slate-400">{tool.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Card>
            </motion.div>
        </section>
    );
}
