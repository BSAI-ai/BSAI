import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import Chat from "./Chat.jsx";
import ImageGenerator from "./ImageGenerator.jsx";
import Translator from "./Translator.jsx";
import CodeHelper from "./CodeHelper.jsx";
import SocialMedia from "./SocialMedia.jsx";
import Resume from "./Resume.jsx";
import Email from "./Email.jsx";
import Summary from "./Summary.jsx";

export default function App() {
    return (
        <Router>
            <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.14),_transparent_35%),linear-gradient(135deg,_#020617_0%,_#0f172a_100%)] px-4 py-8 text-slate-100 sm:px-6 lg:px-8">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/chat" element={<Chat />} />
                    <Route path="/image" element={<ImageGenerator />} />
                    <Route path="/translator" element={<Translator />} />
                    <Route path="/code" element={<CodeHelper />} />
                    <Route path="/social" element={<SocialMedia />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/email" element={<Email />} />
                    <Route path="/summary" element={<Summary />} />
                    <Route path="*" element={<Home />} />
                </Routes>
            </div>
        </Router>
    );
}
