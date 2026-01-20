import Link from 'next/link';
import Image from 'next/image';

export const Footer = () => {
    return (
        <footer className="bg-white border-t border-slate-100 pt-16 pb-8 dark:bg-slate-900 dark:border-slate-800">
            <div className="container grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                {/* Brand Column */}
                <div className="col-span-1 md:col-span-1">
                    <div className="flex items-center gap-2 mb-6">
                        <div className="relative w-8 h-8">
                            <Image src="/images/logo.png" alt="Logo" fill className="object-contain" />
                        </div>
                        <span className="font-bold text-lg">Hausa Reading Forum</span>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6 dark:text-slate-400">
                        A digital academic library dedicated to preserving and sharing the authentic truth about Hausa culture, language, and history.
                    </p>
                    <div className="text-sm font-semibold text-[var(--primary)]">
                        Preserving Our Heritage.
                    </div>
                </div>

                {/* Links Column */}
                <div>
                    <h3 className="font-semibold text-slate-900 mb-4 dark:text-white">Discover</h3>
                    <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                        <li><Link href="/articles" className="hover:text-[var(--primary)] transition-colors">Articles</Link></li>
                        <li><Link href="/books" className="hover:text-[var(--primary)] transition-colors">Books & Resources</Link></li>
                        <li><Link href="/publications" className="hover:text-[var(--primary)] transition-colors">Academic Publications</Link></li>
                        <li><Link href="/about" className="hover:text-[var(--primary)] transition-colors">Mission & Vision</Link></li>
                    </ul>
                </div>

                {/* Categories Column */}
                <div>
                    <h3 className="font-semibold text-slate-900 mb-4 dark:text-white">Categories</h3>
                    <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                        <li><Link href="/search?q=history" className="hover:text-[var(--primary)] transition-colors">History & Origins</Link></li>
                        <li><Link href="/search?q=culture" className="hover:text-[var(--primary)] transition-colors">Culture & Society</Link></li>
                        <li><Link href="/search?q=language" className="hover:text-[var(--primary)] transition-colors">Language & Literature</Link></li>
                        <li><Link href="/search?q=islamic" className="hover:text-[var(--primary)] transition-colors">Islamic Heritage</Link></li>
                    </ul>
                </div>

                {/* Contact Column */}
                <div>
                    <h3 className="font-semibold text-slate-900 mb-4 dark:text-white">Contact</h3>
                    <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                        <li>Email: <a href="mailto:info@hausamreadingforum.com" className="hover:text-[var(--primary)]">info@hausareadforum.com</a></li>
                        <li>Follow our updates for the latest research and publications.</li>
                    </ul>
                </div>
            </div>

            <div className="container pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 dark:border-slate-800">
                <p>&copy; {new Date().getFullYear()} Hausa Reading Forum. All rights reserved.</p>
                <div className="flex gap-4 mt-4 md:mt-0">
                    <Link href="/privacy" className="hover:text-slate-600">Privacy Policy</Link>
                    <Link href="/terms" className="hover:text-slate-600">Terms of Use</Link>
                </div>
            </div>
        </footer>
    );
};
