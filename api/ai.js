import 'dotenv/config';

const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent";
const SYSTEM_INSTRUCTION = `You are BSAI, a premium AI assistant. Keep the full conversation context intact and do not reset between turns. If the user asks a simple, conversational, or direct question, reply with a concise and short answer. If the user asks for a translation, email, summary, deep analysis, coding help, social content, or image generation instructions, provide a comprehensive, full-length detailed answer. Treat colloquial expressions like 'ww ko ni' as conversational Nepalese and respond naturally in the same context without mixing up previous messages. Do not truncate text prematurely.`;

function cleanText(text) {
    if (!text) return "";
    return text.replace(/^```(?:\w+)?\s*/i, "").replace(/\s*```$/i, "").trim();
}

function buildPrompt(task, message, body) {
    const normalizedTask = task || "chat";
    const sourceLanguage = body?.sourceLanguage || body?.from || "English";
    const targetLanguage = body?.targetLanguage || body?.language || "English";
    const platform = body?.platform || "social media";

    switch (normalizedTask) {
        case "image":
            return `Create a polished, premium SVG illustration concept for this prompt: ${message}. Return only valid SVG markup with a clean modern visual style, no explanation, no markdown.`;
        case "translate":
            return `Translate the following text from ${sourceLanguage} into ${targetLanguage}. Preserve the tone, intent, and nuance. Return only the translated text.\n\nText:\n${message}`;
        case "code":
            return `You are a senior coding tutor and homework helper. Help with this request:\n\n${message}\n\nProvide a clear explanation, practical steps, and a polished code example when helpful.`;
        case "social":
            return `Write a premium ${platform} caption and short script for this idea:\n\n${message}\n\nMake it engaging, concise, and ready to use.`;
        default:
            return message;
    }
}

function normalizeHistoryRole(role) {
    const normalizedRole = String(role || "").toLowerCase();

    if (normalizedRole === "assistant" || normalizedRole === "ai" || normalizedRole === "model") {
        return "model";
    }

    if (normalizedRole === "system") {
        return "system";
    }

    return "user";
}

function buildPayload(task, message, body, history = []) {
    if (task === "chat") {
        const contents = Array.isArray(history) && history.length > 0
            ? history
                .map((item) => {
                    const text = typeof item?.text === "string"
                        ? item.text
                        : typeof item?.content === "string"
                            ? item.content
                            : "";

                    return {
                        role: normalizeHistoryRole(item?.role),
                        parts: [{ text }],
                    };
                })
                .filter((entry) => entry.parts[0]?.text?.trim())
            : [];

        return {
            contents: [
                ...contents,
                {
                    role: "user",
                    parts: [{ text: message }],
                },
            ],
            systemInstruction: {
                parts: [{ text: SYSTEM_INSTRUCTION }],
            },
            generationConfig: {
                temperature: 0.7,
                maxOutputTokens: 4096,
            },
        };
    }

    return {
        contents: [
            {
                role: "user",
                parts: [{ text: buildPrompt(task, message, body) }],
            },
        ],
        systemInstruction: {
            parts: [{ text: SYSTEM_INSTRUCTION }],
        },
        generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 4096,
        },
    };
}

export default async function handler(req, res) {
    if (req.method !== "POST") {
        res.setHeader("Allow", "POST");
        return res.status(405).json({ error: "Method not allowed" });
    }

    const task = req.body?.task || req.body?.mode || req.body?.type || "chat";
    const incomingMessage = typeof req.body?.message === "string"
        ? req.body.message
        : typeof req.body?.prompt === "string"
            ? req.body.prompt
            : "";

    if (!incomingMessage.trim()) {
        return res.status(400).json({ error: "Invalid request: 'message' is required" });
    }

    if (incomingMessage.length > 12000) {
        return res.status(413).json({ error: "Message too large" });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        console.warn("GEMINI_API_KEY not set");
        if (process.env.NODE_ENV !== "production") {
            return res.status(200).json({ reply: "This is a local mock reply because GEMINI_API_KEY is not set. Set the key to enable real AI responses." });
        }
        return res.status(500).json({ error: "Server not configured with Gemini API key" });
    }

    const history = Array.isArray(req.body?.history) ? req.body.history : [];

    try {
        if (task === "image") {
            const prompt = encodeURIComponent(incomingMessage.trim());
            const imageUrl = `https://pollinations.ai/${prompt}?width=1024&height=1024&nologo=true&private=true`;
            return res.status(200).json({ reply: "Image URL generated successfully.", task, image: imageUrl });
        }

        const resp = await fetch(`${GEMINI_API_URL}?key=${encodeURIComponent(apiKey)}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(buildPayload(task, incomingMessage, req.body, history)),
        });

        const data = await resp.json().catch(() => null);
        if (!resp.ok) {
            console.error("Gemini API error:", data || resp.status);
            const err = data?.error?.message || `Gemini request failed with status ${resp.status}`;
            return res.status(502).json({ error: err });
        }

        const reply = data?.candidates?.[0]?.content?.parts
            ?.map((part) => part.text)
            .filter(Boolean)
            .join("") || null;

        if (!reply) {
            console.error("Unexpected Gemini response:", data);
            return res.status(502).json({ error: "AI returned no content" });
        }

        const cleanedReply = cleanText(reply);
        return res.status(200).json({ reply: cleanedReply, task });
    } catch (err) {
        console.error("AI handler exception:", err);
        return res.status(500).json({ error: err?.message || "AI request failed" });
    }
}
