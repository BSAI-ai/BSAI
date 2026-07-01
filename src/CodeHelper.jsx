import { useState } from "react";
import { Link } from "react-router-dom";

export default function CodeHelper() {
    const [prompt, setPrompt] = useState("");
    const [answer, setAnswer] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const runHelp = async () => {
        if (!prompt.trim()) return;
        setLoading(true);
        setError("");
        try {
            const res = await fetch("/api/ai", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: prompt, task: "code" }),
            });
            const data = await res.json().catch(() => ({}));
            if (!res.ok) throw new Error(data?.error || "Unable to help with that request");
            setAnswer(data.reply || "");
        } catch (err) {
            setError(err?.message || "Unable to help with that request");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="mx-auto flex max-w-5xl flex-col gap-6">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Developer Studio</p>
                    <h1 className="text-3xl font-bold text-white">Coding & Homework Helper</h1>
                </div>
                <Link to="/" className="rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-2 text-sm font-semibold text-cyan-300">← Home</Link>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
                <div className="rounded-[28px] border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-slate-950/40">
                    <label className="mb-2 block text-sm font-semibold text-slate-200">Describe your coding or homework question</label>
                    <textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} rows={8} className="w-full rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3 text-slate-100" placeholder="Explain recursion in JavaScript with an example..." />
                    <button onClick={runHelp} disabled={loading} className="mt-4 rounded-2xl bg-cyan-500 px-5 py-3 font-semibold text-slate-950">
                        {loading ? "Thinking..." : "Get Help"}
                    </button>
                    {error ? <p className="mt-3 text-sm text-red-300">{error}</p> : null}
                </div>

                <div className="rounded-[28px] border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-slate-950/40">
                    <h2 className="text-xl font-semibold text-white">Answer</h2>
                    <div className="mt-4 whitespace-pre-wrap rounded-2xl border border-slate-800 bg-slate-950 p-4 text-sm leading-7 text-slate-200">
                        {answer || "Your detailed explanation will appear here."}
                    </div>
                </div>
            </div>
        </section>
    );
}
