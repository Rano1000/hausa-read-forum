"use client";

import { useState, useEffect } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Upload, Trash2, FileText, Image as ImageIcon, CheckCircle, Loader2 } from 'lucide-react';
import Image from 'next/image';

interface Book {
    id: string;
    title: string;
    author: string;
    type: string;
    createdAt: string;
}

export default function AdminDashboard() {
    const [activeTab, setActiveTab] = useState<'upload' | 'list'>('upload');
    const [books, setBooks] = useState<Book[]>([]);
    const [loading, setLoading] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [message, setMessage] = useState('');

    // Form State
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [coverUrl, setCoverUrl] = useState('');
    const [fileUrl, setFileUrl] = useState('');

    const [uploadingCover, setUploadingCover] = useState(false);
    const [uploadingFile, setUploadingFile] = useState(false);

    useEffect(() => {
        fetchContent();
    }, []);

    const fetchContent = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/content');
            const data = await res.json();
            if (res.ok) {
                setBooks(data.books || []);
            }
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>, type: 'cover' | 'pdf') => {
        const file = e.target.files?.[0];
        if (!file) return;

        const formData = new FormData();
        formData.append('file', file);

        if (type === 'cover') setUploadingCover(true);
        else setUploadingFile(true);

        try {
            const res = await fetch('/api/upload', {
                method: 'POST',
                body: formData,
            });
            const data = await res.json();
            if (data.success) {
                if (type === 'cover') setCoverUrl(data.url);
                else setFileUrl(data.url);
            }
        } catch (err) {
            console.error('Upload failed');
        } finally {
            if (type === 'cover') setUploadingCover(false);
            else setUploadingFile(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!coverUrl || !fileUrl) {
            setMessage('Please upload both a cover image and a PDF file.');
            return;
        }

        setSubmitting(true);
        try {
            const res = await fetch('/api/content', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contentType: 'book',
                    title,
                    author,
                    category,
                    description,
                    coverImage: coverUrl,
                    fileUrl
                })
            });

            if (res.ok) {
                setMessage('Resource published successfully!');
                // Reset form
                setTitle('');
                setAuthor('');
                setDescription('');
                setCoverUrl('');
                setFileUrl('');
                fetchContent(); // Refresh list
            } else {
                setMessage('Failed to publish.');
            }
        } catch (err) {
            setMessage('Error submitting form.');
        } finally {
            setSubmitting(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this item?')) return;

        try {
            await fetch(`/api/content?id=${id}`, { method: 'DELETE' });
            fetchContent();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
            <nav className="bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center shadow-sm dark:bg-slate-900 dark:border-slate-800">
                <div className="font-bold text-xl text-slate-800 dark:text-white">Admin Dashboard</div>
                <Button variant="outline" size="sm" onClick={() => window.location.href = '/'}>
                    View Site
                </Button>
            </nav>

            <div className="container py-8">
                <div className="flex gap-4 mb-8">
                    <button
                        onClick={() => setActiveTab('upload')}
                        className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeTab === 'upload' ? 'bg-[var(--primary)] text-white' : 'bg-white text-slate-600'}`}
                    >
                        Upload Resource
                    </button>
                    <button
                        onClick={() => setActiveTab('list')}
                        className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeTab === 'list' ? 'bg-[var(--primary)] text-white' : 'bg-white text-slate-600'}`}
                    >
                        Manage Content
                    </button>
                </div>

                {activeTab === 'upload' && (
                    <Card className="max-w-2xl p-8">
                        <h2 className="text-2xl font-bold mb-6">Publish New Content</h2>

                        {message && (
                            <div className={`p-4 mb-6 rounded-lg ${message.includes('success') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                {message}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Title</label>
                                    <input required value={title} onChange={e => setTitle(e.target.value)} className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:bg-slate-800 dark:border-slate-700 dark:text-white" placeholder="Book Title" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Author</label>
                                    <input required value={author} onChange={e => setAuthor(e.target.value)} className="w-full px-4 py-2 rounded-lg border border-slate-300" placeholder="Author Name" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Category</label>
                                <select required value={category} onChange={e => setCategory(e.target.value)} className="w-full px-4 py-2 rounded-lg border border-slate-300">
                                    <option value="">Select Category</option>
                                    <option value="History">History</option>
                                    <option value="Culture">Culture</option>
                                    <option value="Language">Language</option>
                                    <option value="Religion">Religion</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Description</label>
                                <textarea required value={description} onChange={e => setDescription(e.target.value)} rows={3} className="w-full px-4 py-2 rounded-lg border border-slate-300" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Cover Image Upload */}
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700 dark:text-slate-200">Cover Image</label>
                                    <div className="border-2 border-dashed border-slate-300 dark:border-slate-700 p-6 rounded-lg text-center hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors relative group cursor-pointer">
                                        <div className="mb-3 p-3 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-500 rounded-full inline-flex mx-auto group-hover:scale-110 transition-transform">
                                            {uploadingCover ? <Loader2 className="animate-spin w-6 h-6" /> : <ImageIcon className="w-6 h-6" />}
                                        </div>
                                        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                            {coverUrl ? "Change Cover Image" : "Upload Cover Image"}
                                        </p>
                                        <p className="text-xs text-slate-400 mt-1">PNG, JPG, or WEBP (Max 5MB)</p>
                                        <input type="file" accept="image/*" onChange={e => handleFileUpload(e, 'cover')} className="absolute inset-0 opacity-0 cursor-pointer" />
                                        {coverUrl && (
                                            <div className="absolute top-2 right-2 text-green-500 bg-white dark:bg-slate-900 rounded-full p-1 shadow-sm">
                                                <CheckCircle className="w-5 h-5" />
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* PDF Upload */}
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700 dark:text-slate-200">PDF Document</label>
                                    <div className="border-2 border-dashed border-slate-300 dark:border-slate-700 p-6 rounded-lg text-center hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors relative group cursor-pointer">
                                        <div className="mb-3 p-3 bg-red-50 dark:bg-red-900/30 text-red-500 rounded-full inline-flex mx-auto group-hover:scale-110 transition-transform">
                                            {uploadingFile ? <Loader2 className="animate-spin w-6 h-6" /> : <FileText className="w-6 h-6" />}
                                        </div>
                                        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                            {fileUrl ? "Change PDF File" : "Upload Book PDF"}
                                        </p>
                                        <p className="text-xs text-slate-400 mt-1">PDF format only (Max 10MB)</p>
                                        <input type="file" accept=".pdf" onChange={e => handleFileUpload(e, 'pdf')} className="absolute inset-0 opacity-0 cursor-pointer" />
                                        {fileUrl && (
                                            <div className="absolute top-2 right-2 text-green-500 bg-white dark:bg-slate-900 rounded-full p-1 shadow-sm">
                                                <CheckCircle className="w-5 h-5" />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {coverUrl && (
                                <div className="relative w-20 h-28 rounded overflow-hidden shadow-sm mx-auto">
                                    <Image src={coverUrl} alt="Cover Preview" fill className="object-cover" />
                                </div>
                            )}

                            <Button type="submit" className="w-full" isLoading={submitting}>
                                Publish Content
                            </Button>
                        </form>
                    </Card>
                )}

                {activeTab === 'list' && (
                    <Card className="max-w-4xl p-8">
                        <h2 className="text-2xl font-bold mb-6">Published Library</h2>
                        {loading ? (
                            <div className="text-center py-8 text-slate-500">Loading...</div>
                        ) : (
                            <div className="space-y-4">
                                {books.length === 0 && <p className="text-slate-500 text-center">No content found.</p>}
                                {books.map(book => (
                                    <div key={book.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border border-slate-100 dark:bg-slate-800 dark:border-slate-700">
                                        <div>
                                            <div className="font-bold text-slate-800 dark:text-slate-200">{book.title}</div>
                                            <div className="text-sm text-slate-500 dark:text-slate-400">by {book.author} • {book.type}</div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="text-xs text-slate-400">{new Date(book.createdAt).toLocaleDateString()}</div>
                                            <button onClick={() => handleDelete(book.id)} className="text-red-500 hover:text-red-700 p-2">
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </Card>
                )}
            </div>
        </div>
    );
}
