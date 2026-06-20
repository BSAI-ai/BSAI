import { useState } from "react";

function Email() {
  const [content, setContent] = useState("");
  const formattedEmail = `Dear Sir/Madam\n\n${content}\n\nBest Regards`;

  return (
    <section className="grid gap-6 lg:grid-cols-2">
      <div>
        <h1 className="text-3xl font-bold text-white">Email Writer</h1>
        <p className="mt-2 text-slate-400">Type your message and BSAI formats it as a simple email.</p>

        <textarea
          value={content}
          onChange={(event) => setContent(event.target.value)}
          className="mt-6 min-h-72 w-full resize-y rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-white outline-none focus:border-cyan-400"
          placeholder="Write your email content..."
        />
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-cyan-300">Formatted email</p>
        <pre className="mt-4 whitespace-pre-wrap font-sans leading-7 text-slate-200">
          {formattedEmail}
        </pre>
      </div>
    </section>
  );
}

export default Email;
