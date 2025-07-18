// app/api/postAddPost/route.js
import clientPromise from '@/database/mongodb';

export async function POST(req) {
  try {
    const body = await req.json();
    const { title, content, author, images, topics, videoUrl, isProject } = body;

    if (!title || !content || !author) {
      return new Response(JSON.stringify({ error: 'Missing fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
    const collection = db.collection('Posts');

    const existente = await collection.findOne({ title });
    if (existente) {
      return new Response(JSON.stringify({ message: 'This title is already registered.' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    await collection.insertOne({
      title,
      content,
      author,
      topics,
      videoUrl: videoUrl || [],
      isProject: isProject || false,
      images: images || [],
      createdAt: new Date(),
    });

    return new Response(JSON.stringify({ message: 'Post created successfully.' }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Error saving post', details: err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
