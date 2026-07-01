import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";

function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function linkify(text) {
  return text.replace(
    /(https?:\/\/[^\s]+)/g,
    "<a href=\"$1\" target=\"_blank\" rel=\"noreferrer\" class=\"text-cyan-300 underline decoration-cyan-500/40 hover:text-cyan-200\">$1</a>"
  );
}

function formatMessage(text) {
  if (!text) return "";
  const escaped = escapeHtml(text);
  const lines = escaped.split("\n");
  let result = "";
  let listOpen = false;

  lines.forEach((rawLine, index) => {
    const line = rawLine.trim();
    const bulletMatch = line.match(/^[-*+]\s+(.*)$/);

    if (bulletMatch) {
      if (!listOpen) {
        result += "<ul class=\"mt-3 ml-4 list-disc space-y-1 text-slate-200\">";
        listOpen = true;
      }
      result += `<li class=\"text-base leading-7\">${linkify(bulletMatch[1])}</li>`;
    } else {
      if (listOpen) {
        result += "</ul>";
        listOpen = false;
      }
      if (line === "") {
        result += "<div class=\"my-2\"></div>";
      } else {
        result += `<p class=\"mt-2 text-base leading-7 text-slate-200\">${linkify(line)}</p>`;
      }
    }

    if (index === lines.length - 1 && listOpen) {
      result += "</ul>";
    }
  });

  return result;
}

export default function Chat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [apiError, setApiError] = useState(null);
  const [loading, setLoading] = useState(false);
  const listRef = useRef(null);

  const scrollToBottom = useCallback(() => {
    if (listRef.current) {
      listRef.current.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    setApiError(null);
    const nextMessages = [...messages, { role: "user", text: trimmed }];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ task: "chat", message: trimmed, history: nextMessages }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        const errMsg = data?.error || `Request failed with status ${res.status}`;
        setApiError(errMsg);
        setMessages((prev) => [
          ...prev,
          { role: "ai", text: data?.reply || "Unable to reach the AI service." },
        ]);
      } else {
        setApiError(null);
        setMessages((prev) => [
          ...prev,
          { role: "ai", text: data.reply || "Sorry, the AI did not return a response." },
        ]);
      }
    } catch (error) {
      console.error(error);
      setApiError(error?.message || "Network error");
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
    <section className="min-h-[calc(100vh-4rem)] w-full max-w-full">
      <div className="flex flex-col gap-4 px-2 sm:px-0">
        <div className="flex flex-col gap-4 rounded-[32px] border border-white/10 bg-slate-950/90 p-5 shadow-[0_40px_120px_rgba(3,7,18,0.45)] sm:p-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">AI Chat</h1>
              <p className="mt-2 max-w-2xl text-base text-slate-400 sm:text-lg">
                Talk with BSAI in a wide, responsive chat window designed for mobile and desktop.
              </p>
            </div>
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-2xl border border-slate-800 bg-slate-900 px-4 py-2 text-sm font-semibold text-cyan-300 transition hover:border-cyan-400 hover:bg-slate-900/80"
            >
              ← Back to tools
            </Link>
          </div>

          <div className="rounded-[32px] border border-slate-800 bg-slate-900 p-4 shadow-2xl shadow-slate-950/20 sm:p-6">
            {apiError && (
              <div className="mb-4 rounded-3xl border border-red-700/60 bg-red-950/60 p-4 text-sm text-red-200">
                <strong>Error:</strong> {apiError}
              </div>
            )}

            <div
              ref={listRef}
              className="max-h-[60vh] min-h-[40vh] overflow-y-auto rounded-[28px] border border-slate-800 bg-slate-950/90 p-4 sm:p-6"
            >
              {messages.length === 0 ? (
                <p className="text-base leading-7 text-slate-500 sm:text-lg">
                  Start a conversation by typing your message below.
                </p>
              ) : (
                <div className="flex flex-col gap-4">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`rounded-[28px] border px-4 py-3 shadow-sm sm:px-5 sm:py-4 ${message.role === "user"
                        ? "ml-auto max-w-[90%] bg-slate-800 text-slate-100"
                        : "bg-slate-950 text-slate-200"
                        }`}
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300 sm:text-sm">
                        {message.role === "user" ? "You" : "BSAI"}
                      </p>
                      <div
                        className="mt-3 text-base leading-8 text-slate-200 sm:text-lg"
                        dangerouslySetInnerHTML={{ __html: formatMessage(message.text) }}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-4 rounded-[26px] border border-slate-800 bg-slate-950 p-4 shadow-inner shadow-slate-950/10 sm:p-5">
              <textarea
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your message..."
                className="min-h-[140px] w-full resize-none rounded-3xl border border-slate-800 bg-slate-900 px-4 py-4 text-base text-slate-100 outline-none placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 sm:text-lg"
              />
              <button
                type="button"
                onClick={sendMessage}
                disabled={loading}
                className="mt-4 w-full rounded-3xl bg-cyan-500 px-5 py-4 text-base font-semibold text-slate-950 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-60 sm:text-lg"
              >
                {loading ? "Thinking..." : "Send"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
