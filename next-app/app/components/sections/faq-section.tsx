const faqs = [
    { question: 'Is BSAI free to use?', answer: 'Yes. The experience is designed around free and open-source technologies with no paid service requirement.' },
    { question: 'Can I use BSAI for work and study?', answer: 'Absolutely. The platform is built for productivity, learning, writing, and creative exploration.' },
    { question: 'Does it work on mobile?', answer: 'Yes. The layout is responsive and optimized for desktop, tablet, and mobile.' },
];

export function FaqSection() {
    return (
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="rounded-[32px] border border-white/10 bg-slate-900/70 p-8 backdrop-blur-xl">
                <div className="mb-10 max-w-2xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">FAQ</p>
                    <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Questions people ask before they begin.</h2>
                </div>
                <div className="grid gap-4">
                    {faqs.map((faq) => (
                        <details key={faq.question} className="rounded-2xl border border-white/10 bg-slate-950/60 p-5">
                            <summary className="cursor-pointer text-base font-medium text-white">{faq.question}</summary>
                            <p className="mt-3 text-sm leading-7 text-slate-400">{faq.answer}</p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}
