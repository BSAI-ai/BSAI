"use client";

import { useEffect, useMemo, useRef, useState, type KeyboardEvent, type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Copy, MessageCircleMore, RefreshCcw, SendHorizonal, Sparkles, Zap } from 'lucide-react';
import { Footer } from '@/app/components/layout/footer';
import { Navbar } from '@/app/components/layout/navbar';
import { AuthGuard } from '@/app/components/auth/AuthGuard';
import { useAuth } from '@/app/components/auth/AuthContext';

type ChatMessage = {
    id: number;
    role: 'assistant' | 'user';
    content: string;
};

const starterMessages: ChatMessage[] = [
    { id: 1, role: 'assistant', content: 'Hello! I’m BSAI. How can I help you today?' },
    { id: 2, role: 'user', content: 'Help me draft a polished launch plan for a new AI product.' },
    { id: 3, role: 'assistant', content: 'Absolutely. I can help structure the rollout, define the audience, and outline key milestones.' },
];

const suggestions = ['Summarize this article', 'Draft a product launch plan', 'Explain this concept simply'];

const renderInlineCode = (text: string) => {
    return text.split(/(`[^`]+`)/g).map((segment, index) => {
        if (!segment) return null;
        if (segment.startsWith('`') && segment.endsWith('`')) {
            return (
                <code key={index} className="rounded bg-slate-800 px-1 py-0.5 text-[0.85em] text-emerald-300">
                    {segment.slice(1, -1)}
                </code>
            );
        }
        return <span key={index}>{segment}</span>;
    });
};

const parseMarkdown = (text: string) => {
    const lines = text.split('\n');
    const elements: ReactNode[] = [];
    let codeLines: string[] = [];
    let listItems: string[] = [];
    let blockIndex = 0;

    const flushCode = () => {
        if (!codeLines.length) return;
        elements.push(
            <pre key={`code-${blockIndex++}`} className="my-3 overflow-x-auto rounded-2xl bg-slate-900/90 p-3 text-xs text-slate-200">
                <code>{codeLines.join('\n')}</code>
            </pre>,
        );
        codeLines = [];
    };

    const flushList = () => {
        if (!listItems.length) return;
        elements.push(
            <ul key={`list-${blockIndex++}`} className="mt-2 list-disc space-y-2 pl-5 text-slate-300">
                {listItems.map((item, idx) => (
                    <li key={idx}>{renderInlineCode(item)}</li>
                ))}
            </ul>,
        );
        listItems = [];
    };

    for (const line of lines) {
        if (line.startsWith('```')) {
            if (codeLines.length) {
                flushCode();
            } else {
                codeLines = [];
            }
            continue;
        }

        if (codeLines.length || line.startsWith('```')) {
            codeLines.push(line);
            continue;
        }

        if (line.startsWith('- ')) {
            listItems.push(line.slice(2));
            continue;
        }

        flushList();

        if (line.startsWith('# ')) {
            elements.push(
                <h3 key={`h1-${blockIndex++}`} className="mt-4 text-base font-semibold text-white">
                    {renderInlineCode(line.slice(2))}
                </h3>,
            );
            continue;
        }

        if (line.startsWith('## ')) {
            elements.push(
                <h4 key={`h2-${blockIndex++}`} className="mt-4 text-sm font-semibold uppercase tracking-[0.15em] text-cyan-300">
                    {renderInlineCode(line.slice(3))}
                </h4>,
            );
            continue;
        }

        if (line.startsWith('> ')) {
            elements.push(
                <blockquote key={`quote-${blockIndex++}`} className="mt-4 rounded-3xl border-l-2 border-cyan-400/40 bg-slate-900/80 px-4 py-3 text-sm text-slate-300">
                    {renderInlineCode(line.slice(2))}
                </blockquote>,
            );
            continue;
        }

        if (!line.trim()) {
            elements.push(<div key={`spacer-${blockIndex++}`} className="h-3" />);
            continue;
        }

        elements.push(
            <p key={`p-${blockIndex++}`} className="mt-2 text-sm leading-7 text-slate-300">
                {renderInlineCode(line)}
            </p>,
        );
    }

    flushList();
    flushCode();
    return elements;
};

function ChatPanel() {
    const [messages, setMessages] = useState<ChatMessage[]>(starterMessages);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [error, setError] = useState('');
    const [copyStatus, setCopyStatus] = useState('Copy');
    const { canChat, hasExceededLimit, usageCount, usageLimit, incrementUsage } = useAuth();
    const endRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isTyping]);

    const conversationText = useMemo(
        () => messages.map((message) => `${message.role === 'user' ? 'You' : 'BSAI'}: ${message.content}`).join('\n\n'),
        [messages],
    );

    const handleSend = async () => {
        const trimmedInput = input.trim();
        if (!trimmedInput || isTyping) return;

        const userMessage: ChatMessage = { id: Date.now(), role: 'user', content: trimmedInput };
        setMessages((prev) => [...prev, userMessage]);
        setInput('');
        if (!canChat) {
            setError('Your free usage limit has been reached. Upgrade your plan or contact support to continue.');
            setIsTyping(false);
            return;
        }

        setError('');
        setIsTyping(true);

        try {
            const response = await fetch('/api/ai', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ task: 'chat', message: trimmedInput, history: [...messages, userMessage] }),
            });

            const data = await response.json().catch(() => ({}));
            if (!response.ok) {
                const errorMessage = data?.error || `Request failed with status ${response.status}`;
                setError(errorMessage);
                setMessages((prev) => [
                    ...prev,
                    {
                        id: Date.now() + 1,
                        role: 'assistant',
                        content: data?.reply || 'Unable to reach the AI service.',
                    },
                ]);
            } else {
                incrementUsage();
                setMessages((prev) => [
                    ...prev,
                    {
                        id: Date.now() + 1,
                        role: 'assistant',
                        content: data.reply || 'Sorry, the AI did not return a response.',
                    },
                ]);
            }
        } catch (err) {
            const message = err instanceof Error ? err.message : 'Network error';
            setError(message);
            setMessages((prev) => [
                ...prev,
                {
                    id: Date.now() + 1,
                    role: 'assistant',
                    content: 'Unable to reach the AI service. Please try again later.',
                },
            ]);
        } finally {
            setIsTyping(false);
        }
    };

    const handleCopyConversation = async () => {
        try {
            await navigator.clipboard.writeText(conversationText);
            setCopyStatus('Copied!');
            window.setTimeout(() => setCopyStatus('Copy'), 2000);
        } catch {
            setCopyStatus('Unable to copy');
        }
    };

    const handleRegenerate = () => {
        if (isTyping) return;

        const lastAssistantIndex = [...messages].reverse().findIndex((message) => message.role === 'assistant');
        if (lastAssistantIndex === -1) return;

        const index = messages.length - 1 - lastAssistantIndex;
        const lastUserMessage = [...messages].reverse().find((message) => message.role === 'user')?.content ?? 'your request';

        setIsTyping(true);
        setTimeout(() => {
            setMessages((prev) =>
                prev.map((message, idx) =>
                    idx === index
                        ? {
                            ...message,
                            content: `Here is an updated response based on: “${lastUserMessage}”.\n\n- Refined structure for clarity\n- More premium tone and actionable insight\n- Designed for a high-impact rollout`,
                        }
                        : message,
                ),
            );
            setIsTyping(false);
        }, 900);
    };

    const handleSuggestion = (text: string) => {
        setInput(text);
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            handleSend();
        }
    };

    return (
        <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.16),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(16,185,129,0.14),_transparent_20%),linear-gradient(135deg,_#020617,_#0f172a)] text-slate-100">
            <Navbar />
            <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 sm:px-6 lg:px-8 lg:flex-row lg:p-10">
                <aside className="w-full rounded-[24px] border border-white/10 bg-slate-950/70 p-5 lg:w-80">
                    <div className="mb-6 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                            <MessageCircleMore size={18} />
                        </div>
                        <div>
                            <p className="text-lg font-semibold text-white">BSAI Chat</p>
                            <p className="text-sm text-slate-400">Always ready to help</p>
                        </div>
                    </div>
                    <p className="mb-4 text-sm text-slate-400">Quick prompts to explore premium answers.</p>
                    <div className="space-y-3">
                        {suggestions.map((item) => (
                            <button
                                key={item}
                                type="button"
                                onClick={() => handleSuggestion(item)}
                                className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"
                            >
                                {item}
                                <Sparkles size={14} className="text-cyan-300" />
                            </button>
                        ))}
                    </div>
                </aside>

                <section className="flex min-h-[640px] flex-1 flex-col rounded-[24px] border border-white/10 bg-slate-950/70">
                    <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Premium Chat</p>
                            <h2 className="text-lg font-semibold text-white">AI Assistant</h2>
                        </div>
                        <div className="rounded-full border border-brand-emerald/20 bg-brand-emerald/10 px-3 py-1 text-sm text-brand-emerald">Online</div>
                    </div>

                    <div className="flex-1 space-y-4 overflow-y-auto px-4 py-5 sm:px-6">
                        {error && (
                            <div className="rounded-3xl border border-red-700/60 bg-red-950/60 p-4 text-sm text-red-200">
                                <strong>Error:</strong> {error}
                            </div>
                        )}
                        {hasExceededLimit && (
                            <div className="rounded-3xl border border-amber-500/60 bg-amber-950/60 p-4 text-sm text-amber-200">
                                You have reached your free usage limit for this session: {usageCount}/{usageLimit} messages.
                                <div className="mt-2 text-slate-300">Upgrade to premium or login with a fresh account to continue using chat.</div>
                            </div>
                        )}
                        {messages.map((message) => (
                            <motion.div
                                key={message.id}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`max-w-[85%] rounded-[20px] px-4 py-3 text-sm leading-7 shadow-sm ${message.role === 'user'
                                        ? 'bg-brand-blue text-white'
                                        : 'border border-white/10 bg-slate-900/80 text-slate-200'
                                        }`}
                                >
                                    <div className="mb-2 text-[11px] uppercase tracking-[0.3em] opacity-70">
                                        {message.role === 'user' ? 'You' : 'BSAI'}
                                    </div>
                                    <div>{parseMarkdown(message.content)}</div>
                                </div>
                            </motion.div>
                        ))}

                        {isTyping && (
                            <div className="flex justify-start">
                                <div className="rounded-[20px] border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-slate-300">
                                    <div className="flex items-center gap-2">
                                        <Zap size={14} className="text-cyan-300" />
                                        <span className="animate-pulse">BSAI is typing...</span>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={endRef} />
                    </div>

                    <div className="border-t border-white/10 p-4 sm:p-5">
                        <div className="rounded-[20px] border border-white/10 bg-slate-900/80 p-3">
                            <textarea
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleKeyDown}
                                rows={3}
                                placeholder={hasExceededLimit ? 'Usage limit reached. Upgrade or login again.' : 'Ask anything...'}
                                disabled={hasExceededLimit}
                                className="w-full resize-none bg-transparent text-sm text-slate-200 outline-none placeholder:text-slate-500 disabled:cursor-not-allowed disabled:opacity-60"
                            />
                            <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
                                <div className="text-xs uppercase tracking-[0.25em] text-slate-500">Markdown • Syntax • Copy • Regenerate</div>
                                <div className="flex items-center gap-2">
                                    <button
                                        type="button"
                                        onClick={handleCopyConversation}
                                        className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-slate-300 transition hover:bg-white/10"
                                    >
                                        <Copy size={16} />
                                        <span className="sr-only">Copy chat</span>
                                    </button>
                                    <button
                                        type="button"
                                        onClick={handleRegenerate}
                                        disabled={isTyping}
                                        className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-slate-300 transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-60"
                                    >
                                        <RefreshCcw size={16} />
                                        <span className="sr-only">Regenerate answer</span>
                                    </button>
                                    <button
                                        type="button"
                                        onClick={handleSend}
                                        disabled={isTyping || hasExceededLimit}
                                        className="rounded-full bg-brand-blue px-4 py-2 text-white transition hover:bg-brand-blue/90 disabled:cursor-not-allowed disabled:opacity-60"
                                    >
                                        <SendHorizonal size={16} />
                                    </button>
                                </div>
                                <div className="text-xs text-slate-400">{copyStatus}</div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </main>
    );
}

export default function ChatRoutePage() {
    return (
        <AuthGuard>
            <ChatPanel />
        </AuthGuard>
    );
}
