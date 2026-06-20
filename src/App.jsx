import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Chat from "./pages/Chat.jsx";
import Resume from "./pages/Resume.jsx";
import Email from "./pages/Email.jsx";
import Summary from "./pages/Summary.jsx";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Chat", path: "/chat" },
  { label: "Resume", path: "/resume" },
  { label: "Email", path: "/email" },
  { label: "Summary", path: "/summary" }
];

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-slate-800 bg-slate-950/90">
        <nav className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-5 sm:flex-row sm:items-center sm:justify-between">
          <NavLink to="/" className="text-2xl font-bold tracking-tight">
            BSAI
          </NavLink>
          <div className="flex flex-wrap gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2 text-sm font-medium transition ${
                    isActive
                      ? "bg-cyan-400 text-slate-950"
                      : "bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-6xl px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/email" element={<Email />} />
          <Route path="/summary" element={<Summary />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
