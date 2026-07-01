import { useState } from "react";
import { Link } from "react-router-dom";

export default function ImageGenerator() {
    const [prompt, setPrompt] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const generate = () => {
        if (!prompt.trim()) return;
        setError("");
        setLoading(true);
        setImageUrl("");

        const encodedPrompt = encodeURIComponent(prompt.trim());
        const url = `https://pollinations.ai/${encodedPrompt}?width=1024&height=1024&nologo=true&private=true`;
        setImageUrl(url);
    };

    return (
        <section className="mx-auto flex max-w-5xl flex-col gap-6">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Visual Studio</p>
                    <h1 className="text-3xl font-bold text-white">AI Image Generator</h1>
                </div>
                <Link to="/" className="rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-2 text-sm font-semibold text-cyan-300">← Home</Link>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="rounded-[28px] border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-slate-950/40">
                    <label className="mb-2 block text-sm font-semibold text-slate-200">Describe the image you want</label>
                    <textarea
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        rows={6}
                        className="w-full rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3 text-slate-100"
                        placeholder="A futuristic neon city skyline at sunset..."
                    />
                    <button
                        onClick={generate}
                        disabled={loading || !prompt.trim()}
                        className="mt-4 rounded-2xl bg-cyan-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        Generate Visual
                    </button>
                    {error ? <p className="mt-3 text-sm text-red-300">{error}</p> : null}
                </div>

                <div className="rounded-[28px] border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-slate-950/40">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-xl font-semibold text-white">Preview</h2>
                            <p className="mt-2 text-sm text-slate-400">
                                {imageUrl ? "Generating a beautiful image from your prompt..." : "Your generated artwork will appear here."}
                            </p>
                        </div>
                        {imageUrl ? (
                            <a
                                href={imageUrl}
                                download="BSAI-image.png"
                                className="rounded-2xl border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-500/20"
                            >
                                Download
                            </a>
                        ) : null}
                    </div>

                    <div className="mt-4 min-h-[320px] rounded-3xl border border-slate-800 bg-slate-950 p-4">
                        {imageUrl ? (
                            <div className="relative overflow-hidden rounded-3xl bg-slate-900">
                                {loading ? (
                                    <div className="flex min-h-[320px] flex-col items-center justify-center gap-4 px-4 py-6 text-center">
                                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cyan-500/10">
                                            <div className="h-10 w-10 animate-spin rounded-full border-4 border-t-transparent border-cyan-300" />
                                        </div>
                                        <p className="max-w-lg text-sm leading-6 text-slate-300">BSAI is painting your imagination...</p>
                                    </div>
                                ) : (
                                    <img
                                        src={imageUrl}
                                        alt="Generated preview"
                                        className="w-full rounded-3xl object-cover"
                                        onLoad={() => setLoading(false)}
                                        onError={() => {
                                            setLoading(false);
                                            setImageUrl("");
                                            setError("Failed to load the generated image. Please try a different prompt.");
                                        }}
                                    />
                                )}
                            </div>
                        ) : (
                            <div className="flex min-h-[320px] items-center justify-center rounded-3xl border-dashed border border-slate-700 bg-slate-950 text-sm text-slate-400">
                                Enter a prompt and click generate to preview your art.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
