import Link from 'next/link';

const links = [
    { label: 'About', href: '/about' },
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
    { label: 'Contact', href: '/contact' },
    { label: 'GitHub', href: 'https://github.com' },
];

export function Footer() {
    return (
        <footer className="border-t border-white/10 px-4 py-10 sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
                <p>© 2026 BSAI. Built for thoughtful AI experiences.</p>
                <div className="flex flex-wrap gap-4">
                    {links.map((link) => (
                        <Link key={link.label} href={link.href} className="transition hover:text-white">
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    );
}
