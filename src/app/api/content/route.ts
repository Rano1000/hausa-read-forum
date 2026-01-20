import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { title, author, description, category, type, coverImage, fileUrl } = body;

        // Based on 'type' we might save to Book or Article model. 
        // For simplicity, let's treat the dashboard as primarily for Books/Resources for now, 
        // or use a unified approach. The prompt asked for specific fields.

        // Check if it is a book upload
        if (body.contentType === 'book') {
            const book = await prisma.book.create({
                data: {
                    title,
                    author,
                    description,
                    type: category || 'Resource', // Mapping category to type
                    coverImage,
                    fileUrl,
                    published: true
                }
            });
            return NextResponse.json(book);
        } else {
            // Assume article (simplified for this task, as article usually needs rich text)
            // For the purpose of the dashboard requirement "Upload PDF files only... Add title, author...", 
            // it seems heavily focused on the Book/Resource aspect.
            // We will default to Book model for file uploads.
            const book = await prisma.book.create({
                data: {
                    title,
                    author,
                    description,
                    type: category || 'Resource',
                    coverImage,
                    fileUrl,
                    published: true
                }
            });
            return NextResponse.json(book);
        }

    } catch (error) {
        console.error('Content creation error:', error);
        return NextResponse.json({ error: 'Failed to create content' }, { status: 500 });
    }
}

export async function GET() {
    try {
        const books = await prisma.book.findMany({ orderBy: { createdAt: 'desc' } });
        return NextResponse.json({ books });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch content' }, { status: 500 });
    }
}

export async function DELETE(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');
        if (!id) return NextResponse.json({ error: 'ID required' }, { status: 400 });

        await prisma.book.delete({ where: { id } });
        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete' }, { status: 500 });
    }
}
