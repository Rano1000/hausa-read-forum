"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950">
            <Navbar />

            <div className="container py-16">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

                    <div className="space-y-8">
                        <div>
                            <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
                            <p className="text-slate-600 text-lg">
                                Have a question, a contribution, or a research inquiry? We'd love to hear from you.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <Card className="flex items-start gap-4 p-6">
                                <Mail className="w-6 h-6 text-[var(--primary)] mt-1" />
                                <div>
                                    <h3 className="font-semibold">Email Us</h3>
                                    <p className="text-slate-500">info@hausareadingforum.com</p>
                                    <p className="text-slate-500">submissions@hausareadingforum.com</p>
                                </div>
                            </Card>
                            <Card className="flex items-start gap-4 p-6">
                                <MapPin className="w-6 h-6 text-[var(--secondary)] mt-1" />
                                <div>
                                    <h3 className="font-semibold">Visit Us</h3>
                                    <p className="text-slate-500">Department of History & Culture</p>
                                    <p className="text-slate-500">University Bayero, Kano</p>
                                </div>
                            </Card>
                        </div>
                    </div>

                    <Card className="p-8 shadow-xl">
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">First Name</label>
                                    <input type="text" className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]" placeholder="Ibrahim" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Last Name</label>
                                    <input type="text" className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]" placeholder="Yusuf" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Email Address</label>
                                <input type="email" className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]" placeholder="you@example.com" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Message</label>
                                <textarea rows={4} className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]" placeholder="How can we help you?" />
                            </div>

                            <Button className="w-full" size="lg">Send Message</Button>
                        </form>
                    </Card>

                </div>
            </div>

            <Footer />
        </main>
    );
}
