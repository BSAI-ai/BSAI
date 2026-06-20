import { useState } from "react";

function Summary() {
  const [text, setText] = useState("");
  const summary = text.length > 100 ? `${text.slice(0, 100)}...` : text;

  return (
    <section className="grid gap-6 lg:grid-cols-2">
      <div>
        <h1 className="text-3xl font-bold text-white">Text Summarizer</h1>
        <p className="mt-2 text-slate-400">Paste text and get the first 100 characters as a summary.</p>

        <textarea
          value={text}
          onChange={(event) => setText(event.target.value)}
          className="mt-6 min-h-72 w-full resize-y rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-white outline-none focus:border-cyan-400"
          placeholder="Paste text to summarize..."
        />
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-cyan-300">Summary</p>
        <p className="mt-4 whitespace-pre-wrap leading-7 text-slate-200">
          {summary || "Your 100-character summary will appear here."}
        </p>
      </div>
    </section>
  );
}

export default Summary;
