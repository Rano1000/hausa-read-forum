import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Book as BookIcon, Download, Eye } from "lucide-react";
import { prisma } from "@/lib/prisma";

import { Book } from "@prisma/client";

import { BookFilters } from "@/components/features/BookFilters";

export const dynamic = 'force-dynamic';

interface BooksPageProps {
    searchParams: { category?: string };
}

export default async function BooksPage({ searchParams }: BooksPageProps) {
    let books: Book[] = [];
    const category = searchParams?.category;

    try {
        const where: any = { published: true };
        if (category && category !== "All Materials") {
            // Flexible matching for category (checks type or other fields could be added)
            where.OR = [
                { type: { contains: category } },
                { description: { contains: category } }
            ];
        }

        books = await prisma.book.findMany({
            where,
            orderBy: { createdAt: 'desc' }
        });
    } catch (e) {
        console.error("Failed to fetch books", e);
    }

    return (
        <main className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950">
            <Navbar />

            <div className="bg-[var(--secondary)] py-16 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/hero1.jpg')] opacity-10 bg-cover bg-center mix-blend-multiply"></div>
                <div className="container relative z-10 text-center max-w-2xl mx-auto">
                    <h1 className="text-4xl font-bold mb-4">Books & Digital Resources</h1>
                    <p className="text-green-50 text-lg">
                        Access a vast archive of manuscripts, academic journals, and historical texts. Read online or download PDF copies.
                    </p>
                </div>
            </div>

            <div className="container py-16">
                <BookFilters />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {books.length === 0 ? (
                        <div className="col-span-full text-center py-12 text-slate-500">
                            No resources found. Check back later or access the Admin Dashboard to upload content.
                        </div>
                    ) : (
                        books.map((book) => (
                            <Card key={book.id} className="flex flex-col hover:shadow-lg transition-all border border-slate-200/60 dark:border-slate-800">
                                <div className="relative h-64 w-full bg-slate-100 p-6 flex items-center justify-center">
                                    {/* Book Cover Mockup */}
                                    <div className="relative w-32 h-44 shadow-2xl skew-x-1 hover:skew-x-0 transition-transform duration-300">
                                        <Image
                                            src={book.coverImage || '/images/hero3.jpg'}
                                            alt={book.title}
                                            fill
                                            className="object-cover rounded-sm"
                                        />
                                        <div className="absolute inset-0 bg-black/10 rounded-sm"></div>
                                    </div>
                                    <div className="absolute top-4 right-4 bg-white/50 backdrop-blur p-1.5 rounded-full text-[var(--primary)]">
                                        <BookIcon className="w-4 h-4" />
                                    </div>
                                </div>

                                <div className="p-5 flex flex-col flex-grow">
                                    <div className="text-xs font-semibold text-[var(--accent)] mb-1 uppercase tracking-wider">{book.type}</div>
                                    <h3 className="font-bold text-slate-900 mb-1 leading-tight dark:text-white line-clamp-2">{book.title}</h3>
                                    <p className="text-xs text-slate-500 mb-3">{book.author}</p>
                                    <p className="text-sm text-slate-600 mb-4 line-clamp-3 leading-relaxed flex-grow dark:text-slate-400">
                                        {book.description}
                                    </p>

                                    <div className="grid grid-cols-2 gap-3 mt-auto pt-4 border-t border-slate-100">
                                        <a href={book.fileUrl} target="_blank" rel="noopener noreferrer" className="w-full btn border border-current bg-transparent hover:bg-black/5 text-sm px-3 py-1.5 gap-1 text-xs">
                                            <Eye className="w-3 h-3" /> Read
                                        </a>
                                        <a href={book.fileUrl} download className="w-full btn btn-primary text-sm px-3 py-1.5 gap-1 text-xs">
                                            <Download className="w-3 h-3" /> PDF
                                        </a>
                                    </div>
                                </div>
                            </Card>
                        )))}
                </div>
            </div>

            <Footer />
        </main>
    );
}
