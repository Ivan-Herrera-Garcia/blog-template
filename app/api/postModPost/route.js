// app/api/suscribirse/route.js o route.ts
import clientPromise from '@/database/mongodb';

export async function POST(req) {
    try {
        const body = await req.json();
        const _id = body.id?.trim(); // Optional field for post ID, if needed
        const title = body.title?.trim();

        const content = body.content?.trim();
        const author = body.author?.trim();

        const images = body.images || [];

        const topics = body.topics || [];

        const videoUrl = body.videoUrl?.trim() || null; // Optional field for video URL


        const client = await clientPromise;
        const db = client.db(process.env.MONGODB_DB);
        const collection = db.collection('Posts');

        // Obtener el registro existente por título para modificarlo
        await collection.updateOne({ _id }, { $set: { title, content, author, topics, images, videoUrl } });

        return new Response(JSON.stringify({ message: 'Post updated successfully.' }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (err) {
        return new Response(JSON.stringify({ error: 'Error saving post', details: err.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}