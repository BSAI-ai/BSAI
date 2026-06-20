import { Link } from "react-router-dom";

const tools = [
  {
    title: "AI Chat",
    description: "Ask questions and get instant mock AI replies.",
    path: "/chat"
  },
  {
    title: "Resume Builder",
    description: "Create a live resume preview from your details.",
    path: "/resume"
  },
  {
    title: "Email Writer",
    description: "Format quick notes into a simple professional email.",
    path: "/email"
  },
  {
    title: "Summarizer",
    description: "Summarize long text into the first 100 characters.",
    path: "/summary"
  }
];

function Home() {
  return (
    <section>
      <div className="mb-8 max-w-3xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-cyan-300">
          Modern AI tools
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          BSAI helps you write, build, and summarize faster.
        </h1>
        <p className="mt-4 text-lg text-slate-300">
          Choose a tool below to start working. No backend is required for this demo.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {tools.map((tool) => (
          <Link
            key={tool.path}
            to={tool.path}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-xl shadow-slate-950/30 transition hover:-translate-y-1 hover:border-cyan-400 hover:bg-slate-900/80"
          >
            <h2 className="text-xl font-semibold text-white">{tool.title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-400">{tool.description}</p>
            <span className="mt-6 inline-block text-sm font-semibold text-cyan-300">
              Open tool
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Home;
