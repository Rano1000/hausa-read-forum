"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, BookOpen, Search } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Articles', href: '/articles' },
        { name: 'Books & Resources', href: '/books' },
        { name: 'Publications', href: '/publications' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 dark:bg-slate-900/80 dark:border-slate-800">
            <div className="container flex items-center justify-between h-16 sm:h-20">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="relative w-8 h-8 sm:w-10 sm:h-10 transition-transform group-hover:scale-105">
                        <Image
                            src="/images/logo.png"
                            alt="Hausa Reading Forum Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                    <span className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-[var(--primary)] transition-colors">
                        Hausa Reading Forum
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-6">
                    <div className="flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="px-3 py-2 text-sm font-medium text-slate-600 rounded-md hover:text-[var(--primary)] hover:bg-slate-50 transition-all dark:text-slate-300 dark:hover:bg-slate-800"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                    <div className="flex items-center gap-2 pl-4 border-l border-slate-200 dark:border-slate-700">
                        <ThemeToggle />
                        <Button variant="ghost" size="sm" aria-label="Search">
                            <Search className="w-5 h-5 text-slate-500 hover:text-[var(--primary)]" />
                        </Button>
                        <Link href="/books" className="btn btn-primary text-sm px-3 py-1.5 gap-2">
                            <BookOpen className="w-4 h-4" />
                            Library
                        </Link>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center gap-4">
                    <ThemeToggle />
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 text-slate-600 hover:text-slate-900 focus:outline-none dark:text-slate-300 dark:hover:text-white"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-lg dark:bg-slate-900 dark:border-slate-800">
                    <div className="container py-4 flex flex-col gap-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block px-4 py-3 text-base font-medium text-slate-600 rounded-lg hover:bg-slate-50 hover:text-[var(--primary)] dark:text-slate-300 dark:hover:bg-slate-800"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-3">
                            <Link href="/books" className="w-full btn btn-primary text-base px-6 py-3 justify-center">
                                Access Library
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};
