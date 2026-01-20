import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FileText, Download, ExternalLink } from "lucide-react";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Publications | Hausa Reading Forum",
    description: "Peer-reviewed journals, conference papers, and scholarly output on Hausa studies.",
};

export default function PublicationsPage() {
    const years = [2025, 2024, 2023];

    const publications = [
        {
            id: 1,
            year: 2025,
            title: "Socio-Political Structures of pre-Colonial Hausaland",
            journal: "Journal of West African History",
            authors: "Dr. A. B. Yusuf, Prof. K. Ahmed",
            link: "#"
        },
        {
            id: 2,
            year: 2025,
            title: "The Role of Oral Tradition in Hausa Jurisprudence",
            journal: "African Legal Studies Review",
            authors: "Barr. M. S. Dikko",
            link: "#"
        },
        {
            id: 3,
            year: 2024,
            title: "Trade Routes and Economic Integration in the Sahel",
            journal: "Economic History Quarterly",
            authors: "Dr. Fatima Suleiman",
            link: "#"
        }
    ];

    return (
        <main className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950">
            <Navbar />

            <div className="bg-white border-b border-slate-200 py-12 dark:bg-slate-900 dark:border-slate-800">
                <div className="container">
                    <h1 className="text-3xl font-bold mb-2">Academic Publications</h1>
                    <p className="text-slate-600 dark:text-slate-400">
                        Peer-reviewed journals, conference papers, and scholarly output.
                    </p>
                </div>
            </div>

            <div className="container py-12">
                <div className="max-w-4xl mx-auto space-y-8">
                    {years.map(year => (
                        <div key={year}>
                            <h2 className="text-2xl font-bold mb-6 text-[var(--primary)] border-b border-slate-200 pb-2">{year}</h2>
                            <div className="space-y-4">
                                {publications.filter(p => p.year === year).map(pub => (
                                    <Card key={pub.id} className="p-6 flex flex-col sm:flex-row gap-4 hover:border-[var(--primary)] transition-colors">
                                        <div className="bg-slate-100 p-4 rounded-lg flex items-center justify-center min-w-[60px] h-[60px] dark:bg-slate-800">
                                            <FileText className="w-6 h-6 text-slate-500" />
                                        </div>
                                        <div className="flex-grow">
                                            <h3 className="font-bold text-lg mb-1">{pub.title}</h3>
                                            <div className="text-sm text-slate-500 mb-2 italic">{pub.journal}</div>
                                            <div className="text-sm text-slate-700 dark:text-slate-300">
                                                <strong>Authors:</strong> {pub.authors}
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 sm:self-center">
                                            <Button variant="outline" size="sm" className="gap-2">
                                                <Download className="w-4 h-4" /> PDF
                                            </Button>
                                            <Button variant="ghost" size="sm">
                                                <ExternalLink className="w-4 h-4" />
                                            </Button>
                                        </div>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </main>
    );
}
