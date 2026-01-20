import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/Card";

export default function AboutPage() {
    return (
        <main className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950">
            <Navbar />

            <section className="bg-white py-16 dark:bg-slate-900">
                <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]">
                            Our Mission & Vision
                        </h1>
                        <p className="text-lg text-slate-600 leading-relaxed dark:text-slate-300">
                            The Hausa Reading Forum is a premier digital institution dedicated to preserving the integrity of Hausa cultural heritage. In an era of rampant misinformation, we serve as a bastion of verified, scholarly truth.
                        </p>
                        <p className="text-lg text-slate-600 leading-relaxed dark:text-slate-300">
                            Our platform connects researchers, historians, and students with authentic manuscripts, oral histories converted to text, and contemporary academic analyses.
                        </p>
                    </div>
                    <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
                        <Image src="/images/hero2.jpg" alt="Hausa Scholars" fill className="object-cover" />
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container max-w-4xl">
                    <h2 className="text-3xl font-bold text-center mb-12">Core Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card className="p-8 text-center hover:-translate-y-2 transition-transform border-t-4 border-t-teal-500">
                            <h3 className="font-bold text-xl mb-4">Authenticity</h3>
                            <p className="text-slate-600">Strict verification processes for all published materials to ensure historical accuracy.</p>
                        </Card>
                        <Card className="p-8 text-center hover:-translate-y-2 transition-transform border-t-4 border-t-green-500">
                            <h3 className="font-bold text-xl mb-4">Preservation</h3>
                            <p className="text-slate-600">Digitizing rare manuscripts and recording oral traditions for future generations.</p>
                        </Card>
                        <Card className="p-8 text-center hover:-translate-y-2 transition-transform border-t-4 border-t-yellow-500">
                            <h3 className="font-bold text-xl mb-4">Accessibility</h3>
                            <p className="text-slate-600">Making academic knowledge freely available to students and researchers worldwide.</p>
                        </Card>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
