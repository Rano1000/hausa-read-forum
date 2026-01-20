import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, Calendar, Share2, User } from "lucide-react";

export default async function ArticleReader({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    // Mock Data Fetching based on ID
    const article = {
        title: "The Origins of the Hausa Kingdoms",
        subtitle: "Tracing the historical lineage of the Bayajidda legend and the formation of the Bakwai states.",
        author: "Prof. Kabir Ahmed",
        date: "Oct 12, 2025",
        category: "History",
        image: "/images/hero1.jpg",
        content: `
       <p class="mb-6 drop-cap">The history of the Hausa people is deeply intertwined with the legends of Bayajidda, a figure who, according to tradition, arrived in Daura from Baghdad. This foundational myth serves not merely as a story of origin but as a complex sociological framework that explains the relationships between the Hausa Bakwai (the seven legitimate states) and the Banza Bakwai (the seven illegitimate states).</p>
       
       <h2 class="text-2xl font-bold mb-4 mt-8 text-slate-800 dark:text-slate-200">The Seven States</h2>
       <p class="mb-6">The Hausa Bakwai historically includes Daura, Kano, Katsina, Zaria (Zazzau), Gobir, Rano, and Biram. Each of these city-states developed specialized roles: Kano as the center of trade and industry, Katsina as a hub of scholarship, and Zazzau as the supplier of slaves and grain. This division of labor allowed the Hausaland to flourish as a powerful economic zone in the Sahel.</p>
       
       <h2 class="text-2xl font-bold mb-4 mt-8 text-slate-800 dark:text-slate-200">Economic Integration and Trade</h2>
       <p class="mb-6">Long before colonial intervention, the Hausa states were integrated into the trans-Saharan trade networks. Kano's cloth and leather goods were renowned as far as North Africa. The sophisticated walled cities (birni) protected the inhabitants and the markets, fostering a stable environment for commerce and Islamic scholarship to thrive.</p>
       
       <blockquote class="border-l-4 border-[var(--primary)] pl-6 italic text-xl text-slate-600 my-8 bg-slate-50 py-4 rounded-r-lg">
         "The walls of Kano were not just fortifications; they were a statement of the permanence and power of Hausa civilization."
       </blockquote>
       
       <p class="mb-6">Today, understanding these origins is crucial for appreciating the resilience and depth of Hausa culture. As we modernize, we must look back to these foundational structures—both physical and societal—to guide our path forward.</p>
     `
    };

    return (
        <main className="min-h-screen flex flex-col bg-white dark:bg-slate-950">
            <Navbar />

            <article className="pb-16">
                {/* Article Header */}
                <div className="bg-slate-50 dark:bg-slate-900 border-b border-slate-100 py-12">
                    <div className="container max-w-4xl">
                        <Link href="/articles">
                            <Button variant="ghost" size="sm" className="mb-6 text-slate-500 hover:text-[var(--primary)] pl-0">
                                <ArrowLeft className="w-4 h-4 mr-1" /> Back to Articles
                            </Button>
                        </Link>

                        <div className="flex items-center gap-2 mb-4">
                            <span className="px-3 py-1 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] text-sm font-bold">
                                {article.category}
                            </span>
                            <span className="text-slate-400">•</span>
                            <span className="text-slate-500 text-sm flex items-center">
                                <Calendar className="w-3 h-3 mr-1" /> {article.date}
                            </span>
                        </div>

                        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight dark:text-white">
                            {article.title}
                        </h1>
                        <p className="text-xl text-slate-500 leading-relaxed font-light">
                            {article.subtitle}
                        </p>

                        <div className="flex items-center justify-between mt-8 pt-8 border-t border-slate-200">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center">
                                    <User className="w-5 h-5 text-slate-500" />
                                </div>
                                <div>
                                    <div className="font-bold text-slate-900 dark:text-white">{article.author}</div>
                                    <div className="text-xs text-slate-500">Department of History</div>
                                </div>
                            </div>
                            <Button variant="outline" size="sm" className="gap-2">
                                <Share2 className="w-4 h-4" /> Share
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Cover Image */}
                <div className="container max-w-5xl -mt-8 mb-12">
                    <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl">
                        <Image src={article.image} alt="Article Cover" fill className="object-cover" priority />
                    </div>
                </div>

                {/* Content */}
                <div className="container max-w-3xl">
                    <div
                        className="prose prose-lg prose-slate dark:prose-invert max-w-none font-serif leading-loose"
                        dangerouslySetInnerHTML={{ __html: article.content }}
                    />
                </div>

            </article>

            <Footer />
        </main>
    );
}
