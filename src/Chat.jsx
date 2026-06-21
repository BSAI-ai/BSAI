import { useState, useEffect, useRef } from "react";

export default function Chat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const listRef = useRef(null);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    setMessages((prev) => [...prev, { role: "user", text: trimmed }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed }),
      });

      if (!res.ok) {
        throw new Error(`Request failed with status ${res.status}`);
      }

      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "ai", text: data.reply || "Sorry, the AI did not return a response." },
      ]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: "Unable to reach the AI service. Please try again later.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  };

  return (
    <section className="grid gap-6">
      <div>
        <h1 className="text-3xl font-bold text-white">AI Chat</h1>
        <p className="mt-2 text-slate-400">Ask questions and get AI-powered replies in this chat interface.</p>
      </div>

      <div className="rounded-3xl border border-slate-800 bg-slate-950 p-4 shadow-xl shadow-slate-950/20">
        <div
          ref={listRef}
          className="mb-4 max-h-[520px] space-y-3 overflow-y-auto rounded-3xl border border-slate-800 bg-slate-900 p-4"
        >
          {messages.length === 0 ? (
            <p className="text-sm leading-6 text-slate-500">
              Start a conversation by typing a message below.
            </p>
          ) : (
            messages.map((message, index) => (
              <div
                key={index}
                className={`rounded-2xl p-4 ${
                  message.role === "user"
                    ? "bg-slate-800 text-slate-100 self-end"
                    : "bg-slate-950 text-slate-200"
                }`}
              >
                <p className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
                  {message.role === "user" ? "You" : "AI"}
                </p>
                <p className="mt-2 whitespace-pre-wrap leading-7">{message.text}</p>
              </div>
            ))
          )}
        </div>

        <div className="flex flex-col gap-3 md:flex-row">
          <textarea
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message..."
            className="min-h-[120px] flex-1 resize-y rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3 text-slate-100 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
          />
          <button
            type="button"
            onClick={sendMessage}
            disabled={loading}
            className="inline-flex h-14 items-center justify-center rounded-2xl bg-cyan-500 px-6 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Thinking..." : "Send"}
          </button>
        </div>
      </div>
    </section>
  );
}
