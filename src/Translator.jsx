import { useState } from "react";
import { Link } from "react-router-dom";

const languageOptions = [
    "English",
    "Nepali",
    "Hindi",
    "Spanish",
    "French",
    "German",
    "Arabic",
    "Chinese",
    "Japanese",
    "Korean",
    "Portuguese",
    "Italian",
    "Russian",
    "Turkish",
    "Dutch",
    "Swedish",
    "Polish",
    "Bengali",
    "Urdu",
    "Thai"
];

export default function Translator() {
    const [text, setText] = useState("");
    const [sourceLanguage, setSourceLanguage] = useState("English");
    const [targetLanguage, setTargetLanguage] = useState("French");
    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const translate = async () => {
        if (!text.trim()) return;
        setLoading(true);
        setError("");
        try {
            const res = await fetch("/api/ai", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    message: text,
                    task: "translate",
                    sourceLanguage,
                    targetLanguage,
                }),
            });
            const data = await res.json().catch(() => ({}));
            if (!res.ok) throw new Error(data?.error || "Translation failed");
            setResult(data.reply || "");
        } catch (err) {
            setError(err?.message || "Translation failed");
        } finally {
            setLoading(false);
        }
    };

    const speak = () => {
        if (!result) return;
        const utterance = new SpeechSynthesisUtterance(result);
        utterance.lang = targetLanguage === "French"
            ? "fr-FR"
            : targetLanguage === "Spanish"
                ? "es-ES"
                : targetLanguage === "German"
                    ? "de-DE"
                    : targetLanguage === "Japanese"
                        ? "ja-JP"
                        : targetLanguage === "Korean"
                            ? "ko-KR"
                            : targetLanguage === "Chinese"
                                ? "zh-CN"
                                : targetLanguage === "Arabic"
                                    ? "ar-SA"
                                    : targetLanguage === "Hindi"
                                        ? "hi-IN"
                                        : targetLanguage === "Nepali"
                                            ? "ne-NP"
                                            : "en-US";
        window.speechSynthesis.speak(utterance);
    };

    return (
        <section className="mx-auto flex max-w-5xl flex-col gap-6">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Global Voice</p>
                    <h1 className="text-3xl font-bold text-white">Universal Language Translator</h1>
                </div>
                <Link to="/" className="rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-2 text-sm font-semibold text-cyan-300">← Home</Link>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
                <div className="rounded-[28px] border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-slate-950/40">
                    <label className="mb-2 block text-sm font-semibold text-slate-200">Text to translate</label>
                    <textarea value={text} onChange={(e) => setText(e.target.value)} rows={6} className="w-full rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3 text-slate-100" placeholder="Hello, how are you today?" />
                    <label className="mt-4 mb-2 block text-sm font-semibold text-slate-200">Source language</label>
                    <select value={sourceLanguage} onChange={(e) => setSourceLanguage(e.target.value)} className="w-full rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3 text-slate-100">
                        {languageOptions.map((language) => (
                            <option key={language} value={language}>{language}</option>
                        ))}
                    </select>
                    <label className="mt-4 mb-2 block text-sm font-semibold text-slate-200">Target language</label>
                    <select value={targetLanguage} onChange={(e) => setTargetLanguage(e.target.value)} className="w-full rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3 text-slate-100">
                        {languageOptions.map((language) => (
                            <option key={language} value={language}>{language}</option>
                        ))}
                    </select>
                    <button onClick={translate} disabled={loading} className="mt-4 rounded-2xl bg-cyan-500 px-5 py-3 font-semibold text-slate-950">
                        {loading ? "Translating..." : "Translate & Speak"}
                    </button>
                    {error ? <p className="mt-3 text-sm text-red-300">{error}</p> : null}
                </div>

                <div className="rounded-[28px] border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-slate-950/40">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-semibold text-white">Translation</h2>
                        <button onClick={speak} disabled={!result} className="rounded-2xl border border-cyan-400/30 px-4 py-2 text-sm font-semibold text-cyan-300">Play Audio</button>
                    </div>
                    <div className="mt-4 min-h-[220px] rounded-2xl border border-slate-800 bg-slate-950 p-4 text-slate-200">
                        {result || "Your translated text and audio preview will appear here."}
                    </div>
                </div>
            </div>
        </section>
    );
}
