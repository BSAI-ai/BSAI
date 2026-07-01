"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

type AuthUser = {
    email: string;
    plan: 'free' | 'premium';
    usageCount: number;
    usageLimit: number;
};

type StoredUser = AuthUser & {
    passwordHash: string;
};

type AuthContextValue = {
    user: AuthUser | null;
    authReady: boolean;
    errorMessage: string;
    login: (email: string, password: string) => Promise<boolean>;
    signup: (email: string, password: string) => Promise<boolean>;
    logout: () => void;
    incrementUsage: (amount?: number) => void;
    canChat: boolean;
    hasExceededLimit: boolean;
    usageCount: number;
    usageLimit: number;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

const USERS_KEY = 'bsai_users';
const SESSION_KEY = 'bsai_session';

const toHex = (buffer: ArrayBuffer): string => {
    return Array.from(new Uint8Array(buffer)).map((b) => b.toString(16).padStart(2, '0')).join('');
};

const hashPassword = async (password: string) => {
    const data = new TextEncoder().encode(password);
    const hash = await crypto.subtle.digest('SHA-256', data);
    return toHex(hash);
};

const loadUsers = (): Record<string, StoredUser> => {
    if (typeof window === 'undefined') return {};
    try {
        const raw = localStorage.getItem(USERS_KEY);
        return raw ? JSON.parse(raw) as Record<string, StoredUser> : {};
    } catch {
        return {};
    }
};

const saveUsers = (users: Record<string, StoredUser>) => {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

const loadSession = (): AuthUser | null => {
    if (typeof window === 'undefined') return null;
    try {
        const raw = localStorage.getItem(SESSION_KEY);
        return raw ? JSON.parse(raw) as AuthUser : null;
    } catch {
        return null;
    }
};

const saveSession = (session: AuthUser | null) => {
    if (session === null) {
        localStorage.removeItem(SESSION_KEY);
    } else {
        localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    }
};

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<AuthUser | null>(null);
    const [authReady, setAuthReady] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const session = loadSession();
        if (session) {
            setUser(session);
        }
        setAuthReady(true);
    }, []);

    const updateUserRecord = (updated: AuthUser) => {
        const users = loadUsers();
        const rawSession = loadSession();
        if (!rawSession?.email) return;
        const existing = users[rawSession.email.toLowerCase()];
        if (!existing) return;
        users[rawSession.email.toLowerCase()] = {
            ...existing,
            plan: updated.plan,
            usageCount: updated.usageCount,
            usageLimit: updated.usageLimit,
        };
        saveUsers(users);
        saveSession(updated);
        setUser(updated);
    };

    const login = async (email: string, password: string) => {
        setErrorMessage('');
        if (typeof window === 'undefined') return false;
        const normalized = email.trim().toLowerCase();
        const users = loadUsers();
        const existing = users[normalized];
        if (!existing) {
            setErrorMessage('No account found for this email.');
            return false;
        }

        const passwordHash = await hashPassword(password);
        if (passwordHash !== existing.passwordHash) {
            setErrorMessage('Email or password is incorrect.');
            return false;
        }

        const authUser: AuthUser = {
            email: existing.email,
            plan: existing.plan,
            usageCount: existing.usageCount,
            usageLimit: existing.usageLimit,
        };

        saveSession(authUser);
        setUser(authUser);
        return true;
    };

    const signup = async (email: string, password: string) => {
        setErrorMessage('');
        if (typeof window === 'undefined') return false;
        const normalized = email.trim().toLowerCase();
        const users = loadUsers();
        if (users[normalized]) {
            setErrorMessage('An account already exists for this email.');
            return false;
        }

        const passwordHash = await hashPassword(password);
        const newUser: StoredUser = {
            email: normalized,
            passwordHash,
            plan: 'free',
            usageCount: 0,
            usageLimit: 12,
        };

        users[normalized] = newUser;
        saveUsers(users);

        const authUser: AuthUser = {
            email: normalized,
            plan: newUser.plan,
            usageCount: newUser.usageCount,
            usageLimit: newUser.usageLimit,
        };
        saveSession(authUser);
        setUser(authUser);
        return true;
    };

    const logout = () => {
        setUser(null);
        saveSession(null);
    };

    const incrementUsage = (amount = 1) => {
        if (!user) return;
        const updated = {
            ...user,
            usageCount: user.usageCount + amount,
        };
        updateUserRecord(updated);
    };

    const canChat = Boolean(user && user.usageCount < user.usageLimit);
    const hasExceededLimit = Boolean(user && user.usageCount >= user.usageLimit);

    const value = useMemo(
        () => ({
            user,
            authReady,
            errorMessage,
            login,
            signup,
            logout,
            incrementUsage,
            canChat,
            hasExceededLimit,
            usageCount: user?.usageCount ?? 0,
            usageLimit: user?.usageLimit ?? 0,
        }),
        [user, authReady, errorMessage, canChat, hasExceededLimit],
    );

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used inside AuthProvider');
    }
    return context;
}
