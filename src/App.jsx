import { useState } from "react";

export default function App() {
const [input, setInput] = useState("");
const [messages, setMessages] = useState([]);
const [loading, setLoading] = useState(false);

const sendMessage = async () => {
if (!input.trim()) return;

const userMsg = input;

setMessages((prev) => [...prev, { role: "user", text: userMsg }]);
setInput("");
setLoading(true);

const res = await fetch("/api/ai", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({ message: userMsg }),
});

const data = await res.json();

setMessages((prev) => [
...prev,
{ role: "ai", text: data.reply },
]);

setLoading(false);
};

return (
<div style={{ padding: 20, fontFamily: "Arial" }}>
<h2>🤖 BSAI AI Chat</h2>

{/* CHAT BOX */}
<div
style={{
border: "1px solid #ccc",
height: 400,
overflowY: "auto",
padding: 10,
marginBottom: 10,
}}
>
{messages.map((m, i) => (
<div key={i} style={{ margin: "10px 0" }}>
<b>{m.role === "user" ? "You" : "AI"}:</b> {m.text}
</div>
))}
</div>

{/* INPUT */}
<input
value={input}
onChange={(e) => setInput(e.target.value)}
placeholder="Type message..."
style={{ width: "70%", padding: 10 }}
/>

<button onClick={sendMessage} style={{ marginLeft: 10, padding: 10 }}>
{loading ? "Thinking..." : "Send"}
</button>
</div>
);
}
