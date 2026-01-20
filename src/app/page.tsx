import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, Download, User } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-slate-50 dark:bg-slate-950">
        {/* Background Shapes */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-[var(--primary)]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-[var(--accent)]/5 rounded-full blur-3xl" />

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-[var(--primary)] text-sm font-medium border border-[var(--primary)]/20">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse" />
              Digital Academic Library
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 leading-tight dark:text-white">
              Preserving <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]">The Truth</span> About Hausa Culture
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed dark:text-slate-300">
              A central hub for reliable, authentic, and scholarly resources on Hausa history, language, and society. Published by experts.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link href="/books" className="w-full sm:w-auto btn btn-primary text-lg px-8 py-4 gap-2 shadow-lg hover:shadow-xl transition-all">
                Example Library <BookOpen className="w-5 h-5" />
              </Link>
              <Link href="/about" className="w-full sm:w-auto btn border border-current bg-transparent hover:bg-black/5 text-lg px-8 py-4">
                Learn More
              </Link>
            </div>
          </div>

          <div className="relative mx-auto lg:ml-auto w-full max-w-[500px] aspect-[4/5] lg:aspect-square">
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--primary)] to-[var(--accent)] rounded-2xl rotate-3 opacity-20 blur-xl"></div>
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white/50">
              <Image
                src="/images/hero1.jpg"
                alt="Hausa Culture"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
                <div className="text-white">
                  <p className="font-bold text-lg">Authentic Heritage</p>
                  <p className="text-sm text-slate-200">Discover the roots of Hausa civilization.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resources Section */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="container">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold mb-4">Featured Publications</h2>
              <p className="text-slate-600 max-w-xl">Explore our latest articles and books contributed by professors and researchers.</p>
            </div>
            <Link href="/articles" className="text-[var(--primary)] font-semibold flex items-center hover:text-[var(--primary-dark)] transition-colors">
              View All <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mock Data Cards */}
            {[1, 2, 3].map((item) => (
              <Card key={item} className="group cursor-pointer h-full flex flex-col overflow-hidden hover:-translate-y-1 transition-transform duration-300">
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={`/images/hero${item}.jpg`}
                    alt={`Featured Article ${item}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-[var(--secondary)] shadow-sm">
                    History
                  </div>
                </div>
                <div className="flex flex-col flex-grow p-6">
                  <h3 className="font-bold text-xl mb-3 leading-snug text-slate-900 group-hover:text-[var(--primary)] transition-colors dark:text-white">
                    The Evolution of Hausa Architecture
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-2 leading-relaxed dark:text-slate-400">
                    An in-depth analysis of traditional building techniques and their cultural significance over centuries.
                  </p>
                  <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
                    <div className="flex items-center text-xs text-slate-500 font-medium dark:text-slate-500">
                      <User className="w-3 h-3 mr-1" /> Prof. A. Ibrahim
                    </div>
                    <span className="text-xs font-bold text-[var(--primary)] uppercase tracking-wider">Read Article</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[var(--primary)] relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-[url('/images/hero2.jpg')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <div className="container relative z-10 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Join Our Knowledge Community</h2>
          <p className="text-teal-100 text-lg mb-8 leading-relaxed">
            Access hundreds of digital resources, download PDFs, and deepen your understanding of the rich Hausa heritage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/books" className="w-full sm:w-auto btn text-lg px-8 py-4 bg-white text-[var(--primary)] hover:bg-teal-50 hover:text-[var(--primary-dark)] border-none">
              Explore Library
            </Link>
            <Link href="/contact" className="w-full sm:w-auto btn text-lg px-8 py-4 border border-white text-white hover:bg-white/10 bg-transparent">
              Contribution Inquiry
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
