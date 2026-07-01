import { Link } from "react-router-dom";

const tools = [
  {
    title: "AI Chat",
    description: "Talk to a premium assistant for ideas, answers, and quick help.",
    path: "/chat",
    accent: "from-cyan-500/20 to-blue-500/10"
  },
  {
    title: "AI Image Generator",
    description: "Create polished visual concepts and SVG artwork from a simple prompt.",
    path: "/image",
    accent: "from-pink-500/20 to-fuchsia-500/10"
  },
  {
    title: "Universal Translator",
    description: "Translate text across languages and hear it spoken aloud instantly.",
    path: "/translator",
    accent: "from-emerald-500/20 to-teal-500/10"
  },
  {
    title: "Coding & Homework Helper",
    description: "Get code help, explanations, and step-by-step guidance in seconds.",
    path: "/code",
    accent: "from-violet-500/20 to-indigo-500/10"
  },
  {
    title: "Social Media Writer",
    description: "Craft captions, hooks, scripts, and polished short-form content.",
    path: "/social",
    accent: "from-amber-500/20 to-orange-500/10"
  },
  {
    title: "Resume Builder",
    description: "Shape polished career stories into a striking live resume.",
    path: "/resume",
    accent: "from-fuchsia-500/20 to-violet-500/10"
  },
  {
    title: "Email Writer",
    description: "Turn rough notes into refined professional messages.",
    path: "/email",
    accent: "from-sky-500/20 to-cyan-500/10"
  },
  {
    title: "Summarizer",
    description: "Condense long content into sharp, readable highlights.",
    path: "/summary",
    accent: "from-lime-500/20 to-emerald-500/10"
  }
];

function Home() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col gap-6">
      <div className="overflow-hidden rounded-[32px] border border-white/10 bg-slate-900/80 p-6 shadow-[0_30px_80px_rgba(2,8,23,0.55)] backdrop-blur-xl sm:p-8 lg:p-10">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-400/10 px-2 text-[0.95rem] font-black tracking-[0.25em] text-cyan-300 shadow-[0_0_50px_rgba(34,211,238,0.25)] sm:h-24 sm:w-24 sm:px-3 sm:text-[1.1rem]">
            <img src="/brand/icon.svg" alt="BSAI mark" className="h-10 w-10 sm:h-12 sm:w-12" />
          </div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
            Premium AI suite
          </p>
          <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            BSAI
          </h1>
          <p className="mt-4 text-lg leading-8 text-slate-300 sm:text-xl">
            A refined mobile-first workspace for writing, building, translating, and thinking faster.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200">
              Instant replies
            </span>
            <span className="rounded-full border border-fuchsia-400/30 bg-fuchsia-400/10 px-4 py-2 text-sm font-medium text-fuchsia-200">
              Elegant UI
            </span>
            <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-200">
              Smart tools
            </span>
          </div>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {tools.map((tool) => (
          <Link
            key={tool.path}
            to={tool.path}
            className={`group relative overflow-hidden rounded-[24px] border border-white/10 bg-slate-900/80 p-5 shadow-lg shadow-slate-950/30 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-cyan-500/10`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${tool.accent} opacity-80`} />
            <div className="relative">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/70 text-sm font-semibold text-cyan-300">
                {tool.title.charAt(0)}
              </div>
              <h2 className="text-xl font-semibold text-white">{tool.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">{tool.description}</p>
              <span className="mt-6 inline-flex items-center text-sm font-semibold text-cyan-300 transition group-hover:translate-x-1">
                Open tool →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Home;
