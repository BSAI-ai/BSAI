import { useState } from "react";

function Resume() {
  const [fullName, setFullName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [experience, setExperience] = useState("");

  return (
    <section className="grid gap-6 lg:grid-cols-2">
      <div>
        <h1 className="text-3xl font-bold text-white">Resume Builder</h1>
        <p className="mt-2 text-slate-400">Fill in your details to see a live resume preview.</p>

        <div className="mt-6 space-y-4 rounded-2xl border border-slate-800 bg-slate-900 p-5">
          <label className="block">
            <span className="text-sm font-semibold text-slate-300">Full Name</span>
            <input
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
              className="mt-2 min-h-12 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 text-white outline-none focus:border-cyan-400"
              placeholder="Alex Morgan"
            />
          </label>

          <label className="block">
            <span className="text-sm font-semibold text-slate-300">Job Title</span>
            <input
              value={jobTitle}
              onChange={(event) => setJobTitle(event.target.value)}
              className="mt-2 min-h-12 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 text-white outline-none focus:border-cyan-400"
              placeholder="Frontend Developer"
            />
          </label>

          <label className="block">
            <span className="text-sm font-semibold text-slate-300">Experience</span>
            <textarea
              value={experience}
              onChange={(event) => setExperience(event.target.value)}
              className="mt-2 min-h-40 w-full resize-y rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-cyan-400"
              placeholder="Describe your experience..."
            />
          </label>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-cyan-300">Live preview</p>
        <h2 className="mt-4 text-3xl font-bold text-white">{fullName || "Your Name"}</h2>
        <p className="mt-2 text-lg text-slate-300">{jobTitle || "Your Job Title"}</p>
        <div className="mt-6 border-t border-slate-800 pt-6">
          <h3 className="font-semibold text-white">Experience</h3>
          <p className="mt-2 whitespace-pre-wrap text-slate-400">
            {experience || "Your experience will appear here as you type."}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Resume;
