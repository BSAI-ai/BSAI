import { useState } from "react";

function Chat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();

    const trimmedInput = input.trim();
    if (!trimmedInput) {
      return;
    }

    setMessages((currentMessages) => [
      ...currentMessages,
      { sender: "You", text: trimmedInput },
      { sender: "AI", text: `AI: ${trimmedInput}` }
    ]);
    setInput("");
  }

  return (
    <section className="mx-auto max-w-3xl">
      <h1 className="text-3xl font-bold text-white">AI Chat</h1>
      <p className="mt-2 text-slate-400">Send a message and receive a simple mock AI reply.</p>

      <div className="mt-6 min-h-80 rounded-2xl border border-slate-800 bg-slate-900 p-4">
        <div className="space-y-3">
          {messages.length === 0 ? (
            <p className="text-slate-500">No messages yet. Start the conversation below.</p>
          ) : (
            messages.map((message, index) => (
              <div
                key={`${message.sender}-${index}`}
                className={`rounded-xl p-3 ${
                  message.sender === "You"
                    ? "ml-auto bg-cyan-400 text-slate-950"
                    : "mr-auto bg-slate-800 text-slate-100"
                } max-w-[85%]`}
              >
                <p className="text-xs font-bold uppercase">{message.sender}</p>
                <p className="mt-1">{message.text}</p>
              </div>
            ))
          )}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3 sm:flex-row">
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          className="min-h-12 flex-1 rounded-xl border border-slate-700 bg-slate-900 px-4 text-white outline-none focus:border-cyan-400"
          placeholder="Type your message..."
        />
        <button className="rounded-xl bg-cyan-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-cyan-300">
          Send
        </button>
      </form>
    </section>
  );
}

export default Chat;
