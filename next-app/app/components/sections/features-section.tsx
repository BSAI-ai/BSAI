import { BriefcaseBusiness, GraduationCap, Languages, ShieldCheck, Sparkles, Workflow } from 'lucide-react';
import { Card, CardContent } from '@/app/components/ui/card';

const tools = [
    { title: 'AI Chat', description: 'Conversational help for writing, planning, and everyday questions.', icon: Sparkles },
    { title: 'CV Builder', description: 'Design polished resumes with structured AI guidance.', icon: BriefcaseBusiness },
    { title: 'Translator', description: 'Bridge languages with clarity and natural phrasing.', icon: Languages },
    { title: 'Learn', description: 'Turn complex ideas into digestible lessons and study plans.', icon: GraduationCap },
];

const features = [
    { title: 'Elegant by default', description: 'Thoughtful UI that feels premium on every device.', icon: Sparkles },
    { title: 'Reliable workflows', description: 'Built-in structure for learning, work, and creative output.', icon: Workflow },
    { title: 'Secure and private', description: 'Simple, transparent experiences with strong trust signals.', icon: ShieldCheck },
];

export function ToolsPreviewSection() {
    return (
        <section id="tools" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mb-10 flex items-end justify-between gap-4">
                <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">AI Tools Preview</p>
                    <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">Purpose-built experiences for modern work.</h2>
                </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {tools.map((tool) => (
                    <Card key={tool.title}>
                        <CardContent>
                            <div className="mb-4 inline-flex rounded-2xl border border-white/10 bg-white/5 p-3 text-cyan-300"><tool.icon size={18} /></div>
                            <h3 className="text-xl font-semibold text-white">{tool.title}</h3>
                            <p className="mt-3 text-sm leading-7 text-slate-400">{tool.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}

export function WhyChooseSection() {
    return (
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid gap-8 rounded-[32px] border border-white/10 bg-slate-900/70 p-8 backdrop-blur-xl lg:grid-cols-[1fr_0.95fr]">
                <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Why Choose BSAI</p>
                    <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Thoughtful design, clear outcomes, and instant momentum.</h2>
                    <p className="mt-5 text-lg leading-8 text-slate-400">Every experience is shaped to feel calm, elegant, and useful from the very first interaction.</p>
                </div>
                <div className="grid gap-4">
                    {features.map((feature) => (
                        <div key={feature.title} className="rounded-2xl border border-white/10 bg-slate-950/60 p-5">
                            <div className="mb-3 inline-flex rounded-2xl border border-white/10 bg-white/5 p-3 text-cyan-300"><feature.icon size={18} /></div>
                            <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                            <p className="mt-2 text-sm leading-7 text-slate-400">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
