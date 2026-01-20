import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/Card";
import { User, Calendar } from "lucide-react";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Academic Articles | Hausa Reading Forum",
    description: "Scholarly works and historical analyses on Hausa culture, history, and language.",
};

export default function ArticlesPage() {
    const articles = [
        {
            id: 1,
            title: "The Origins of the Hausa Kingdoms",
            excerpt: "Tracing the historical lineage of the Bayajidda legend and the formation of the Bakwai states.",
            author: "Prof. Kabir Ahmed",
            date: "Oct 12, 2025",
            category: "History",
            image: "/images/hero1.jpg"
        },
        {
            id: 2,
            title: "Traditional Medicine in Modern Hausa Society",
            excerpt: "An exploration of how herbal remedies coexist with contemporary healthcare systems.",
            author: "Dr. Fatima Suleiman",
            date: "Nov 05, 2025",
            category: "Culture",
            image: "/images/hero2.jpg"
        },
        {
            id: 3,
            title: "Linguistic Evolution of the Hausa Language",
            excerpt: "How trade and Islamic scholarship influenced the vocabulary and script of Hausa.",
            author: "Malam Ibrahim Yaro",
            date: "Sep 28, 2025",
            category: "Language",
            image: "/images/hero3.jpg"
        },
        // Duplicate for grid effect
        {
            id: 4,
            title: "Architecture of Ancient Kano",
            excerpt: "A study of the mud-brick walls and city planning of pre-colonial Kano.",
            author: "Arc. Musa Bello",
            date: "Dec 10, 2025",
            category: "Architecture",
            image: "/images/hero1.jpg"
        }
    ];

    return (
        <main className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950">
            <Navbar />

            <div className="bg-[var(--primary)] py-16 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/hero3.jpg')] opacity-20 bg-cover bg-center"></div>
                <div className="container relative z-10">
                    <h1 className="text-4xl font-bold mb-4">Academic Articles</h1>
                    <p className="text-teal-100 max-w-2xl">
                        Explore scholarly works, historical analyses, and cultural insights from leading experts in Hausa studies.
                    </p>
                </div>
            </div>

            <div className="container py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((article) => (
                        <Link key={article.id} href={`/articles/${article.id}`}>
                            <Card className="h-full hover:shadow-xl transition-all group overflow-hidden border-none shadow-md">
                                <div className="relative h-56 w-full overflow-hidden">
                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-[var(--secondary)] shadow-sm">
                                            {article.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                                        <span className="flex items-center"><User className="w-3 h-3 mr-1" /> {article.author}</span>
                                        <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" /> {article.date}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[var(--primary)] transition-colors dark:text-white">
                                        {article.title}
                                    </h3>
                                    <p className="text-slate-600 text-sm leading-relaxed mb-4 dark:text-slate-400">
                                        {article.excerpt}
                                    </p>
                                    <span className="text-[var(--primary)] font-medium text-sm inline-flex items-center group-hover:underline">
                                        Read Full Article
                                    </span>
                                </div>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>

            <Footer />
        </main>
    );
}
